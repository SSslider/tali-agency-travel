'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, ArrowLeft, Key, Navigation, PhoneCall, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const BENEFITS = [
  {
    title: 'שותפות עם חברות הפרימיום בעולם',
    description: 'הבטיחות שלכם היא מעל הכל. אנו עובדים בלעדית עם קבוצות הרכב המובילות (Hertz, Sixt, Avis) כדי להבטיח רכבים חדישים, מטופלים, עם שירות דרך בינלאומי בסטנדרט הגבוה ביותר.',
    icon: <Key className="w-8 h-8 text-tal-sky" />
  },
  {
    title: 'הגנה מקסימלית: אפס השתתפות עצמית',
    description: 'אל תיקחו סיכונים מיותרים בחו"ל. הצעות המחיר שלנו נבנות מראש עם חבילת ביטוח מקיפה הכוללת החזר השתתפות עצמית מלא או ביטול השתתפות עצמית, לנהיגה בראש שקט לגמרי.',
    icon: <ShieldCheck className="w-8 h-8 text-tal-sky" />
  },
  {
    title: 'ייעוץ והתאמה מדויקת למסלול',
    description: 'נוסעים לדולומיטים או לערי בירה? יש הבדל עצום ברכב הנדרש. נתאים לכם רכב מדויק: גובה, מרווח פנים לנסיעות ארוכות, כוח מנוע להרים, ושטח אחסון אמיתי למזוודות מראש.',
    icon: <Navigation className="w-8 h-8 text-tal-sky" />
  },
  {
    title: 'גמישות כלכלית ושירות אנושי',
    description: 'תשלום מראש בישראל עם אפשרות לפריסת תשלומים נוחה, תנאי ביטול הוגנים עד זמן קצר לפני הטיסה, ותמיכה זמינה מאיתנו אם נתקלתם בבירוקרטיה בדלפק המקומי.',
    icon: <CreditCard className="w-8 h-8 text-tal-sky" />
  }
];

export function CarRentalSection() {
  return (
    <section id="car-rental" className="flex flex-col bg-white scroll-mt-20">
      
      {/* Introduction & Value Proposition */}
      <div className="py-24 bg-tal-offwhite relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--tw-colors-tal-navy) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy leading-tight">
                השכרת רכב: דלפק ההשכרה לא חייב להיות כאב ראש.
              </h2>
              <p className="text-tal-navy/80 text-lg font-sans leading-relaxed">
                רבים חווים הפתעות לא נעימות בדלפקי השכרת הרכב בחו&quot;ל: חיובים נסתרים, שדרוגים שנכפו עליהם, ושאילתות ביטוח מסובכות בדיוק אחרי טיסה מעייפת.
              </p>
              <p className="font-sans leading-relaxed text-tal-navy/80 text-justify">
                כאשר אתם משריינים רכב דרך טל fly (כחלק מחבילת החופשה שלכם), אתם מגיעים מצוידים בשובר משולם שכולל מראש את הביטוחים המקיפים ביותר. אתם יודעים בדיוק מה שילמתם, בלי אותיות קטנות ובלי שטיקים.
              </p>
              
              <ul className="space-y-4 pt-4">
                {['רכבים משנתונים אחרונים בלבד', 'ללא חברות שקר ולואו-קוסט', 'זמינות טלפונית לפתרון בעיות בזמן אמת'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-tal-navy font-bold">
                    <CheckCircle2 className="text-tal-sky" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-tal-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-tal-sky transition-colors shadow-lg"
                >
                  <span>דברו איתנו על החופשה הבאה שלכם</span>
                  <ArrowLeft size={20} className="rtl:-scale-x-100" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image 
                src="/images/hero_carrental.png" 
                alt="נהיגה בחופשה"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
              סטנדרט שירות הפרימיום שלנו ברכבים
            </h2>
            <p className="text-gray-500 font-sans max-w-2xl mx-auto">
              לא מתפשרים על איכות הרכב, בטיחות הנוסעים, והשירות התומך מרגע ההזמנה ועד החזרת הרכב בשדה.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-tal-offwhite/50 p-10 rounded-3xl hover:bg-tal-offwhite transition-colors duration-300 flex flex-col sm:flex-row gap-6 items-start group"
              >
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl flex items-center justify-center shadow-sm text-tal-navy group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-tal-navy font-serif mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-tal-navy/70 text-base font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety & Support Banner */}
      <div className="bg-tal-navy text-white py-20 relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-24 rounded-3xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tal-sky/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <PhoneCall size={48} className="mx-auto text-tal-sand mb-8" />
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6">לא משאירים אתכם לבד בחניון</h3>
          <p className="text-white/80 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            אנחנו יודעים כמה מלחיץ זה להיות מול פקיד שלא מבין אנגלית שמבקש לפתע כרטיס אשראי פיזי על שם הנהג. 
            זמינות היא לא מילה גסה. היתרון הגדול שלנו הוא הליווי האנושי בוואטסאפ במקרי חירום והכוונה מדויקת לפני הנסיעה.
          </p>
        </div>
      </div>

    </section>
  );
}
