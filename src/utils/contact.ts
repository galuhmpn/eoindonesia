/**
 * EO Indonesia - Centralized Contact & WhatsApp Intelligence Config
 * Domain: eoindonesia.id
 */

export const CONTACT_INFO = {
  phoneRaw: '6285360821111',
  phoneDisplay: '+62 853-6082-1111',
  phoneTel: 'tel:+6285360821111',
  email: 'eoindonesia.id@gmail.com',
  address: {
    street: 'Gg. Nuri No.99, Pringgolayan, Banguntapan',
    subdistrict: 'Kec. Banguntapan, Kabupaten Bantul',
    province: 'Daerah Istimewa Yogyakarta',
    postalCode: '55198',
    full: 'Gg. Nuri No.99, Pringgolayan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198'
  },
  hours: 'Operasional: 24/7 Hotline Proyek & Kantor: Senin - Sabtu 08.30 - 17.30 WIB',
  mapsEmbedQuery: 'Gg.+Nuri+No.99,+Pringgolayan,+Banguntapan,+Bantul,+Yogyakarta+55198'
};

export type CtaGreetingType =
  | 'general'
  | 'hero'
  | 'floating'
  | 'rfp_draft'
  | 'rfp_submitted'
  | 'service_mice'
  | 'service_corporate'
  | 'service_brand'
  | 'service_festival'
  | 'service_protocol'
  | 'service_virtual'
  | 'service_custom'
  | 'project_case'
  | 'company_profile'
  | 'vendor_registration'
  | 'emergency_hotline'
  | 'contact_office_visit'
  | 'insight_consultation';

export interface GreetingMetadata {
  projectName?: string;
  serviceTitle?: string;
  rfpCode?: string;
  organization?: string;
  contactPerson?: string;
  eventType?: string;
  audienceScale?: string;
  targetDate?: string;
  locationCity?: string;
  budgetRange?: string;
  vendorName?: string;
  vendorCategory?: string;
  vendorCity?: string;
  articleTitle?: string;
}

/**
 * Returns a well-researched, polite, context-specific WhatsApp URL.
 * Designed for high conversion in Indonesian B2B & corporate MICE events.
 */
export function getWhatsAppUrl(type: CtaGreetingType, meta: GreetingMetadata = {}, lang: 'id' | 'en' = 'id'): string {
  let message = '';

  if (lang === 'en') {
    switch (type) {
      case 'hero':
      case 'general':
        message = `Hello EO Indonesia Team (eoindonesia.id),\n\nI would like to consult on event management and production services for our upcoming project. Please share your availability for an initial briefing session.\n\nThank you.`;
        break;
      case 'floating':
        message = `Hello EO Indonesia Team,\n\nI am contacting you via the eoindonesia.id consultation desk. I have an event concept to discuss. Could we schedule a call or meet?\n\nThank you.`;
        break;
      case 'rfp_submitted':
      case 'rfp_draft':
        message = `Hello EO Indonesia Team,\n\nI would like to submit a formal Request for Proposal (RFP) for our event:\n- RFP Code: ${meta.rfpCode || 'EOID-RFP-ONLINE'}\n- Organization: ${meta.organization || '[Organization Name]'}\n- Event Type: ${meta.eventType || '[Event Format]'}\n- Target Date: ${meta.targetDate || '[Target Date]'}\n- Location: ${meta.locationCity || '[City]'}\n- Est. Attendees: ${meta.audienceScale || '[Pax]'}\n- Budget Range: ${meta.budgetRange || '[Budget]'}\n\nPlease follow up with a formal proposal.\n\nBest regards,\n${meta.contactPerson || 'Project Committee'}`;
        break;
      case 'service_mice':
        message = `Hello EO Indonesia MICE Division,\n\nWe would like to consult regarding our upcoming International Conference / Summit. We require technical staging, Bosch simultaneous interpreting, and accredited OHS safety protocols.\n\nPlease share your corporate package details.`;
        break;
      case 'service_corporate':
        message = `Hello EO Indonesia Team,\n\nWe are planning a Corporate Gathering / Annual Gala for our company. Please provide concept references, budget projections, and production timelines.`;
        break;
      case 'service_brand':
        message = `Hello EO Indonesia Creative Production Team,\n\nWe are looking to organize a high-impact Brand Activation / Product Launch. We would like to consult on experiential booth design and AV integration.`;
        break;
      case 'service_festival':
        message = `Hello EO Indonesia Festival Production Team,\n\nWe would like to discuss stage production for a public festival/concert, including line array audio, certified rigging, and police permitting coordination.`;
        break;
      case 'service_protocol':
        message = `Hello EO Indonesia Protocol Division,\n\nWe would like to discuss high-level State Ceremony / Diplomatic Protocol management with strict timeline discipline.`;
        break;
      case 'service_virtual':
        message = `Hello EO Indonesia Digital Staging Team,\n\nWe are interested in your Virtual & Hybrid XR Event solutions. Please share technical studio capabilities and multi-cam broadcast pricing.`;
        break;
      case 'service_custom':
        message = `Hello EO Indonesia Team,\n\nI am interested in your production service: "${meta.serviceTitle || 'Event Service'}". Please provide further technical specifications and an initial quotation.`;
        break;
      case 'project_case':
        message = `Hello EO Indonesia Team,\n\nI reviewed your portfolio case study for "${meta.projectName || 'Featured Project'}" on eoindonesia.id. We have a similar upcoming event and would like to consult on technical production parameters.`;
        break;
      case 'company_profile':
        message = `Hello EO Indonesia Management,\n\nI have reviewed the official Company Profile deck for eoindonesia.id and would like to connect regarding potential corporate partnership or vendor onboarding.\n\nThank you.`;
        break;
      case 'vendor_registration':
        message = `Hello EO Indonesia Procurement Division,\n\nI would like to follow up on our Vendor Partner Application for ${meta.vendorName || '[Company Name]'} in ${meta.vendorCity || '[City]'} specializing in ${meta.vendorCategory || 'Production'}.\n\nPlease guide us on the next accreditation steps.`;
        break;
      case 'emergency_hotline':
        message = `[URGENT 24/7 PRODUCTION HOTLINE]\n\nHello EO Indonesia Team,\nWe require immediate technical support or emergency coordination for our ongoing field event production. Please respond as soon as possible.`;
        break;
      case 'contact_office_visit':
        message = `Hello EO Indonesia Head Office (Banguntapan, Bantul, D.I. Yogyakarta),\n\nI would like to schedule an in-person meeting to discuss an event collaboration. Please confirm the available schedule.`;
        break;
      case 'insight_consultation':
        message = `Hello EO Indonesia Knowledge Desk,\n\nI read your guide regarding "${meta.articleTitle || 'Event Regulations'}" and would like to ask a technical question regarding our upcoming event planning.`;
        break;
      default:
        message = `Hello EO Indonesia Team (eoindonesia.id),\n\nI would like to consult on event management services.`;
    }
  } else {
    // Indonesian greetings (Polite, structured, professional)
    switch (type) {
      case 'hero':
        message = `Halo Tim EO Indonesia (eoindonesia.id),\n\nSaya tertarik dengan solusi manajemen acara dan event production berskala nasional. Kami memiliki rencana acara dan ingin berkonsultasi mengenai perancangan konsep serta estimasi produksinya.\n\nMohon info ketersediaan jadwal diskusi awal. Terima kasih!`;
        break;
      case 'floating':
        message = `Halo Tim EO Indonesia (eoindonesia.id),\n\nSaya ingin berkonsultasi langsung melalui Help Desk Acara. Kami membutuhkan informasi terkait penyelenggaraan acara dan ketersediaan tim produksi untuk tanggal rencana kami.\n\nMohon bantuannya, terima kasih!`;
        break;
      case 'general':
        message = `Halo Tim EO Indonesia,\n\nSaya ingin berkonsultasi mengenai rencana penyelenggaraan acara kami. Mohon informasi portofolio, alur kerja sama, serta jadwal diskusi lebih lanjut.\n\nTerima kasih.`;
        break;
      case 'rfp_submitted':
        message = `[PENGAJUAN REQUEST FOR PROPOSAL - EOINDONESIA.ID]\n\nHalo Tim EO Indonesia, saya ingin menindaklanjuti pengajuan RFP resmi dengan rincian berikut:\n\n• Kode RFP: ${meta.rfpCode || 'EOID-RFP-TERDAFTAR'}\n• Organisasi/Perusahaan: ${meta.organization || '-'}\n• PIC: ${meta.contactPerson || '-'}\n• Jenis Acara: ${meta.eventType || '-'}\n• Lokasi Kota: ${meta.locationCity || '-'}\n• Estimasi Peserta: ${meta.audienceScale || '-'}\n• Target Tanggal: ${meta.targetDate || '-'}\n• Estimasi Anggaran: ${meta.budgetRange || '-'}\n\nMohon tanggapan dan pengiriman proposal penawaran resmi dari tim eoindonesia.id. Terima kasih!`;
        break;
      case 'rfp_draft':
        message = `Halo Tim EO Indonesia (eoindonesia.id),\n\nSaya ingin meminta proposal penawaran (RFP) untuk penyelenggaraan acara kami:\n- Format Acara: ${meta.eventType || '[Sebutkan jenis acara]'}\n- Estimasi Peserta: ${meta.audienceScale || '[Jumlah pax]'}\n- Lokasi: ${meta.locationCity || '[Kota]'}\n- Rencana Tanggal: ${meta.targetDate || '[Bulan/Tahun]'}\n\nMohon dikirimkan proposal konsep serta jadwal konsultasi awal. Terima kasih!`;
        break;
      case 'service_mice':
        message = `Halo Tim MICE EO Indonesia,\n\nKami dari [Nama Instansi/Perusahaan] bermaksud menyelenggarakan Konferensi Internasional / Summit MICE. Mohon informasi teknis mengenai sistem penerjemah simultan (simultaneous interpreting), visual LED wall melengkung, tata suara Bosch, dan kepatuhan protokoler VVIP.\n\nTerima kasih.`;
        break;
      case 'service_corporate':
        message = `Halo Tim EO Indonesia,\n\nPerusahaan kami berencana mengadakan Corporate Gathering / Rapat Umum Pemegang Saham (RUPS) / Gala Dinner. Mohon proposal konsep tematik, layout panggung, estimasi anggaran, dan susunan rundown presisi.\n\nTerima kasih!`;
        break;
      case 'service_brand':
        message = `Halo Tim Creative Production EO Indonesia,\n\nKami ingin berdiskusi mengenai Brand Activation / Peluncuran Produk baru dengan konsep experiential marketing dan instalasi panggung interaktif. Mohon arahan jadwal pertemuan atau presentasi konsep.\n\nTerima kasih!`;
        break;
      case 'service_festival':
        message = `Halo Tim Produksi Konser & Festival EO Indonesia,\n\nKami ingin mendiskusikan produksi panggung skala besar untuk konser musik/festival publik. Kebutuhan kami meliputi sound system line array teruji, rigging bersertifikat K3L, perizinan keramaian Mabes/Polda, dan manajemen alur massa.\n\nMohon feedback ketersediaan jadwal. Terima kasih!`;
        break;
      case 'service_protocol':
        message = `Halo Tim EO Indonesia,\n\nKami ingin berkonsultasi mengenai penyelenggaraan Acara Kenegaraan / Upacara Protokoler Resmi dengan standar pengawalan protokoler kenegaraan dan eksekusi waktu tanpa deviasi detik.\n\nTerima kasih.`;
        break;
      case 'service_virtual':
        message = `Halo Tim Produksi Digital EO Indonesia,\n\nKami berminat menggunakan layanan Virtual & Hybrid Event XR dari eoindonesia.id. Mohon penjelasan fasilitas broadcast studio, latensi streaming, dan paket penawaran teknisnya.\n\nTerima kasih.`;
        break;
      case 'service_custom':
        message = `Halo Tim EO Indonesia,\n\nSaya tertarik dengan spesifikasi layanan "${meta.serviceTitle || 'Layanan Produksi Acara'}". Mohon dapat dihubungi untuk konsultasi kebutuhan spesifik dan pembuatan estimasi RAB proyek kami.\n\nTerima kasih!`;
        break;
      case 'project_case':
        message = `Halo Tim EO Indonesia,\n\nSaya melihat dokumentasi dan studi kasus proyek "${meta.projectName || 'Proyek Portofolio'}" di situs eoindonesia.id. Kami merencanakan acara dengan skala serupa dan ingin mendiskusikan pendekatan teknis serta opsi produksinya.\n\nTerima kasih.`;
        break;
      case 'company_profile':
        message = `Halo Tim Manajemen EO Indonesia,\n\nSaya telah mempelajari Company Profile & Dokumen Kapabilitas Resmi EO Indonesia. Kami ingin mendiskusikan peluang kerja sama penyelenggaraan acara dan proses pendaftaran rekanan resmi vendor di perusahaan kami.\n\nTerima kasih!`;
        break;
      case 'vendor_registration':
        message = `Halo Tim Procurement EO Indonesia,\n\nSaya ingin mengonfirmasi pendaftaran kemitraan vendor acara:\n- Nama Perusahaan: ${meta.vendorName || '[Nama Usaha]'}\n- Bidang Spesialisasi: ${meta.vendorCategory || '[Audio / Rigging / LED / dll]'}\n- Kota Gudang/Warehouse: ${meta.vendorCity || '[Kota]'}\n\nKami siap mengikuti proses standardisasi kurasi dan verifikasi teknis K3L eoindonesia.id. Terima kasih!`;
        break;
      case 'emergency_hotline':
        message = `[URGENT PRODUCTION HOTLINE 24/7]\n\nHalo Tim EO Indonesia,\nKami membutuhkan asistensi mendesak / koordinasi darurat terkait kebutuhan produksi dan teknis acara di lapangan. Mohon respon segera dari Command Center. Terima kasih.`;
        break;
      case 'contact_office_visit':
        message = `Halo Tim EO Indonesia (Kantor Pusat Bantul, D.I. Yogyakarta),\n\nSaya ingin membuat janji temu di Kantor Pusat: Gg. Nuri No.99, Pringgolayan, Banguntapan, Bantul, D.I. Yogyakarta untuk membicarakan rencana kerja sama acara.\n\nMohon konfirmasi waktu luang tim produksi pada pekan ini. Terima kasih!`;
        break;
      case 'insight_consultation':
        message = `Halo Tim Wawasan EO Indonesia,\n\nSaya membaca panduan teknis "${meta.articleTitle || 'Panduan Regulasi Acara'}" di eoindonesia.id. Kami memiliki beberapa pertanyaan teknis terkait implementasi di lapangan untuk acara kami.\n\nMohon arahannya. Terima kasih!`;
        break;
      default:
        message = `Halo Tim EO Indonesia (eoindonesia.id),\n\nSaya ingin berkonsultasi mengenai rencana acara kami. Mohon informasi lebih lanjut. Terima kasih.`;
    }
  }

  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`;
}
