'use client';

import { useState, useEffect } from 'react';
import { 
  Accessibility, 
  X, 
  Type, 
  Eye, 
  Contrast, 
  Link as LinkIcon, 
  AlignLeft, 
  MousePointer2, 
  PauseCircle,
  RefreshCcw
} from 'lucide-react';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // State for all accessibility features
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);

  // Helper to toggle body classes
  const toggleBodyClass = (className: string, state: boolean) => {
    if (state) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  };

  // Effect hooks to apply changes when state updates
  useEffect(() => toggleBodyClass('access-high-contrast', highContrast), [highContrast]);
  useEffect(() => toggleBodyClass('access-grayscale', grayscale), [grayscale]);
  useEffect(() => toggleBodyClass('access-text-spacing', textSpacing), [textSpacing]);
  useEffect(() => toggleBodyClass('access-highlight-links', highlightLinks), [highlightLinks]);
  useEffect(() => toggleBodyClass('access-dyslexia', dyslexiaFont), [dyslexiaFont]);
  useEffect(() => toggleBodyClass('access-pause-animations', pauseAnimations), [pauseAnimations]);
  useEffect(() => toggleBodyClass('access-large-cursor', largeCursor), [largeCursor]);

  useEffect(() => {
    if (largeText) {
      document.documentElement.style.fontSize = '120%';
    } else {
      document.documentElement.style.fontSize = '100%';
    }
  }, [largeText]);

  const resetAll = () => {
    setHighContrast(false);
    setGrayscale(false);
    setLargeText(false);
    setTextSpacing(false);
    setHighlightLinks(false);
    setDyslexiaFont(false);
    setPauseAnimations(false);
    setLargeCursor(false);
  };

  const FeatureButton = ({ 
    active, 
    onClick, 
    icon: Icon, 
    label 
  }: { 
    active: boolean, 
    onClick: () => void, 
    icon: React.ElementType, 
    label: string 
  }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
        active 
          ? 'bg-tal-navy text-white border-tal-navy shadow-md ring-2 ring-tal-sky/30' 
          : 'bg-white text-tal-navy border-gray-200 hover:bg-tal-offwhite hover:border-tal-sand'
      }`}
      aria-pressed={active}
    >
      <span className="font-medium text-sm">{label}</span>
      <Icon size={18} className={active ? 'text-tal-sky' : 'text-tal-navy/60'} />
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-tal-sky text-tal-navy rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border-2 border-transparent hover:border-tal-sky"
        aria-label="תפריט נגישות"
      >
        {isOpen ? <X size={28} /> : <Accessibility size={28} />}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden flex flex-col max-h-[80vh]">
          {/* Header */}
          <div className="bg-tal-navy p-5 text-white flex justify-between items-center rounded-t-3xl">
            <h3 className="font-bold text-xl font-serif flex items-center gap-2">
              <Accessibility size={20} className="text-tal-sky" />
              התאמת נגישות
            </h3>
          </div>

          {/* Scrollable Content */}
          <div className="p-5 overflow-y-auto stylish-scrollbar flex flex-col gap-3">
            
            <FeatureButton active={largeText} onClick={() => setLargeText(!largeText)} icon={Type} label="טקסט מוגדל" />
            <FeatureButton active={highContrast} onClick={() => setHighContrast(!highContrast)} icon={Contrast} label="ניגודיות עדינה (כהה)" />
            <FeatureButton active={grayscale} onClick={() => setGrayscale(!grayscale)} icon={Eye} label="גווני אפור עדינים" />
            <FeatureButton active={highlightLinks} onClick={() => setHighlightLinks(!highlightLinks)} icon={LinkIcon} label="הדגשת קישורים" />
            <FeatureButton active={dyslexiaFont} onClick={() => setDyslexiaFont(!dyslexiaFont)} icon={Type} label="גופן קריא (דיסלקציה)" />
            <FeatureButton active={textSpacing} onClick={() => setTextSpacing(!textSpacing)} icon={AlignLeft} label="ריווח טקסט" />
            <FeatureButton active={pauseAnimations} onClick={() => setPauseAnimations(!pauseAnimations)} icon={PauseCircle} label="עצירת הנפשות" />
            <FeatureButton active={largeCursor} onClick={() => setLargeCursor(!largeCursor)} icon={MousePointer2} label="סמן מוגדל" />
            
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-tal-offwhite border-t border-gray-100 flex flex-col gap-3">
            <button
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-gray-200 text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors font-bold text-sm"
            >
              <RefreshCcw size={16} />
              איפוס הגדרות ברירת מחדל
            </button>
            <a
              href="/accessibility"
              className="w-full block text-center p-3 text-tal-navy/70 hover:text-tal-navy transition-colors font-medium text-xs underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              להצהרת הנגישות המלאה
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
