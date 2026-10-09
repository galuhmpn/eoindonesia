import React, { useState } from 'react';
import { Language } from '../types';
import { getWhatsAppUrl } from '../utils/contact';
import { Calculator, Sparkles, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface EventBudgetEstimatorProps {
  lang: Language;
  onOpenRfp: () => void;
}

export const EventBudgetEstimator: React.FC<EventBudgetEstimatorProps> = ({ lang, onOpenRfp }) => {
  const [eventType, setEventType] = useState<'mice' | 'corporate' | 'festival' | 'activation'>('corporate');
  const [attendees, setAttendees] = useState<number>(250);
  const [city, setCity] = useState<string>('Yogyakarta');
  const [needLedWall, setNeedLedWall] = useState<boolean>(true);
  const [needProRigging, setNeedProRigging] = useState<boolean>(true);
  const [needPolicePermit, setNeedPolicePermit] = useState<boolean>(true);

  // Dynamic Estimation Calculation Engine
  // Starting price begins from Rp 2.500.000 depending on needs & scale, strictly capped <= Rp 200 Juta
  const calculateEstimate = () => {
    let base = 15000000;
    if (eventType === 'mice') base = 25000000;
    if (eventType === 'activation') base = 20000000;
    if (eventType === 'festival') base = 35000000;

    // Flexible attendee scaling with Rp 2.500.000 starting rate reference
    const costPerPaxUnit = attendees < 200 ? 110000 : attendees < 500 ? 85000 : 55000;
    const attendeeMultiplier = attendees * costPerPaxUnit;

    // Technical Addons
    const ledCost = needLedWall ? (attendees > 1000 ? 25000000 : 16000000) : 0;
    const riggingCost = needProRigging ? 18000000 : 0;
    const permitCost = needPolicePermit ? 8000000 : 0;

    const rawMin = base + attendeeMultiplier * 0.85 + ledCost + riggingCost + permitCost;
    const rawMax = base * 1.25 + attendeeMultiplier * 1.2 + ledCost * 1.15 + riggingCost * 1.15 + permitCost * 1.1;

    // Mandatory ceiling: Anggaran tidak melebihi Rp 200 Juta
    const totalMax = Math.min(Math.round(rawMax), 200000000);
    const totalMin = Math.min(Math.round(rawMin), Math.max(12000000, totalMax - 15000000));

    const crewCount = Math.max(10, Math.round(attendees / 60));
    const prepDays = attendees > 2000 ? '21–30 Hari' : attendees > 500 ? '14–21 Hari' : '7–14 Hari';

    return {
      minStr: `Rp ${(totalMin / 1000000).toFixed(0)} Juta`,
      maxStr: `Rp ${(totalMax / 1000000).toFixed(0)} Juta`,
      ratePerPaxText: 'Mulai Rp 2.500.000',
      crewCount,
      prepDays
    };
  };

  const est = calculateEstimate();

  const handleConsultWhatsApp = () => {
    const waUrl = getWhatsAppUrl('general', {
      eventType: eventType.toUpperCase(),
      audienceScale: `${attendees} Pax`,
      locationCity: city,
      budgetRange: `${est.minStr} – ${est.maxStr}`
    }, lang);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="kalkulator-rab" className="py-16 sm:py-24 bg-[#06142E] text-white border-b border-[#0A2150] relative overflow-hidden scroll-mt-14">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#075BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#19E6FF]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#19E6FF] mb-2 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#19E6FF]" />
              <span>{lang === 'id' ? 'Kalkulator Anggaran Acara Interaktif' : 'Interactive Event Budget Estimator'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              {lang === 'id'
                ? 'Simulasikan Kebutuhan & Estimasi Anggaran Produksi.'
                : 'Simulate Event Scope & Preliminary Budget Parameters.'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#A9B8D0]">
              {lang === 'id'
                ? 'Dapatkan estimasi biaya transparan: harga mulai dari Rp 2.500.000 tergantung kebutuhan & skala, dengan garansi alokasi anggaran tidak melebihi plafon Rp 200 Juta.'
                : 'Transparent production estimation: prices starting from IDR 2,500,000 based on scope & scale, with guaranteed budgetary ceilings capped at IDR 200 Million.'}
            </p>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0A2150]/60 backdrop-blur-md border border-[#008CFF]/25 shadow-xl space-y-6">
            {/* Event Category Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-2">
                {lang === 'id' ? '1. Pilih Kategori Acara' : '1. Select Event Format'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'corporate', label: 'Corporate & Gathering' },
                  { id: 'mice', label: 'MICE & Konferensi' },
                  { id: 'festival', label: 'Konser & Festival' },
                  { id: 'activation', label: 'Brand Activation' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setEventType(cat.id as any)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      eventType === cat.id
                        ? 'bg-[#075BFF] border-[#19E6FF] text-white shadow-[0_2px_12px_rgba(7,91,255,0.4)]'
                        : 'bg-[#06142E] border-[#008CFF]/25 text-[#A9B8D0] hover:border-[#008CFF]/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Attendees Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="uppercase tracking-wider text-[#19E6FF]">
                  {lang === 'id' ? '2. Jumlah Peserta / Audiens' : '2. Estimated Attendees'}
                </span>
                <span className="text-white text-base font-mono">
                  {attendees.toLocaleString('id-ID')} Pax
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={2500}
                step={50}
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full h-2 bg-[#06142E] rounded-lg appearance-none cursor-pointer accent-[#19E6FF]"
              />
              <div className="flex justify-between text-[11px] text-[#A9B8D0] mt-1 font-mono">
                <span>50 Pax</span>
                <span>500 Pax</span>
                <span>1.500 Pax</span>
                <span>2.500 Pax (Maksimal)</span>
              </div>
            </div>

            {/* City Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-2">
                {lang === 'id' ? '3. Lokasi Pelaksanaan Acara' : '3. Event Location'}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#06142E] border border-[#008CFF]/30 text-white text-xs focus:outline-none focus:border-[#19E6FF]"
              >
                <option value="Yogyakarta">D.I. Yogyakarta (Kantor Pusat EO Indonesia)</option>
                <option value="Jakarta">DKI Jakarta & Bodetabek (Hub Logistik Utama)</option>
                <option value="Bali">Bali (Denpasar / Nusa Dua / Kuta - Hub MICE Internasional)</option>
                <option value="Surabaya">Surabaya & Jawa Timur (Hub Jawa Timur)</option>
                <option value="Medan">Medan & Sumatra Utara (Hub Regional Sumatra)</option>
                <option value="Makassar">Makassar & Sulawesi Selatan (Hub Indonesia Timur)</option>
                <option value="Balikpapan">Balikpapan & Ibu Kota Nusantara (IKN)</option>
                <option value="Lainnya">Kota Lainnya (Jaringan 38 Provinsi)</option>
              </select>
            </div>

            {/* Hardware Add-on Toggles */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#19E6FF] mb-2">
                {lang === 'id' ? '4. Modul Kebutuhan Teknis Utama' : '4. Core Technical Modules'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setNeedLedWall(!needLedWall)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    needLedWall
                      ? 'bg-[#081A3A] border-[#19E6FF] text-white font-semibold'
                      : 'bg-[#06142E] border-[#008CFF]/20 text-[#A9B8D0]'
                  }`}
                >
                  <div className="font-bold text-white">LED Screen Wall</div>
                  <div className="text-[10px] text-[#A9B8D0] mt-0.5">P1.8/P2.6 Curved Wall</div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedProRigging(!needProRigging)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    needProRigging
                      ? 'bg-[#081A3A] border-[#19E6FF] text-white font-semibold'
                      : 'bg-[#06142E] border-[#008CFF]/20 text-[#A9B8D0]'
                  }`}
                >
                  <div className="font-bold text-white">Rigging TUV K3L</div>
                  <div className="text-[10px] text-[#A9B8D0] mt-0.5">Aluminum Heavy-Duty</div>
                </button>

                <button
                  type="button"
                  onClick={() => setNeedPolicePermit(!needPolicePermit)}
                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    needPolicePermit
                      ? 'bg-[#081A3A] border-[#19E6FF] text-white font-semibold'
                      : 'bg-[#06142E] border-[#008CFF]/20 text-[#A9B8D0]'
                  }`}
                >
                  <div className="font-bold text-white">Izin Keramaian Polri</div>
                  <div className="text-[10px] text-[#A9B8D0] mt-0.5">Mabes / Polda / Polres</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Box (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A2150] to-[#06142E] border border-[#008CFF]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#075BFF]/25 rounded-full blur-2xl pointer-events-none" />

            <div className="text-xs font-mono uppercase text-[#19E6FF] font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#19E6FF]" />
              <span>ESTIMASI ALOKASI ANGGARAN</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19E6FF]/15 border border-[#19E6FF]/40 text-[#19E6FF] text-[11px] font-bold my-2">
              <span>{est.ratePerPaxText} · Tergantung Kebutuhan & Skala</span>
            </div>

            <div className="mt-2">
              <div className="text-xs text-[#A9B8D0]">Rentang Anggaran Produksi:</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-1 tracking-tight text-balance">
                {est.minStr} <span className="text-sm font-normal text-[#A9B8D0]">s/d</span> {est.maxStr}
              </div>
              <div className="mt-2 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Plafon Anggaran Dijamin Tidak Melebihi Rp 200 Juta</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#0A2150] space-y-3 text-xs text-[#A9B8D0]">
              <div className="flex items-center justify-between">
                <span>Rekomendasi Tim Lapangan:</span>
                <span className="font-bold text-white font-mono">{est.crewCount}+ Personil Ahli</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Waktu Persiapan & Pra-Produksi:</span>
                <span className="font-bold text-white font-mono">{est.prepDays}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Standar Keselamatan:</span>
                <span className="font-bold text-[#19E6FF]">Sertifikasi K3L & APMI</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Basis Operasional:</span>
                <span className="font-bold text-white">{city}</span>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#0A2150] space-y-3">
              <button
                onClick={handleConsultWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold text-white bg-[#075BFF] hover:bg-[#008CFF] rounded-xl transition-all shadow-[0_4px_20px_rgba(7,91,255,0.45)] border border-[#19E6FF]/30 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#19E6FF]" />
                <span>{lang === 'id' ? 'Kirim Simulasi ke WhatsApp (6285360821111)' : 'Send Simulation to WhatsApp Desk'}</span>
              </button>

              <button
                onClick={onOpenRfp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#B6F4FF] hover:text-white bg-[#06142E] hover:bg-[#081A3A] rounded-xl transition-all border border-[#008CFF]/30 cursor-pointer"
              >
                <span>{lang === 'id' ? 'Lanjutkan ke Form RFP Lengkap' : 'Proceed to Full RFP Form'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#A9B8D0]">
              <ShieldCheck className="w-4 h-4 text-[#19E6FF] shrink-0" />
              <span>Estimasi bersifat indikatif untuk perencanaan awal. RAB final disesuaikan dengan rider teknis.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
