// Hero Screen Component
import { OrnamentWatermark, OrnamentHeaderEmblem } from './Ornaments';

interface HeroProps {
  onOpenInvitation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInvitation }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 py-12 overflow-hidden select-none">
      {/* Slow Parallax Drift Background Layer with Kazakh Ornament */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 mix-blend-overlay">
        <OrnamentWatermark className="w-[120vw] max-w-[800px] h-auto text-[#C8A96A] animate-slow-drift" />
      </div>

      {/* Floating Ambient Atmospheric Emojis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/4 left-10 text-lg opacity-40 animate-float-1 select-none">✨</span>
        <span className="absolute top-1/3 right-12 text-base opacity-30 animate-float-2 select-none">🤍</span>
        <span className="absolute bottom-1/4 left-16 text-sm opacity-25 animate-float-3 select-none">🌿</span>
        <span className="absolute top-2/3 right-16 text-lg opacity-40 animate-float-1 select-none">✨</span>
      </div>

      {/* Soft Ambient Gold Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#C8A96A]/10 blur-[80px] pointer-events-none" />

      {/* Top Header / Cultural Blessing Invitation intro */}
      <div className="w-full max-w-md mx-auto text-center z-10 pt-4 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <OrnamentHeaderEmblem className="w-14 h-14 text-[#C8A96A] mb-4 drop-shadow-[0_0_15px_rgba(200,169,106,0.3)]" />
        <p className="font-sans uppercase text-xs tracking-[0.3em] text-[#C8A96A] font-medium opacity-90">
          Құрметті қонақтар
        </p>
        <div className="h-[1px] w-12 bg-[#C8A96A]/30 mx-auto my-3" />
        <p className="font-sans text-xs tracking-widest text-[#E9DDCF]/80">
          Қуанышымыздың қадірлі қонағы болыңыз
        </p>
      </div>

      {/* Center Main Editorial Layout */}
      <div className="w-full max-w-xl mx-auto text-center z-10 my-auto py-8">
        {/* Decorative flourish - Ink reveal */}
        <p className="font-vibes text-4xl sm:text-5xl text-[#C8A96A] font-normal tracking-wide mb-2 gold-glow-text transform -rotate-1 opacity-0 animate-ink-reveal" style={{ animationDelay: '500ms' }}>
          Қос қуаныш
        </p>

        {/* Large Elegant Headings */}
        <h1 className="font-cormorant text-4xl sm:text-6xl font-light text-[#F6F1E8] tracking-[0.12em] leading-tight uppercase mt-2 opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
          Жасұлан <span className="text-[#C8A96A] font-light">мен</span> Омар
        </h1>

        <div className="my-6 relative flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: '900ms' }}>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent" />
          <span className="px-4 bg-[#2B2620] font-playfair italic text-xs tracking-widest text-[#C8A96A] z-10">
            Сүндет той &amp; Выпускной кеші
          </span>
        </div>

        {/* Short Premium Text */}
        <p className="font-sans text-sm sm:text-base text-[#E9DDCF] font-light tracking-wide max-w-sm mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '1100ms' }}>
          Ұлдарымыздың өміріндегі айтулы белестеріне арналған салтанатты дастарқанымызға шақырамыз.
        </p>
      </div>

      {/* Bottom Action Button */}
      <div className="w-full max-w-md mx-auto text-center z-10 pb-6 opacity-0 animate-scale-in" style={{ animationDelay: '1300ms' }}>
        <button
          onClick={onOpenInvitation}
          className="relative inline-flex items-center justify-center px-8 py-4 rounded-full overflow-hidden group cursor-pointer transition-all duration-500 active:scale-95 shadow-[0_0_30px_rgba(200,169,106,0.1)] hover:shadow-[0_0_40px_rgba(200,169,106,0.25)]"
        >
          {/* Subtle gold luxury glow behind button */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C8A96A] via-[#E9DDCF] to-[#C8A96A] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-[1px] rounded-full bg-[#2B2620] transition-colors duration-300 group-hover:bg-[#2B2620]/90" />
          
          <span className="relative font-sans text-xs uppercase tracking-[0.2em] font-medium text-[#C8A96A] group-hover:text-[#F6F1E8] transition-colors duration-300 flex items-center gap-2">
            Шақыруды ашу
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </span>
        </button>

        <p className="font-vibes text-lg text-[#C8A96A]/60 mt-4 tracking-wider">
          Жүрекпен күтеміз
        </p>
      </div>
    </section>
  );
};
