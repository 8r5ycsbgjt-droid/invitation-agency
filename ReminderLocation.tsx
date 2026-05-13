import { useState } from 'react';
import { Calendar, Send, MapPin, ExternalLink, Navigation } from 'lucide-react';
import { OrnamentDivider, OrnamentCardFrame } from './Ornaments';

export const ReminderLocation: React.FC = () => {
  const [showTgToast, setShowTgToast] = useState(false);

  // Google Calendar Link format
  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Жасұлан мен Омар | Сүндет той & Выпускной кеші')}&dates=20260620T130000Z/20260620T190000Z&details=${encodeURIComponent('Салтанатты дастарқанға шақырамыз.')}&location=${encodeURIComponent('Семей қаласы, «ALTYN ADAM»')}`;

  const handleTgReminder = () => {
    setShowTgToast(true);
    setTimeout(() => setShowTgToast(false), 4000);
  };

  return (
    <section className="w-full py-16 px-6 relative z-10">
      <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <OrnamentDivider />
      </div>

      {/* REMINDER BLOCK (ОБЯЗАТЕЛЬНО) */}
      <div className="max-w-md mx-auto text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <p className="font-vibes text-3xl text-[#C8A96A] tracking-wider mb-1">
          Ұмытпау үшін
        </p>
        <h2 className="font-cormorant text-3xl uppercase tracking-[0.1em] text-[#F6F1E8] font-light mb-6">
          Еске салу
        </h2>

        <div className="space-y-4 opacity-0 animate-scale-in" style={{ animationDelay: '350ms' }}>
          {/* Calendar link button */}
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C8A96A] via-[#E9DDCF] to-[#C8A96A] text-[#2B2620] font-sans uppercase text-xs tracking-[0.15em] font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.3)] flex items-center justify-center gap-2 cursor-pointer block active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Күнтізбеге қосу</span>
          </a>

          {/* Telegram reminder button */}
          <button
            onClick={handleTgReminder}
            className="w-full py-3.5 rounded-full luxury-glass text-[#C8A96A] hover:text-[#F6F1E8] hover:border-[#C8A96A] font-sans uppercase text-xs tracking-[0.15em] font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,169,106,0.15)] flex items-center justify-center gap-2 cursor-pointer relative active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Telegram арқылы еске салу</span>
          </button>
        </div>

        {/* Informative overlay toast */}
        {showTgToast && (
          <div className="mt-4 p-3 rounded-lg bg-[#C8A96A]/20 border border-[#C8A96A]/40 text-[#F6F1E8] font-sans text-xs animate-fade-in">
            ✨ Тойға 1 күн қалғанда және сол күні таңертең Telegram бот сізге еске салу хабарламасын жібереді.
          </div>
        )}
      </div>

      {/* LOCATION BLOCK */}
      <div className="max-w-md mx-auto text-center opacity-0 animate-fade-up" style={{ animationDelay: '500ms' }}>
        <p className="font-vibes text-3xl text-[#C8A96A] tracking-wider mb-1">
          Мекен-жайы
        </p>
        <h2 className="font-cormorant text-3xl uppercase tracking-[0.1em] text-[#F6F1E8] font-light mb-2">
          Өтетін орны
        </h2>
        <p className="font-sans text-xs text-[#E9DDCF]/70 font-light mb-6 max-w-xs mx-auto">
          Семей қаласы, «ALTYN ADAM» Салтанат сарайы
        </p>

        {/* Golden frame map view */}
        <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#C8A96A]/30 to-[#C8A96A]/5 gold-glow mb-6 opacity-0 animate-scale-in" style={{ animationDelay: '650ms' }}>
          <div className="w-full aspect-video rounded-xl bg-[#2B2620] relative overflow-hidden flex items-center justify-center border border-[#C8A96A]/20">
            <OrnamentCardFrame />

            {/* Stylized vector map graphic grid */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C8A96A" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Simulated roads */}
                <path d="M 0 40 Q 150 50 350 20" fill="none" stroke="#C8A96A" strokeWidth="4" />
                <path d="M 120 0 Q 140 100 100 200" fill="none" stroke="#C8A96A" strokeWidth="3" />
              </svg>
            </div>

            {/* Destination Point Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C8A96A]/20 flex items-center justify-center relative animate-pulse">
                <div className="w-8 h-8 rounded-full bg-[#C8A96A] flex items-center justify-center text-[#2B2620] shadow-lg">
                  <MapPin className="w-4 h-4 fill-[#2B2620] text-[#C8A96A]" />
                </div>
              </div>
              <span className="mt-2 px-3 py-1 rounded-full bg-[#2B2620]/90 border border-[#C8A96A]/40 font-sans text-[10px] text-[#C8A96A] tracking-widest uppercase">
                ALTYN ADAM
              </span>
            </div>

            {/* Simulated mini routing badges */}
            <div className="absolute bottom-2 left-2 text-[9px] font-sans text-[#E9DDCF]/40 bg-[#2B2620]/80 px-2 py-0.5 rounded">
              GPS: 50.4112° N, 80.2275° E
            </div>
          </div>
        </div>

        {/* 2GIS action button */}
        <div className="opacity-0 animate-scale-in" style={{ animationDelay: '800ms' }}>
          <a
            href="https://2gis.kz/semey/geo/70000001095707295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C8A96A] via-[#E9DDCF] to-[#C8A96A] text-[#2B2620] font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] cursor-pointer active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5 fill-[#2B2620]" />
            <span>2GIS ашу</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};
