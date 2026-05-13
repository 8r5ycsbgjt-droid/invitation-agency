import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { OrnamentDivider } from './Ornaments';

interface Wish {
  id: string;
  author: string;
  text: string;
  date: string;
  iconType: 'sparkle' | 'heart';
}

const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    author: 'Әжесі мен Атасы',
    text: 'Құлыншақтарым, сүндет тойларың мен мектеп бітіру қуаныштарың құтты болсын! Үлкен азамат болыңдар, еліміздің мақтанышына айналыңдар!',
    date: 'Жаңа ғана',
    iconType: 'sparkle'
  },
  {
    id: '2',
    author: 'Марат ағай мен Айгүл тәте',
    text: 'Жасұлан мен Омар! Қос қуаныш құтты болсын! Алдағы өмірде тек биік белестерді бағындыра беріңдер. Дендерің сау, ғұмырларың ұзақ болсын!',
    date: '1 сағат бұрын',
    iconType: 'heart'
  },
  {
    id: '3',
    author: 'Ерлан досы',
    text: 'Бауырларым, тойларың құтты болсын! Әрқашан осылай жүздеріңнен күлкі кетпей, бірге тату-тәтті өсейік. Ақ жол!',
    date: '3 сағат бұрын',
    iconType: 'sparkle'
  }
];

export const WishesWall: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [newAuthor, setNewAuthor] = useState('');
  const [newText, setNewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wishes_jasulan_omar');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const saveWishes = (updatedWishes: Wish[]) => {
    setWishes(updatedWishes);
    try {
      localStorage.setItem('wishes_jasulan_omar', JSON.stringify(updatedWishes));
    } catch (e) {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWishObj: Wish = {
        id: Date.now().toString(),
        author: newAuthor.trim(),
        text: newText.trim(),
        date: 'Жаңа ғана',
        iconType: Math.random() > 0.5 ? 'sparkle' : 'heart'
      };

      saveWishes([newWishObj, ...wishes]);
      setNewAuthor('');
      setNewText('');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="w-full py-16 px-6 relative z-10">
      <div className="opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
        <OrnamentDivider />
      </div>

      <div className="max-w-xl mx-auto text-center mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <p className="font-vibes text-3xl text-[#C8A96A] tracking-wider mb-1">
          Ақ тілектер
        </p>
        <h2 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-[0.1em] text-[#F6F1E8] font-light">
          Жасұлан мен Омарға тілектер
        </h2>
        <p className="font-sans text-xs text-[#E9DDCF]/70 font-light mt-2 max-w-xs mx-auto">
          Жүрекжарды лебіздеріңізді қалдырыңыз
        </p>
      </div>

      <div className="max-w-md mx-auto grid grid-cols-1 gap-8">
        
        {/* Wish Form Input block */}
        <div className="rounded-xl luxury-glass p-5 border border-[#C8A96A]/20 opacity-0 animate-scale-in" style={{ animationDelay: '400ms' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                required
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Аты-жөніңіз (Мысалы: Нағашылары)"
                className="w-full bg-transparent border-b border-[#C8A96A]/20 pb-2 font-sans text-xs text-[#F6F1E8] placeholder:text-[#E9DDCF]/30 focus:outline-none focus:border-[#C8A96A] transition-colors rounded-none"
              />
            </div>
            <div>
              <textarea
                required
                rows={3}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Ақ тілегіңізді осында жазыңыз..."
                className="w-full bg-transparent border-b border-[#C8A96A]/20 pb-2 font-sans text-xs text-[#F6F1E8] placeholder:text-[#E9DDCF]/30 focus:outline-none focus:border-[#C8A96A] transition-colors resize-none rounded-none"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-full bg-[#C8A96A]/20 hover:bg-[#C8A96A]/30 text-[#C8A96A] font-sans text-xs uppercase tracking-wider transition-all border border-[#C8A96A]/30 cursor-pointer flex items-center gap-1.5 active:scale-95"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Жүктелуде...</span>
                ) : (
                  <>
                    <span>Тілек қалдыру</span>
                    <Sparkles className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Wishes Feed list */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1 no-scrollbar opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="rounded-xl luxury-glass-light p-5 relative overflow-hidden transition-all duration-500 animate-fade-in border border-[#C8A96A]/10 hover:border-[#C8A96A]/25"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C8A96A]/40 to-transparent" />

              <div className="flex items-center justify-between mb-2 pl-2">
                <span className="font-cormorant font-medium text-base text-[#C8A96A] tracking-wide">
                  {wish.author}
                </span>
                
                {/* Small Animated Indicator Element ✨ or 🤍 */}
                <div className="text-[#C8A96A]/60 flex items-center gap-1">
                  <span className="text-[10px] font-sans text-[#E9DDCF]/40 mr-1">{wish.date}</span>
                  {wish.iconType === 'sparkle' ? (
                    <span className="inline-block animate-spin-[spin_6s_linear_infinite] text-xs">✨</span>
                  ) : (
                    <span className="inline-block animate-pulse text-xs">🤍</span>
                  )}
                </div>
              </div>

              <p className="font-sans text-xs text-[#E9DDCF] font-light leading-relaxed pl-2 opacity-95">
                "{wish.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
