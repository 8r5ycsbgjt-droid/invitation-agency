import { useState, useEffect } from 'react';
import { OrnamentDivider } from './Ornaments';

export const Countdown: React.FC = () => {
  // Target event date: June 20, 2026 18:00:00
  const targetDate = new Date('2026-06-20T18:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Format with leading zero
  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="w-full py-12 px-6 relative z-10">
      <div className="max-w-md mx-auto text-center">
        <p className="font-sans uppercase text-[10px] tracking-[0.3em] text-[#C8A96A] mb-4 font-medium opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Тойға дейін қалды
        </p>

        {/* Minimalistic Premium Grid */}
        <div className="grid grid-cols-4 gap-3 max-w-xs mx-auto">
          
          {/* Days */}
          <div className="flex flex-col items-center opacity-0 animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="w-full aspect-square rounded-lg luxury-glass-light flex items-center justify-center border border-[#C8A96A]/20 shadow-inner relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#C8A96A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-cormorant text-2xl sm:text-3xl text-[#C8A96A] font-medium tracking-tight gold-glow-text transition-all duration-300">
                {formatNumber(timeLeft.days)}
              </span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-[#E9DDCF]/60 mt-2 block font-light">
              Күн
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center opacity-0 animate-scale-in" style={{ animationDelay: '350ms' }}>
            <div className="w-full aspect-square rounded-lg luxury-glass-light flex items-center justify-center border border-[#C8A96A]/20 shadow-inner relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#C8A96A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-cormorant text-2xl sm:text-3xl text-[#C8A96A] font-medium tracking-tight gold-glow-text transition-all duration-300">
                {formatNumber(timeLeft.hours)}
              </span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-[#E9DDCF]/60 mt-2 block font-light">
              Сағат
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center opacity-0 animate-scale-in" style={{ animationDelay: '500ms' }}>
            <div className="w-full aspect-square rounded-lg luxury-glass-light flex items-center justify-center border border-[#C8A96A]/20 shadow-inner relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#C8A96A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-cormorant text-2xl sm:text-3xl text-[#C8A96A] font-medium tracking-tight gold-glow-text transition-all duration-300">
                {formatNumber(timeLeft.minutes)}
              </span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-[#E9DDCF]/60 mt-2 block font-light">
              Минут
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center opacity-0 animate-scale-in" style={{ animationDelay: '650ms' }}>
            <div className="w-full aspect-square rounded-lg luxury-glass-light flex items-center justify-center border border-[#C8A96A]/20 shadow-inner relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#C8A96A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-cormorant text-2xl sm:text-3xl text-[#C8A96A] font-medium tracking-tight gold-glow-text transition-all duration-300 animate-[pulse_1s_infinite]">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
            <span className="font-sans text-[9px] uppercase tracking-widest text-[#E9DDCF]/60 mt-2 block font-light">
              Секунд
            </span>
          </div>

        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <OrnamentDivider className="my-10" />
        </div>
      </div>
    </section>
  );
};
