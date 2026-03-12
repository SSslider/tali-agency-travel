import Link from 'next/link';
import { Users, Briefcase } from 'lucide-react';

export function CtaSections() {
  return (
    <section className="py-20 bg-tal-offwhite border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Deals Group CTA */}
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-tal-sand/20 hover:shadow-lg transition-shadow flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-tal-sky/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users size={36} className="text-tal-sky" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-tal-navy mb-4">
              קבוצת הדילים הסודית שלנו
            </h3>
            <p className="text-tal-navy/70 leading-relaxed font-sans mb-8 max-w-sm">
              רוצים לקבל ראשונים את הדילים הכי שווים לחופשות, טיסות ומלונות לפני כולם? הצטרפו לקבוצת הוואטסאפ השקטה שלנו.
            </p>
            <a 
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK" 
              target="_blank" 
              rel="noreferrer"
              className="bg-tal-navy text-tal-offwhite px-8 py-3 rounded-xl font-bold hover:bg-tal-sky transition-colors shadow-md w-full max-w-xs block text-center"
            >
              להצטרפות לקבוצה
            </a>
          </div>

          {/* Join Our Team CTA */}
          <div className="bg-tal-navy text-tal-offwhite p-10 md:p-12 rounded-3xl shadow-lg border border-tal-navy/20 hover:shadow-2xl transition-shadow flex flex-col items-center text-center group relative overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tal-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 w-20 h-20 bg-tal-sand/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase size={36} className="text-tal-sand" />
            </div>
            <h3 className="relative z-10 text-3xl font-serif font-bold text-tal-offwhite mb-4">
              בואו לעוף איתנו! צירוף סוכנים
            </h3>
            <p className="relative z-10 text-tal-offwhite/80 leading-relaxed font-sans mb-8 max-w-sm">
              אנו מרחיבים את המשפחה ומחפשים סוכני נסיעות ויועצי תיירות פרילנסרים להצטרף לצוות &apos;טלי פלאי תיירות ונופש&apos;.
            </p>
            <Link 
              href="/join-team"
              className="relative z-10 bg-tal-sand text-tal-navy px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors shadow-md w-full max-w-xs block text-center"
            >
              לפרטים והגשת מועמדות
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
