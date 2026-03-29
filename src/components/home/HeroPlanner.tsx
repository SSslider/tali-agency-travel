'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const POPULAR_DESTINATIONS = [
  'לונדון, אנגליה', 'פריז, צרפת', 'רומא, איטליה', 
  'אתונה, יוון', 'זנזיבר, טנזניה', 'איי סיישל', 
  'דובאי, איחוד האמירויות', 'מדריד, ספרד', 'ברצלונה, ספרד', 
  'בודפשט, הונגריה', "פראג, צ'כיה", 'ניו יורק, ארה"ב', 
  'בנגקוק, תאילנד', 'טוקיו, יפן', 'האיים המלדיביים'
];

export function HeroPlanner() {
  const [greeting, setGreeting] = useState('שלום!');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('בוקר טוב!');
    else if (hour < 18) setGreeting('צהריים טובים!');
    else setGreeting('ערב טוב!');
  }, []);

  const [formData, setFormData] = useState({
    destination: '',
    who: '',
    type: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `היי טל fly! אשמח לתכנן חופשה:
יעד: ${formData.destination || 'גמיש'}
הרכב: ${formData.who || 'טרם ידוע'}
סגנון: ${formData.type || 'גמיש'}
תקציב: ${formData.budget || 'טרם ידוע'}`;

    window.open(`https://wa.me/972500000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with cinematic breathing zoom */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/images/hero_couple_landscape_awe.png"
          alt="זוג יושב מגבו על רשת קטמרן מעל מים צלולים ונגליים למשעי, נטמעים בנוף עוצר נשימה של איים טרופיים, הרי געש ירוקים ענקיים, ושוניות אלמוגים ביום תכול ושטוף שמש המזמין לחקור כל פיסת גן עדן"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Minimal gradient overlays to ensure text readability without dulling the vibrant image */}
        <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-tal-navy/80 via-tal-navy/20 to-transparent h-48 pointer-events-none" />
        
        {/* Subtle bottom gradient to ground the glass pill */}
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-tal-navy/40 via-tal-navy/5 to-transparent pointer-events-none mix-blend-multiply" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center mt-12">
        
        {/* Dynamic Greeting & Messaging */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full text-white text-sm font-bold mb-8 shadow-2xl">
            <Sparkles size={16} className="text-tal-sand animate-pulse" />
            <span>עיצוב חוויות פרימיום מותאמות אישית</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            <span className="text-white/90">{greeting}</span> <br />
            לאן הלב שלכם מושך היום?
          </h1>
        </motion.div>

        {/* Ultra-Premium Glass Floating Pill Planner */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full relative max-w-5xl"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-tal-sand/30 via-white/10 to-tal-sky/30 rounded-full blur-2xl animate-pulse pointer-events-none" />
          
          <form 
            onSubmit={handleSubmit} 
            className="relative bg-white/10 backdrop-blur-3xl border border-white/40 p-3 md:rounded-full rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/20 z-20"
          >
            
            {/* 1. Destination with Auto-complete */}
            <div className="flex-1 w-full px-6 py-4 md:py-2 group hover:bg-white/10 rounded-full transition-colors cursor-text relative" ref={suggestionRef}>
              <label htmlFor="destination" className="block text-xs font-bold text-white tracking-wider mb-1 cursor-text">
                יעד
              </label>
              <input 
                type="text" 
                id="destination" 
                name="destination" 
                value={formData.destination} 
                onChange={(e) => {
                  handleChange(e);
                  setShowSuggestions(true);
                }} 
                onFocus={() => setShowSuggestions(true)}
                placeholder="למשל: לונדון, אנגליה" 
                className="w-full bg-transparent border-none p-0 text-white placeholder-white/80 font-medium focus:ring-0 text-lg md:text-base lg:text-lg focus:outline-none"
                autoComplete="off"
              />
              
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 w-full md:w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden z-50 text-tal-navy"
                  >
                    <ul className="max-h-60 overflow-y-auto py-2 stylish-scrollbar text-right">
                      {POPULAR_DESTINATIONS.filter(d => d.includes(formData.destination)).length > 0 ? (
                        POPULAR_DESTINATIONS.filter(d => d.includes(formData.destination)).map((dest) => (
                          <li 
                            key={dest} 
                            onClick={() => {
                              setFormData(prev => ({ ...prev, destination: dest }));
                              setShowSuggestions(false);
                            }}
                            className="px-4 py-3 hover:bg-tal-sky/10 cursor-pointer font-medium transition-colors border-b border-gray-100 last:border-none flex items-center justify-start gap-2"
                          >
                            <MapPin size={16} className="text-tal-sky shrink-0" />
                            {dest}
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-3 text-tal-navy/60 text-sm font-medium">לא נמצאו יעדים תואמים</li>
                      )}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Style */}
            <div className="flex-1 w-full px-6 py-4 md:py-2 group hover:bg-white/10 rounded-full transition-colors relative cursor-pointer">
              <label htmlFor="type" className="block text-xs font-bold text-white tracking-wider mb-1 cursor-pointer">
                סגנון
              </label>
              <select 
                id="type" 
                name="type" 
                value={formData.type} 
                onChange={handleChange} 
                className="w-full bg-transparent border-none p-0 text-white/90 font-medium focus:ring-0 text-lg md:text-base lg:text-lg appearance-none focus:outline-none cursor-pointer [&>option]:text-tal-navy"
              >
                <option value="" disabled className="text-gray-400">איזו חופשה?</option>
                <option value="בטן גב">בטן גב וריזורטים</option>
                <option value="עיר הסטורית">חופשה אורבנית</option>
                <option value="הרפתקה וטבע">אקסטרים וטבע</option>
                <option value="הכל הולך">גמיש - תפתיעו אותי</option>
              </select>
            </div>

            {/* 3. Who */}
            <div className="flex-1 w-full px-6 py-4 md:py-2 group hover:bg-white/10 rounded-full transition-colors relative cursor-pointer">
              <label htmlFor="who" className="block text-xs font-bold text-white tracking-wider mb-1 cursor-pointer">
                נוסעים
              </label>
              <select 
                id="who" 
                name="who" 
                value={formData.who} 
                onChange={handleChange} 
                className="w-full bg-transparent border-none p-0 text-white/90 font-medium focus:ring-0 text-lg md:text-base lg:text-lg appearance-none focus:outline-none cursor-pointer [&>option]:text-tal-navy"
              >
                <option value="" disabled className="text-gray-400">כמה טסים?</option>
                <option value="זוגי">זוג</option>
                <option value="משפחתי">משפחה</option>
                <option value="חברים">קבוצת חברים</option>
                <option value="לבד">סולו</option>
              </select>
            </div>

            {/* 4. Budget & Submit Container */}
            <div className="flex-1 w-full pl-3 pr-6 py-4 md:py-2 flex items-center justify-between group hover:bg-white/10 rounded-full transition-colors">
              <div className="flex-1 cursor-pointer relative">
                <label htmlFor="budget" className="block text-xs font-bold text-white tracking-wider mb-1 cursor-pointer">
                  תקציב
                </label>
                <select 
                  id="budget" 
                  name="budget" 
                  value={formData.budget} 
                  onChange={handleChange} 
                  className="w-full bg-transparent border-none p-0 text-white/90 font-medium focus:ring-0 text-lg md:text-base lg:text-lg appearance-none focus:outline-none cursor-pointer [&>option]:text-tal-navy"
                >
                  <option value="" disabled className="text-gray-400">בחירת טווח</option>
                  <option value="חסכוני">משתלם (פרומו)</option>
                  <option value="סטנדרט">סטנדרט</option>
                  <option value="פרימיום">פרימיום יוקרה</option>
                </select>
              </div>

               {/* Prominent Circular Search CTA */}
              <button 
                type="submit" 
                aria-label="חפש חופשה"
                className="w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 shrink-0 bg-white text-tal-navy rounded-full flex items-center justify-center hover:bg-tal-sand hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300 ml-0 md:ml-1"
              >
                <Search size={28} strokeWidth={3} className="mr-1" />
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
