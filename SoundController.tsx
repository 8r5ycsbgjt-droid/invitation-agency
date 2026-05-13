import { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';

export const SoundController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Soft piano ambient royalty-free track
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf7f2.mp3";

  useEffect(() => {
    // Create audio element programmatically to avoid mobile auto-block issues
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.4; // subtle, not overwhelming
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch((e) => {
        console.log("Audio playback required interactive user gesture:", e);
      });
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      {!hasInteracted && (
        <span className="text-xs font-sans px-3 py-1.5 rounded-full luxury-glass text-[#C8A96A] animate-pulse border border-[#C8A96A]/30 flex items-center gap-1.5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-ping" />
          Әуенді қосу
        </span>
      )}

      <button
        onClick={toggleMusic}
        aria-label="Музыканы басқару"
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
          isPlaying 
            ? 'bg-[#C8A96A] text-[#2B2620] gold-glow scale-105' 
            : 'luxury-glass text-[#F6F1E8] hover:border-[#C8A96A]/50'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center gap-0.5 h-4">
            <span className="w-0.5 h-full bg-[#2B2620] animate-[stretch_0.8s_ease-in-out_infinite_alternate]" />
            <span className="w-0.5 h-2/3 bg-[#2B2620] animate-[stretch_0.5s_ease-in-out_infinite_alternate]" />
            <span className="w-0.5 h-1/2 bg-[#2B2620] animate-[stretch_0.6s_ease-in-out_infinite_alternate]" />
            <span className="w-0.5 h-4/5 bg-[#2B2620] animate-[stretch_0.7s_ease-in-out_infinite_alternate]" />
          </div>
        ) : (
          <Music className="w-4 h-4 text-[#C8A96A]" />
        )}
      </button>

      {/* Internal inline custom stretch keyframe for bars */}
      <style>{`
        @keyframes stretch {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
};
