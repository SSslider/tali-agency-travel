'use client';

import Image from 'next/image';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'vacations',
    name: 'חופשות מותאמות אישית',
    image: '/images/category_family.png',
    link: '/#vacations',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2'
  },
  {
    id: 'flights',
    name: 'מחלקת טיסות',
    image: '/images/category_flights.png',
    link: '/#flights',
    colSpan: 'col-span-1'
  },
  {
    id: 'hotels',
    name: 'מלונות וריזורטים',
    image: '/images/category_hotels.png',
    link: '/#hotels',
    colSpan: 'col-span-1'
  },
];

const QUICK_LINKS = [
  { name: 'טיולים מאורגנים', link: '/#tours' },
  { name: 'השכרת רכב בחו״ל', link: '/#car-rental' },
  { name: 'דילים חמים', link: '/#deals' },
  { name: 'חופשות משפחתיות', link: '/#vacations' },
];

export function CategoryTiles() {
  return (
    <section className="py-20 bg-tal-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-right">
          <h2 className="text-3xl font-serif font-bold text-tal-navy mb-4">
            במה אנחנו יכולים לעזור?
          </h2>
          <p className="text-tal-navy/70 max-w-2xl text-lg">
            אנו מתמחים במגוון רחב של שירותי תיירות, מטיסות ומלונות ועד החופשה המושלמת בהתאמה אישית, תוך דגש על איכות ושירות ברמה הגבוהה ביותר.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Main Visual Tiles */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={cat.link}
                className={`group relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block ${cat.colSpan}`}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tal-navy/80 via-tal-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end">
                  <h3 className="text-2xl font-bold font-serif text-white drop-shadow-md">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Links Column */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            {QUICK_LINKS.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.link}
                className="flex-1 min-h-[5rem] bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between group hover:bg-tal-sand/10 hover:border-tal-sand/30 transition-all shadow-sm"
              >
                <span className="font-bold text-tal-navy font-sans text-lg">{item.name}</span>
                <span className="w-8 h-8 rounded-full bg-tal-offwhite flex items-center justify-center text-tal-sky group-hover:bg-tal-sky group-hover:text-white transition-colors">
                  &larr;
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
