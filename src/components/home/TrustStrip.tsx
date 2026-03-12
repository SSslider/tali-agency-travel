'use client';

import { ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';

const TRUST_POINTS = [
  {
    icon: <HeartPulse className="w-10 h-10 text-tal-sky" />,
    title: 'שירות אישי 24/7',
    description: 'ליווי צמוד מהרגע בו החלטתם לטוס ועד חזרתכם הביתה לשלום. אנחנו פה לכל שאלה.'
  },
  {
    icon: <Sparkles className="w-10 h-10 text-tal-sky" />,
    title: 'עיצוב מסעות',
    description: 'זה לא רק להזמין טיסה ומלון, זה להרכיב עבורכם את הפאזל המושלם של חופשת החלומות.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-tal-sky" />,
    title: 'ביטחון ואמינות',
    description: 'אצלנו אין אותיות קטנות. אנו עובדים עם הספקים האמינים ביותר ומעניקים אחריות מלאה.'
  },
  {
    icon: <Clock className="w-10 h-10 text-tal-sky" />,
    title: 'חיסכון בהוצאות ובזמן',
    description: 'זמן שווה כסף. השאירו לנו את חיפושי הטיסות והמלונות וקבלו מחירים מעולים ותנאי תשלום נוחים.'
  }
];

export function TrustStrip() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tal-navy mb-4">
            למה לטוס עם טלי פלאי?
          </h2>
          <div className="w-24 h-1 bg-tal-sky mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map((point, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center p-6 rounded-3xl hover:bg-tal-offwhite transition-colors duration-300"
            >
              <div className="mb-6 p-4 bg-tal-offwhite rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-tal-navy mb-3">
                {point.title}
              </h3>
              <p className="text-tal-navy/70 leading-relaxed font-sans text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
