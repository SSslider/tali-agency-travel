'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Clock, Users } from 'lucide-react';

const PREMIUM_DEALS = [
  {
    id: 'd1',
    destination: 'זנזיבר',
    type: 'ריזורט 5 כוכבים פרימיום כולל טיסות',
    dates: 'יציאה ב-12.11 למשך שבוע',
    price: '$1,390',
    originalPrice: '$1,850',
    image: '/images/hero_landscape.png',
    urgencyTag: 'נותרו 2 חדרים',
    urgencyLevel: 'high' // Determines progress bar color
  },
  {
    id: 'd2',
    destination: 'איי סיישל',
    type: 'חבילת בוטיק ופינוק זוגי (כולל העברות)',
    dates: 'סופ"ש ארוך בנובמבר',
    price: '€1,990',
    originalPrice: '€2,400',
    image: '/images/hero_vacations.png',
    urgencyTag: 'מוגבל ל-4 זוגות',
    urgencyLevel: 'medium'
  },
  {
    id: 'd3',
    destination: 'לונדון',
    type: 'סופ"ש עירוני למקדימים',
    dates: 'סופ"ש הקרוב למקדימים',
    price: '₪2,200',
    originalPrice: '₪3,100',
    image: '/images/featured_tour_02_1773267002265.png',
    urgencyTag: 'הביקוש עולה',
    urgencyLevel: 'low'
  }
];

export default function DealsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-tal-offwhite">
      <PageHeader 
        title="הקולקציה השמורה" 
        subtitle="הזדמנויות נקודתיות של יוקרה. תנאים חסרי תקדים עבור אלו שפועלים מהר."
        imageSrc="/images/hero_deals.png"
        imageAlt="הזדמנויות חופשה חלומית"
      />
      
      <section className="py-24 relative overflow-hidden">
        
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tal-sky/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-tal-sand/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-tal-sky font-bold tracking-widest text-sm mb-4 uppercase">
                <Sparkles size={16} />
                <span>מלאי מוגבל</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-tal-navy leading-tight">
                חוויות שקשה<br />למצוא פעמיים
              </h2>
            </div>
            <div className="md:text-left rtl:md:text-left">
              <p className="text-tal-navy/60 text-lg font-sans max-w-md leading-relaxed">
                רשימה זו מתעדכנת בזמן אמת. ההצעות נבחרות בקפידה בשל התנאים הייחודיים שלהן, וזמינותן מסתיימת ברגע שהמקומות הייעודיים מתמלאים.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PREMIUM_DEALS.map((deal, idx) => (
              <motion.div 
                key={deal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-white rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 relative flex flex-col"
              >
                {/* Image & Subtle Urgency Tag */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-tal-navy/20 group-hover:bg-tal-navy/10 transition-colors duration-700 z-10" />
                  <Image
                    src={deal.image} 
                    alt={deal.destination}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Subtle Visual FOMO Indicator Top */}
                  <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${deal.urgencyLevel === 'high' ? 'bg-red-500' : deal.urgencyLevel === 'medium' ? 'bg-orange-400' : 'bg-green-500'}`} />
                      <span className="text-tal-navy text-xs font-bold tracking-wide">{deal.urgencyTag}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-tal-navy font-serif mb-3 group-hover:text-tal-sky transition-colors">
                      {deal.destination}
                    </h3>
                    <p className="text-tal-navy/70 leading-relaxed text-sm font-medium">
                      {deal.type}
                    </p>
                  </div>

                  {/* Icon details */}
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-3 text-tal-navy/80 text-sm font-medium">
                      <Clock size={18} className="text-tal-sand" strokeWidth={2.5} />
                      {deal.dates}
                    </div>
                    <div className="flex items-center gap-3 text-tal-navy/80 text-sm font-medium">
                      <Users size={18} className="text-tal-sand" strokeWidth={2.5} />
                      מתאים לזוגות או משפחות
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <p className="text-tal-navy/40 line-through text-xs font-bold mb-1 tracking-wider">{deal.originalPrice}</p>
                      <div className="flex items-end gap-1">
                        <p className="text-4xl font-bold text-tal-navy tracking-tight leading-none">{deal.price}</p>
                        <span className="text-tal-navy/50 text-sm font-medium mb-1">לאדם</span>
                      </div>
                    </div>
                    <a 
                      href="/contact" 
                      className="w-14 h-14 bg-tal-navy text-white rounded-full flex items-center justify-center group-hover:bg-tal-sky transition-colors shadow-md"
                      aria-label="לפרטים"
                    >
                      <ArrowLeft size={24} className="rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Subtle capacity bar (Visual FOMO) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
                    <div 
                      className={`h-full ${deal.urgencyLevel === 'high' ? 'bg-red-500 w-[90%]' : deal.urgencyLevel === 'medium' ? 'bg-orange-400 w-[75%]' : 'bg-tal-sky w-[45%]'}`} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <div className="bg-gradient-to-br from-tal-navy to-[#0F294D] rounded-[2rem] p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="absolute right-0 top-0 w-64 h-64 bg-tal-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 md:max-w-xl text-right">
                <h3 className="text-2xl md:text-4xl font-bold font-serif mb-4 text-white">גישה מוקדמת</h3>
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  ההזדמנויות הטובות ביותר נסגרות הרבה לפני שהן מגיעות לכאן. הצטרפו לקהילת הלקוחות הסגורה שלנו לקבלת עדכונים ראשונים בזמן אמת.
                </p>
              </div>
              
              <div className="relative z-10 shrink-0">
                <a 
                  href="https://chat.whatsapp.com/YOUR_GROUP_LINK" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-tal-navy font-bold px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-tal-offwhite hover:scale-105 transition-all inline-flex items-center gap-3 text-lg"
                >
                  לכניסה לקבוצה הסודית
                  <ArrowLeft size={20} className="rtl:-scale-x-100" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
