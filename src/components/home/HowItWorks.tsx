'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'השיחה הראשונה',
    description: 'אתם מספרים לנו מה החלום שלכם – לאן, עם מי, לכמה זמן ומה התקציב. אנחנו מקשיבים, שואלים ומבינים את התמונה המלאה.'
  },
  {
    number: '02',
    title: 'בניית ההצעה המדויקת',
    description: 'אנו מתאימים עבורכם את המסלול, המלונות והטיסות בעזרת הספקים המובילים שלנו, וחוזרים אליכם עם מופע אפשרויות ללא עלות התחייבותית.'
  },
  {
    number: '03',
    title: 'סגירה ושקט נפשי',
    description: 'לאחר שבחרתם את האופציה הטובה ביותר, אנחנו מבצעים את כל ההזמנות, כולל ביטוחים, מקומות ישיבה בטיסה וכל המסמכים הדרושים.'
  },
  {
    number: '04',
    title: 'המראה ונחיתה',
    description: 'מהרגע שהמראתם, אנחנו זמינים עבורכם 24/7 לכל שאלה, שינוי או עזרה בלתי צפויה – עד שתנחתו חזרה בארץ בתחושת וואו.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-tal-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
            איך מתכננים חופשה מושלמת?
          </h2>
          <p className="text-lg text-tal-navy/70 max-w-2xl mx-auto font-sans">
            השירות האישי שלנו הוא לא ססמה. אנחנו איתכם צעד אחר צעד, מאמינים שהתכנון הוא חלק מהחוויה ויש לו משמעות רבה.
          </p>
        </div>

        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-0.5 bg-tal-navy/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-right"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-tal-offwhite relative group">
                  <span className="text-3xl font-serif font-black text-tal-navy group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  {/* Hover effect glow */}
                  <div className="absolute inset-0 rounded-full bg-tal-sky opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold font-serif text-tal-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-tal-navy/80 leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
