'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, Crown, Headset, ShieldCheck, ArrowLeft } from 'lucide-react';

const PREMIUM_SERVICES = [
  {
    title: 'גישה למחלקות יוקרה במחירי סוכנים',
    description: 'הודות להסכמים ישירים עם רוב חברות התעופה, אנו מציעים תעריפים מיוחדים למחלקות עסקים וראשונה שאינם זמינים ברשת.',
    icon: <Crown className="w-8 h-8 text-white" strokeWidth={1.5} />,
    color: 'bg-tal-navy'
  },
  {
    title: 'קונסיירז׳ בזמן אמת',
    description: 'בניגוד לאתרי אונליין נטולי פנים, מחלקת הטיסות שלנו זמינה עבורכם 24/7 בוואטסאפ לכל שינוי, שדרוג או טיפול במקרי חירום ועיכובים.',
    icon: <Headset className="w-8 h-8 text-tal-navy" strokeWidth={1.5} />,
    color: 'bg-tal-sky/20'
  },
  {
    title: 'תכנון מסלולים מורכבים',
    description: 'טסים למספר יעדים? צריכים למקסם את זמן השהייה? המומחים שלנו בונים נתיבי טיסה (Multi-City) חכמים ומשתלמים יותר מכל אלגוריתם.',
    icon: <Plane className="w-8 h-8 text-tal-navy" strokeWidth={1.5} />,
    color: 'bg-tal-sand/30'
  },
  {
    title: 'ביטולי טיסות והגנה מלאה',
    description: 'רכישת כרטיס אצלנו מבטיחה מעטפת הגנה. במקרה של שביתות או חרמות טיסה, אנחנו דואגים להחזרים ולטיסות חלופיות ללא עלות נוספת.',
    icon: <ShieldCheck className="w-8 h-8 text-tal-navy" strokeWidth={1.5} />,
    color: 'bg-green-100'
  }
];

export function FlightsSection() {
  return (
    <section id="flights" className="relative bg-white pt-24 pb-12 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tal-offwhite to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-tal-sky/10 mb-6">
            <Plane className="w-6 h-6 text-tal-sky rtl:-scale-x-100" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy leading-tight mb-6">
            מחלקת טיסות: למה להסתבך עם עשרות אתרים, כשאפשר פשוט לשלוח הודעה?
          </h2>
          <p className="font-sans text-lg text-tal-navy/80 max-w-2xl mx-auto leading-relaxed">
            בטל fly, כרטיס הטיסה שלכם מגיע עם סוכן צמוד שדואג להכל מהרגע שהזמנתם ועד הנחיתה בארץ. המושבים הכי טובים אוזלים מהר - השאירו פרטים ונמצא לכם את הטיסה המושלמת.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {PREMIUM_SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl ${service.color}`} />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 transition-transform group-hover:-translate-y-2 duration-500 ${service.color}`}>
                {service.icon}
              </div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-tal-navy font-serif mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-tal-navy/70 text-sm font-medium leading-relaxed mt-auto">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The VIP Experience Section */}
      <div className="bg-tal-navy text-white relative overflow-hidden py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_vacations.png" 
            alt="VIP Experience" 
            fill 
            className="object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-tal-sky/20 backdrop-blur-md px-4 py-2 rounded-full border border-tal-sky/30">
                <Crown size={16} className="text-tal-sky" />
                <span className="text-tal-sky text-sm font-bold tracking-widest uppercase">שירותי אקסטרה</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                כל פרט<br />מטופל מראש.
              </h3>
              
              <p className="text-white/80 text-lg leading-relaxed max-w-lg">
                החל מבחירת המושב המדויק עם מרווח הרגליים הנכון, דרך הזמנת ארוחות מיוחדות ועד שירותי טרום-טיסה וטרקלינים. 
                אנחנו לא משאירים שום דבר ליד המקרה.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  'הזמנת מושבים אסטרטגית',
                  'ניהול ותפעול חברי מועדון נוסע מתמיד (Frequent Flyer)',
                  'השכרת רכב והעברות פרטיות מהשדה',
                  'פריסת תשלומים אטרקטיבית בקרדיט'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-tal-sky" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center gap-3 bg-white text-tal-navy px-8 py-4 rounded-2xl font-bold hover:bg-tal-sky hover:text-white transition-all shadow-xl group"
                >
                  <ArrowLeft size={20} className="rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform" />
                  להזמנת טיסה בראש שקט
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-tal-sky/10 rounded-[3rem] translate-x-4 translate-y-4 blur-xl" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl">
                <Image 
                  src="/images/hero_home_stunning.png" 
                  alt="Luxury Destination" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-sm font-medium mb-1">טיסה ישירה</p>
                      <p className="text-white font-bold text-xl font-serif">תל אביב - בורה בורה</p>
                    </div>
                    <div className="bg-tal-sky text-tal-navy font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      <Plane size={24} className="rtl:-scale-x-100" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
