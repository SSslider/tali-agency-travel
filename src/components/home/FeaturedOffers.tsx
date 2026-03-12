'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plane, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const OFFERS = [
  {
    id: 'maldives',
    title: 'ריזורט חלומות במלדיביים',
    location: 'האיים המלדיביים',
    image: '/images/featured_tour_01_1773266985401.png',
    tags: ['זוגות', 'פרימיום', 'בטן גב'],
    price: 'החל מ-₪8,900 לאדם',
  },
  {
    id: 'europe',
    title: 'סופ"ש קלאסי בפריז',
    location: 'צרפת',
    image: '/images/featured_tour_02_1773267002265.png',
    tags: ['חופשה רומנטית', 'קולינריה', 'תרבות'],
    price: 'החל מ-₪3,200 לאדם',
  },
  {
    id: 'family-italy',
    title: 'טיול משפחות בצפון איטליה',
    location: 'איטליה, אגם גארדה',
    image: '/images/category_family.png',
    tags: ['משפחות', 'טבע', 'רכב שכור'],
    price: 'השאירו פרטים להצעה',
  }
];

export function FeaturedOffers() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-colors-tal-sand)_0%,transparent_40%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
              יעדים נבחרים השבוע
            </h2>
            <p className="text-tal-navy/70 text-lg font-sans">
              הצעות חמות והשראות לחופשה הבאה שלכם. אנחנו דואגים להתאים לכם את הדיל הטוב ביותר עבור כל יעד שתבחרו.
            </p>
          </div>
          <Link 
            href="/deals" 
            className="hidden md:flex items-center gap-2 text-tal-navy font-bold hover:text-tal-sky transition-colors pb-2 border-b-2 border-tal-navy hover:border-tal-sky"
          >
            <span>לכל ההצעות</span>
            <Plane size={18} className="rtl:-scale-x-100" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer, idx) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-tal-offwhite rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-tal-navy flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span>מומלץ</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {offer.tags.map(tag => (
                    <span key={tag} className="bg-tal-sand/30 text-tal-navy px-3 py-1 rounded-full text-xs font-medium font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold font-serif text-tal-navy mb-2 line-clamp-2">
                  {offer.title}
                </h3>
                <p className="text-tal-navy/60 font-sans text-sm mb-6 flex-1">
                  {offer.location}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-tal-navy/10 mt-auto">
                  <span className="font-bold text-tal-navy font-sans">
                    {offer.price}
                  </span>
                  <Link 
                    href={`/vacations/${offer.id}`} 
                    className="w-10 h-10 rounded-full bg-tal-navy text-white flex items-center justify-center group-hover:bg-tal-sky transition-colors shadow-md"
                  >
                    &larr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/deals" 
            className="inline-flex items-center gap-2 text-tal-navy font-bold hover:text-tal-sky transition-colors pb-2 border-b-2 border-tal-navy hover:border-tal-sky"
          >
            <span>לכל ההצעות המשוגעות שלנו</span>
            <Plane size={18} className="rtl:-scale-x-100" />
          </Link>
        </div>

      </div>
    </section>
  );
}
