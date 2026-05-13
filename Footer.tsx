// Footer section
import { OrnamentHeaderEmblem, OrnamentWatermark } from './Ornaments';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 px-6 relative overflow-hidden bg-[#2B2620]/90 border-t border-[#C8A96A]/10 select-none">
      {/* Background Ornament Watermark with 5% opacity */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center opacity-5 translate-y-1/3">
        <OrnamentWatermark className="w-[100vw] max-w-[600px] text-[#C8A96A]" />
      </div>

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[100px] bg-[#C8A96A]/10 blur-[60px] pointer-events-none" />

      <div className="max-w-md mx-auto text-center relative z-10 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <OrnamentHeaderEmblem className="w-10 h-10 text-[#C8A96A]/60 mx-auto mb-4" />

        <p className="font-sans text-xs text-[#E9DDCF]/70 font-light tracking-wide max-w-xs mx-auto leading-relaxed mb-6">
          Қуанышымызға ортақ болып, салтанатты кешіміздің төрінен табылатыныңызға сенім білдіреміз.
        </p>

        <p className="font-sans uppercase text-[10px] tracking-[0.3em] text-[#C8A96A]/80 mb-1">
          Той иелері
        </p>

        {/* Premium signature */}
        <p className="font-cormorant text-2xl sm:text-3xl font-medium text-[#F6F1E8] tracking-widest gold-glow-text my-2">
          Гульмира — Жанерке
        </p>

        <div className="w-12 h-[1px] bg-[#C8A96A]/20 mx-auto my-4" />

        <p className="font-vibes text-xl text-[#C8A96A]/50 tracking-wider">
          Келіңіздер, күтеміз
        </p>

        {/* Digital Luxury Experience Tagline */}
        <div className="mt-12 pt-4 border-t border-[#C8A96A]/5 flex flex-col items-center gap-1 opacity-40 hover:opacity-80 transition-opacity">
          <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#E9DDCF]">
            Premium Cultural Digital Experience
          </span>
          <span className="font-sans text-[8px] text-[#E9DDCF]/60 tracking-wider">
            Designed for Jasulan &amp; Omar © 2026
          </span>
        </div>
      </div>
    </footer>
  );
};
