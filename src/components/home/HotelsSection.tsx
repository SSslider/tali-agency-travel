'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

const HOTELS = [
  {
    id: 'resort-maldives',
    name: 'ריזורט ספא מודרני',
    location: 'המלדיביים, אטול ארי הדרומי',
    image: '/images/hero_hotels.png',
    stars: 5,
    features: ['בריכה פרטית', 'שירות משרת אישי', 'הכל כלול'],
    fomo: 'נותרו 3 וילות אחרונות על המים לקיץ'
  },
  {
    id: 'boutique-paris',
    name: 'מלון בוטיק בל אפוק',
    location: 'פריז, רובע המארה (הרובע ה-4)',
    image: '/images/featured_tour_02_1773267002265.png',
    stars: 4,
    features: ['מיקום מרכזי', 'ארוחת בוקר צרפתית', 'עיצוב קלאסי'],
    fomo: '2 חדרים אחרונים נותרו לסופ"ש הקרוב!'
  },
  {
    id: 'family-resort',
    name: 'כפר נופש פרימיום למשפחות',
    location: 'יוון, חצי האי פלופונס',
    image: '/images/category_family.png',
    stars: 5,
    features: ['פארק מים ענק', 'מועדון ילדים', 'חוף פתוח'],
    fomo: 'המחירים עולים ב-15% בסוף החודש'
  }
];

export function HotelsSection() {
  return (
    <section id="hotels" className="py-24 relative overflow-hidden bg-white scroll-mt-20">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-colors-tal-offwhite)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
            מלונות וריזורטים - קולקציית המומלצים שלנו
          </h2>
          <p className="text-tal-navy/70 text-lg font-sans max-w-2xl mx-auto">
            כסוכנות בוטיק, יש לנו הסכמים ישירים עם רשתות המלונות המובילות בעולם. מה זה אומר? שדרוגים, צ&apos;ק-אאוט מאוחר, ומחירים שלרוב לא תמצאו באתרי האונליין.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {HOTELS.map((hotel, idx) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group relative"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-tal-navy flex items-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span>{hotel.stars} כוכבים</span>
                </div>
              </div>

              {/* FOMO Strip */}
              <div className="bg-red-50 text-red-700 border-b border-red-100 px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold animate-[pulse_3s_ease-in-out_infinite]">
                <AlertCircle size={16} />
                <span>{hotel.fomo}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-serif text-tal-navy mb-2 line-clamp-2">
                  {hotel.name}
                </h3>
                
                <div className="flex items-center gap-2 text-tal-navy/60 font-sans text-sm mb-6 flex-1">
                  <MapPin size={16} />
                  <span>{hotel.location}</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  {hotel.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-tal-navy/80 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-tal-sky" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-tal-sand/30 mt-auto">
                  <span className="font-bold text-tal-navy/70 text-sm font-sans">
                    מחירים משתנים - צרו קשר
                  </span>
                  <Link 
                    href="/#contact" 
                    className="bg-tal-navy text-white px-5 py-2 rounded-xl font-bold hover:bg-tal-sky transition-colors shadow-md text-sm"
                  >
                    הזמינו עכשיו
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust guarantees full width */}
        <div className="bg-tal-offwhite rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x-reverse md:divide-x divide-gray-200">
            <div className="p-4">
              <h4 className="text-xl font-bold text-tal-navy mb-2 font-serif">השוואת מחירים בשקיפות</h4>
              <p className="text-tal-navy/70 font-sans text-sm">אנחנו בודקים מול מספר ספקים כדי להבטיח את המחיר הטוב ביותר.</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-tal-navy mb-2 font-serif">תמיכה בזמן החופשה</h4>
              <p className="text-tal-navy/70 font-sans text-sm">בעיה במלון? הגעתם והחדר לא כמו בצילומים? אנחנו זמינים בוואטסאפ לפתור הכל.</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-tal-navy mb-2 font-serif">הטבות VIP</h4>
              <p className="text-tal-navy/70 font-sans text-sm">במלונות נבחרים תקבלו שדרוגי חדרים והטבות בלעדיות ללקוחותינו.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
