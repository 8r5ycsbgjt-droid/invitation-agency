import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { OrnamentCardFrame } from './Ornaments';

export const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Қонақ');
  const [status, setStatus] = useState<'yes' | 'no'>('yes');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const relations = ['Қонақ', 'Туысқан', 'Дос', 'Әріптес'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    // Simulate high-end network transfer to Telegram webhook/backend
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Save local acknowledgment
      try {
        localStorage.setItem('rsvp_jasulan_omar', JSON.stringify({ name, relation, status }));
      } catch (err) {
        // silently ignore private browsing limits
      }
    }, 1200);
  };

  const getDirectMessageLink = () => {
    const text = `Сәлеметсіз бе! Мен, ${name}, Жасұлан мен Омардың тойына ${status === 'yes' ? 'қуана келемін' : 'өкінішке орай келе алмаймын'}. (${relation})`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="w-full py-12 px-6 relative z-10">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <p className="font-vibes text-3xl text-[#C8A96A] tracking-wider mb-1">
            Қатысуыңызды растау
          </p>
          <h2 className="font-cormorant text-3xl uppercase tracking-[0.1em] text-[#F6F1E8] font-light">
            RSVP
          </h2>
          <p className="font-sans text-xs text-[#E9DDCF]/70 font-light mt-2 max-w-xs mx-auto">
            Тойға дайындығымыз тиянақты болуы үшін алдын ала жауап беруіңізді сұраймыз
          </p>
        </div>

        {/* Form Container with Premium Glass Effect */}
        <div className="relative rounded-2xl luxury-glass p-6 sm:p-8 overflow-hidden transition-all duration-500 opacity-0 animate-scale-in" style={{ animationDelay: '300ms' }}>
          <OrnamentCardFrame />

          {isSubmitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C8A96A]/20 flex items-center justify-center mx-auto mb-4 text-[#C8A96A] animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cormorant text-2xl text-[#F6F1E8] mb-2 tracking-wide">
                Жауабыңыз қабылданды!
              </h3>
              <p className="font-sans text-xs text-[#E9DDCF] font-light mb-6 leading-relaxed max-w-xs mx-auto">
                {status === 'yes' 
                  ? 'Қуанышымызға ортақ болғаныңыз үшін шын жүректен алғыс білдіреміз. Сізді асыға күтеміз!' 
                  : 'Жауабыңыз үшін рақмет. Келесі қуаныштарда кездескенше!'}
              </p>

              <div className="pt-4 border-t border-[#C8A96A]/20">
                <p className="font-sans text-[10px] text-[#E9DDCF]/60 mb-3">
                  Байланыс қателігі болса, тікелей жіберуге болады:
                </p>
                <a
                  href={getDirectMessageLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full luxury-glass-light text-[11px] font-sans text-[#C8A96A] hover:bg-[#C8A96A]/10 transition-colors"
                >
                  WhatsApp арқылы растау
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name Input */}
              <div className="space-y-1.5 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <label className="block font-sans uppercase text-[10px] tracking-[0.2em] text-[#C8A96A] font-medium">
                  Аты-жөніңіз
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Мейрамбек Беспаев"
                  className="w-full bg-transparent border-b border-[#C8A96A]/30 py-2 font-cormorant text-xl text-[#F6F1E8] placeholder:text-[#E9DDCF]/20 focus:outline-none focus:border-[#C8A96A] transition-colors rounded-none"
                />
              </div>

              {/* Who are you coming as */}
              <div className="space-y-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '500ms' }}>
                <label className="block font-sans uppercase text-[10px] tracking-[0.2em] text-[#C8A96A] font-medium">
                  Кім болып келесіз?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {relations.map((rel) => (
                    <button
                      key={rel}
                      type="button"
                      onClick={() => setRelation(rel)}
                      className={`py-2 px-3 rounded-lg text-xs font-sans transition-all duration-300 border text-center cursor-pointer ${
                        relation === rel
                          ? 'bg-[#C8A96A]/20 border-[#C8A96A] text-[#C8A96A] font-medium shadow-sm'
                          : 'border-transparent bg-[#2B2620]/40 text-[#E9DDCF]/70 hover:text-[#F6F1E8]'
                      }`}
                    >
                      {rel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Attendance Status */}
              <div className="space-y-2.5 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
                <label className="block font-sans uppercase text-[10px] tracking-[0.2em] text-[#C8A96A] font-medium">
                  Келесіз бе?
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setStatus('yes')}
                    className={`w-full py-3 px-4 rounded-xl text-left font-sans text-xs flex items-center justify-between transition-all duration-300 border cursor-pointer ${
                      status === 'yes'
                        ? 'bg-gradient-to-r from-[#C8A96A]/15 to-transparent border-[#C8A96A] text-[#F6F1E8]'
                        : 'border-[#C8A96A]/10 bg-[#2B2620]/30 text-[#E9DDCF]/60'
                    }`}
                  >
                    <span>✨ Қуана келемін</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${status === 'yes' ? 'border-[#C8A96A] bg-[#C8A96A]' : 'border-[#C8A96A]/30'}`}>
                      {status === 'yes' && <span className="w-1.5 h-1.5 rounded-full bg-[#2B2620]" />}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStatus('no')}
                    className={`w-full py-3 px-4 rounded-xl text-left font-sans text-xs flex items-center justify-between transition-all duration-300 border cursor-pointer ${
                      status === 'no'
                        ? 'bg-gradient-to-r from-[#C8A96A]/15 to-transparent border-[#C8A96A] text-[#F6F1E8]'
                        : 'border-[#C8A96A]/10 bg-[#2B2620]/30 text-[#E9DDCF]/60'
                    }`}
                  >
                    <span>🕊️ Өкінішке орай келе алмаймын</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${status === 'no' ? 'border-[#C8A96A] bg-[#C8A96A]' : 'border-[#C8A96A]/30'}`}>
                      {status === 'no' && <span className="w-1.5 h-1.5 rounded-full bg-[#2B2620]" />}
                    </span>
                  </button>
                </div>
              </div>

              {/* Premium Submission Button */}
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 py-3.5 rounded-full bg-gradient-to-r from-[#C8A96A] via-[#E9DDCF] to-[#C8A96A] text-[#2B2620] font-sans uppercase text-xs tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-[#2B2620] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Жауапты жіберу</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};
