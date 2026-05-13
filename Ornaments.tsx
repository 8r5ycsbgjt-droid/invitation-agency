// Premium SVG Ornaments

// Elegant central element or background watermark
export const OrnamentWatermark: React.FC<{ className?: string }> = ({ className = "w-64 h-64" }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none transition-all duration-1000 ${className}`}
  >
    <path 
      d="M100 10C100 10 115 35 135 35C155 35 165 20 165 20C165 20 170 45 150 65C130 85 100 70 100 70C100 70 70 85 50 65C30 45 35 20 35 20C35 20 45 35 65 35C85 35 100 10 100 10Z" 
      fill="currentColor" 
    />
    <path 
      d="M100 190C100 190 115 165 135 165C155 165 165 180 165 180C165 180 170 155 150 135C130 115 100 130 100 130C100 130 70 115 50 135C30 155 35 180 35 180C35 180 45 165 65 165C85 165 100 190 100 190Z" 
      fill="currentColor" 
    />
    <path 
      d="M10 100C10 100 35 85 35 65C35 45 20 35 20 35C20 35 45 30 65 50C85 70 70 100 70 100C70 100 85 130 65 150C45 170 20 165 20 165C20 165 35 155 35 135C35 115 10 100 10 100Z" 
      fill="currentColor" 
    />
    <path 
      d="M190 100C190 100 165 85 165 65C165 45 180 35 180 35C180 35 155 30 135 50C115 70 130 100 130 100C130 100 115 130 135 150C155 170 180 165 180 165C180 165 165 155 165 135C165 115 190 100 190 100Z" 
      fill="currentColor" 
    />
    <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="100" cy="100" r="4" fill="currentColor" />
  </svg>
);

// Graceful divider line between sections
export const OrnamentDivider: React.FC<{ className?: string }> = ({ className = "w-full max-w-xs my-8" }) => (
  <div className={`flex items-center justify-center gap-4 mx-auto ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-[#C8A96A]/10"></div>
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8A96A] opacity-75 shrink-0">
      <path d="M20 0C22 5 28 8 35 8C38 8 40 10 40 10C40 10 38 12 35 12C28 12 22 15 20 20C18 15 12 12 5 12C2 12 0 10 0 10C0 10 2 8 5 8C12 8 18 5 20 0Z" fill="currentColor"/>
      <circle cx="20" cy="10" r="2" fill="#F6F1E8" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C8A96A]/40 to-[#C8A96A]/10"></div>
  </div>
);

// Full card frame overlay with elegant ornamental corners
export const OrnamentCardFrame: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none p-2 ${className}`}>
    <div className="w-full h-full border border-[#C8A96A]/15 relative rounded-xl">
      {/* Top Left Corner */}
      <svg className="absolute -top-1 -left-1 w-6 h-6 text-[#C8A96A]/30" viewBox="0 0 24 24" fill="none">
        <path d="M0 0H8C8 4.41828 4.41828 8 0 8V0Z" fill="currentColor"/>
        <path d="M0 8C4.41828 8 8 11.5817 8 16H0V8Z" fill="currentColor"/>
        <path d="M8 0C8 4.41828 11.5817 8 16 8V0H8Z" fill="currentColor"/>
      </svg>
      {/* Top Right Corner */}
      <svg className="absolute -top-1 -right-1 w-6 h-6 text-[#C8A96A]/30 transform rotate-90" viewBox="0 0 24 24" fill="none">
        <path d="M0 0H8C8 4.41828 4.41828 8 0 8V0Z" fill="currentColor"/>
        <path d="M0 8C4.41828 8 8 11.5817 8 16H0V8Z" fill="currentColor"/>
        <path d="M8 0C8 4.41828 11.5817 8 16 8V0H8Z" fill="currentColor"/>
      </svg>
      {/* Bottom Right Corner */}
      <svg className="absolute -bottom-1 -right-1 w-6 h-6 text-[#C8A96A]/30 transform rotate-180" viewBox="0 0 24 24" fill="none">
        <path d="M0 0H8C8 4.41828 4.41828 8 0 8V0Z" fill="currentColor"/>
        <path d="M0 8C4.41828 8 8 11.5817 8 16H0V8Z" fill="currentColor"/>
        <path d="M8 0C8 4.41828 11.5817 8 16 8V0H8Z" fill="currentColor"/>
      </svg>
      {/* Bottom Left Corner */}
      <svg className="absolute -bottom-1 -left-1 w-6 h-6 text-[#C8A96A]/30 transform -rotate-90" viewBox="0 0 24 24" fill="none">
        <path d="M0 0H8C8 4.41828 4.41828 8 0 8V0Z" fill="currentColor"/>
        <path d="M0 8C4.41828 8 8 11.5817 8 16H0V8Z" fill="currentColor"/>
        <path d="M8 0C8 4.41828 11.5817 8 16 8V0H8Z" fill="currentColor"/>
      </svg>
    </div>
  </div>
);

// Exquisite header emblem
export const OrnamentHeaderEmblem: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={`text-[#C8A96A] mx-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5C52 25 65 35 85 35C95 35 95 45 85 50C65 55 52 65 50 85C48 65 35 55 15 50C5 45 5 35 15 35C35 35 48 25 50 5Z" fill="currentColor" fillOpacity="0.8"/>
    <circle cx="50" cy="50" r="6" fill="#F6F1E8"/>
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
  </svg>
);
