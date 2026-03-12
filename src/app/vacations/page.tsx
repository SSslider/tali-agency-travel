'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Users, MapPin, Heart, ArrowLeft } from 'lucide-react';

const VACATION_STYLES = [
  {
    id: 'couples',
    title: 'חופשות רומנטיות וירח דבש',
    description: 'מריזורטים מבודדים במלדיביים ועד מלונות בוטיק היסטוריים באירופה. נתפור עבורכם את הבריחה המושלמת בשניים.',
    image: '/images/hero_vacations.png',
    tags: ['מבוגרים בלבד', 'פינוק מרבי'],
    urgency: 'נותרו 2 מקומות לעונת ירח הדבש בסיישל',
    icon: <Heart className="w-6 h-6 text-tal-sky" />
  },
  {
    id: 'family',
    title: 'טיולי משפחות מאסטר-פיס',
    description: 'איזון מושלם בין אטרקציות לילדים לשקט של ההורים. רכבים מרווחים, כפרי נופש יוקרתיים וחוויות בלתי נשכחות.',
    image: '/images/category_family.png',
    tags: ['הכל כלול', 'פארקי מים', 'טבע'],
    urgency: 'הזמינו עכשיו לחופש הגדול - המחירים עולים!',
    icon: <Users className="w-6 h-6 text-tal-sky" />
  },
  {
    id: 'city',
    title: 'קפיצה קטנה לעיר (City Break)',
    description: 'סופ"ש ארוך של קולינריה, שופינג ותרבות בערי הבירה התוססות של אירופה. כולל המלצות למסעדות עטורות כוכבי מישלן.',
    image: '/images/featured_tour_02_1773267002265.png',
    tags: ['סופ"ש ארוך', 'קולינריה', 'סטייל'],
    urgency: 'דילים של הרגע האחרון לסופ"ש הקרוב',
    icon: <MapPin className="w-6 h-6 text-tal-sky" />
  },
  {
    id: 'exotic',
    title: 'יעדים אקזוטיים',
    description: 'חול לבן, מים בצבע טורקיז ושקט פנימי. תאילנד, זנזיבר, מאוריציוס – אנחנו נמצא את פיסת גן העדן המדויקת שלכם.',
    image: '/images/featured_tour_01_1773266985401.png',
    tags: ['חופים לבנים', 'ריזורטים', 'שקט נפשי'],
    urgency: 'חבילות חורף חמות ביעדים טרופיים',
    icon: <Clock className="w-6 h-6 text-tal-sky" />
  }
];

export default function VacationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-tal-offwhite">
      <PageHeader 
        title="עיצוב חופשות לפי סגנון" 
        subtitle="כי החופשה שלכם היא לא שטאנץ. היא חייבת להתאים לשלב בחיים, לחלום ולתקציב."
        imageSrc="/images/hero_vacations.png"
        imageAlt="זוג משקיף לנוף ים לקראת שקיעה"
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {VACATION_STYLES.map((style, idx) => (
              <motion.div 
                key={style.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col border border-gray-100 relative"
              >
                {/* Urgent FOMO Badge */}
                <div className="absolute top-4 left-4 z-20 bg-red-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 animate-pulse">
                  <Clock size={14} />
                  <span>{style.urgency}</span>
                </div>

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tal-navy/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 right-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {style.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-2 mb-4">
                    {style.tags.map(tag => (
                      <span key={tag} className="bg-tal-sand/20 text-tal-navy px-3 py-1 rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-tal-navy mb-4">
                    {style.title}
                  </h2>
                  <p className="text-tal-navy/70 leading-relaxed font-sans mb-8 flex-1 text-lg">
                    {style.description}
                  </p>

                  <Link 
                    href="/contact" 
                    className="group/btn relative w-full bg-tal-navy text-tal-offwhite px-6 py-4 rounded-xl text-center font-bold text-lg overflow-hidden flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 transition-colors group-hover/btn:text-tal-navy">בואו נרכיב הצעה אישית</span>
                    <ArrowLeft className="relative z-10 transition-transform group-hover/btn:-translate-x-1 group-hover/btn:text-tal-navy text-tal-offwhite rtl:rotate-180" size={20} />
                    <div className="absolute inset-0 h-full w-full bg-tal-sky scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-right duration-300 ease-out" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FOMO Action Banner */}
      <section className="bg-tal-navy py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tal-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            לא מצאתם את הסגנון שלכם?
          </h3>
          <p className="text-white/80 text-xl font-sans mb-10 max-w-2xl mx-auto">
            זה בסדר גמור. השירות שלנו מתחיל בשיחה. ספרו לנו מה מעניין אתכם ואנחנו נתפור לכם את המסלול מהשרוך של הנעל.
          </p>
          <Link href="/contact" className="inline-block bg-white text-tal-navy px-10 py-4 rounded-xl font-bold text-xl hover:bg-tal-sky hover:text-white transition-all shadow-xl hover:-translate-y-1">
            דברו איתנו עכשיו
          </Link>
        </div>
      </section>

    </div>
  );
}
