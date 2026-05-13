// Event Details component
import { OrnamentCardFrame, OrnamentDivider } from './Ornaments';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section id="event-details" className="w-full py-16 px-6 relative z-10 scroll-mt-6">
      <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <OrnamentDivider />
      </div>
      
      <div className="max-w-xl mx-auto text-center mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <p className="font-vibes text-3xl text-[#C8A96A] tracking-wider mb-1">
          Салтанатты сәт
        </p>
        <h2 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-[0.1em] text-[#F6F1E8] font-light">
          Мереке мәліметтері
        </h2>
        <div className="w-10 h-[1px] bg-[#C8A96A]/40 mx-auto mt-3" />
      </div>

      {/* Luxury Glass Cards Wrapper */}
      <div className="max-w-md mx-auto grid grid-cols-1 gap-6">
        
        {/* Date Card */}
        <div className="relative rounded-xl luxury-glass p-6 text-center overflow-hidden transition-all duration-500 hover:border-[#C8A96A]/40 hover:box-shadow-md group opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
          <OrnamentCardFrame />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent" />
          
          <div className="w-10 h-10 rounded-full bg-[#C8A96A]/10 flex items-center justify-center mx-auto mb-3 text-[#C8A96A] group-hover:scale-110 transition-transform duration-500">
            <Calendar className="w-4 h-4 stroke-[1.5]" />
          </div>

          <p className="font-sans uppercase text-[10px] tracking-[0.25em] text-[#C8A96A] mb-1 font-medium">
            Күні
          </p>
          <p className="font-cormorant text-2xl sm:text-3xl font-normal text-[#F6F1E8] tracking-wider">
            20 Маусым 2026 жыл
          </p>
          <p className="font-sans text-xs text-[#E9DDCF]/70 mt-1 font-light tracking-wide">
            Сенбі күні
          </p>
        </div>

        {/* Time Card */}
        <div className="relative rounded-xl luxury-glass p-6 text-center overflow-hidden transition-all duration-500 hover:border-[#C8A96A]/40 group opacity-0 animate-scale-in" style={{ animationDelay: '500ms' }}>
          <OrnamentCardFrame />
          
          <div className="w-10 h-10 rounded-full bg-[#C8A96A]/10 flex items-center justify-center mx-auto mb-3 text-[#C8A96A] group-hover:scale-110 transition-transform duration-500">
            <Clock className="w-4 h-4 stroke-[1.5]" />
          </div>

          <p className="font-sans uppercase text-[10px] tracking-[0.25em] text-[#C8A96A] mb-1 font-medium">
            Басталу уақыты
          </p>
          <p className="font-cormorant text-2xl sm:text-3xl font-normal text-[#F6F1E8] tracking-wider">
            Сағат 18:00
          </p>
          <p className="font-sans text-xs text-[#E9DDCF]/70 mt-1 font-light tracking-wide">
            Қонақтардың жиналуы 17:30
          </p>
        </div>

        {/* Venue Card */}
        <div className="relative rounded-xl luxury-glass p-6 text-center overflow-hidden transition-all duration-500 hover:border-[#C8A96A]/40 group opacity-0 animate-scale-in" style={{ animationDelay: '700ms' }}>
          <OrnamentCardFrame />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent" />
          
          <div className="w-10 h-10 rounded-full bg-[#C8A96A]/10 flex items-center justify-center mx-auto mb-3 text-[#C8A96A] group-hover:scale-110 transition-transform duration-500">
            <MapPin className="w-4 h-4 stroke-[1.5]" />
          </div>

          <p className="font-sans uppercase text-[10px] tracking-[0.25em] text-[#C8A96A] mb-1 font-medium">
            Өтетін орны
          </p>
          <p className="font-cormorant text-2xl sm:text-3xl font-normal text-[#F6F1E8] tracking-wide leading-tight">
            «ALTYN ADAM»
          </p>
          <p className="font-playfair italic text-xs text-[#C8A96A] my-1">
            Салтанат сарайы
          </p>
          <p className="font-sans text-xs text-[#E9DDCF]/80 mt-2 font-light tracking-wide max-w-xs mx-auto">
            Семей қаласы, Қайым Мұхамедханов көшесі
          </p>
        </div>

      </div>
    </section>
  );
};
