import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  breadcrumbs?: { name: string; path: string }[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  breadcrumbs
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = `${title} | EO Indonesia (eoindonesia.id)`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // 3. Update Canonical Link
    const currentCanonical = `https://eoindonesia.id${canonicalPath || location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', currentCanonical);
    }

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentCanonical);

    // 5. BreadcrumbList Schema (JSON-LD)
    if (breadcrumbs && breadcrumbs.length > 0) {
      const scriptId = 'jsonld-breadcrumbs';
      let existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Beranda',
            item: 'https://eoindonesia.id/'
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            position: idx + 2,
            name: b.name,
            item: `https://eoindonesia.id${b.path}`
          }))
        ]
      };

      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, location.pathname, breadcrumbs]);

  return null;
};
