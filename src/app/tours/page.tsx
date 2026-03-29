'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Map, CheckCircle2, ChevronLeft } from 'lucide-react';

const TOURS = [
  {
    id: 't1',
    title: 'הקסם של צפון איטליה',
    duration: '8 ימים / 7 לילות',
    dates: '24 באוקטובר - 31 באוקטובר',
    image: '/images/featured_tour_02_1773267002265.png',
    highlights: ['אגם גארדה', 'ורונה ווינצנצה', 'הרי הדולומיטים', 'סדנת בישול מקומית'],
    status: 'נותרו 4 מקומות!',
    statusColor: 'text-orange-600 bg-orange-100',
    price: 'החל מ-€1,290 לאדם'
  },
  {
    id: 't2',
    title: 'יפן האותנטית - פריחת הדובדבן',
    duration: '14 ימים / 13 לילות',
    dates: '15 במרץ - 28 במרץ (שנה הבאה)',
    image: '/images/hero_landscape.png',
    highlights: ['טוקיו וקיוטו', 'נסיעה ברכבת הקליע', 'טקס תה מסורתי', 'לינה בריוקאן'],
    status: 'ההרשמה נפתחה',
    statusColor: 'text-green-700 bg-green-100',
    price: 'החל מ-$4,500 לאדם'
  },
  {
    id: 't3',
    title: 'דובאי ואבו דאבי - יוקרה ישראלית',
    duration: '5 ימים / 4 לילות',
    dates: 'יציאות שבועיות בחורף',
    image: '/images/hero_hotels.png',
    highlights: ['בורג׳ חליפה', 'ספארי מדברי', 'המסגד הגדול', 'קניות בגלובל וילג׳'],
    status: 'מבצע מוקדם (-10%)',
    statusColor: 'text-tal-sky bg-tal-sky/10',
    price: 'החל מ-$890 לאדם'
  }
];

export default function ToursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="טיולים מאורגנים בסטייל" 
        subtitle="לראות את העולם עם הדרכה מקצועית, קבוצה איכותית ודאגה לכל הפרטים הקטנים. אתם רק צריכים לארוז מזוודה."
        imageSrc="/images/hero_tours.png"
        imageAlt="קבוצת מטיילים שמחים בטבע הררי בשקיעה"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content - Tour List */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-serif font-bold text-tal-navy">הקרובים אלינו</h2>
                <span className="text-tal-navy/60 font-sans font-medium text-sm">3 טיולים זמינים</span>
              </div>

              {TOURS.map((tour, idx) => (
                <motion.div 
                  key={tour.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border text-right border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col sm:flex-row relative"
                >
                  <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden shrink-0">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute top-4 right-4 ${tour.statusColor} px-3 py-1.5 rounded-full text-xs font-bold leading-none backdrop-blur-sm`}>
                      {tour.status}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 pl-8">
                    <div className="flex items-center gap-4 text-xs font-bold font-sans text-tal-navy/60 mb-3">
                      <div className="flex items-center gap-1"><Calendar size={14} /> {tour.dates}</div>
                      <div className="flex items-center gap-1"><Map size={14} /> {tour.duration}</div>
                    </div>
                    
                    <h3 className="font-serif font-bold text-2xl text-tal-navy mb-4">
                      {tour.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {tour.highlights.map(highlight => (
                        <li key={highlight} className="flex items-center gap-2 text-tal-navy/80 text-sm">
                          <CheckCircle2 size={14} className="text-tal-sand" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <span className="font-bold text-tal-navy text-lg font-sans">
                        {tour.price}
                      </span>
                      <Link 
                        href="/contact" 
                        className="flex items-center gap-1 text-tal-sky font-bold hover:text-tal-navy transition-colors text-sm"
                      >
                        פרטים והרשמה <ChevronLeft size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar - Why Organized? */}
            <div className="lg:col-span-4">
              <div className="bg-tal-offwhite p-8 rounded-3xl sticky top-28">
                <h2 className="text-3xl font-serif font-bold text-tal-navy mb-4">
                  היתרון של טל fly ✈️ בטיולים מאורגנים
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-tal-navy mb-1 flex items-center gap-2">
                      <span className="text-tal-sky">01.</span> קבוצות בוטיק
                    </h4>
                    <p className="text-sm text-tal-navy/70 leading-relaxed pl-6">
                      אנחנו לא מאמינים באוטובוסים דחוסים עם 50 איש. הטיולים שלנו מוגבלים לקבוצות קטנות ואינטימיות המאפשרות יחס אישי.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tal-navy mb-1 flex items-center gap-2">
                      <span className="text-tal-sky">02.</span> מדריכים מעולים
                    </h4>
                    <p className="text-sm text-tal-navy/70 leading-relaxed pl-6">
                      המדריך עושה את הטיול. בחרנו בקפידה את סגל ההדרכה הטוב ביותר, שחי ונושם את היעד.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-tal-navy mb-1 flex items-center gap-2">
                      <span className="text-tal-sky">03.</span> הכל סגור ומאורגן
                    </h4>
                    <p className="text-sm text-tal-navy/70 leading-relaxed pl-6">
                      מתקשים למצוא את המלון? לא יודעים איזה כרטיס רכבת לקנות? השאירו את הלוגיסטיקה לנו.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-tal-sand/20 text-center">
                  <p className="font-bold text-tal-navy mb-4">מתארגנים כקבוצה פרטית?</p>
                  <Link href="/contact" className="block w-full bg-white border-2 border-tal-navy text-tal-navy px-4 py-3 rounded-xl font-bold hover:bg-tal-navy hover:text-white transition-colors">
                    תפרו לנו טיול סגור
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
