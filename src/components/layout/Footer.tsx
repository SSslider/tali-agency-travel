import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tal-navy text-tal-offwhite pt-16 pb-8 border-t border-tal-navy/10 relative overflow-hidden">
      {/* Soft decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tal-sky/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <span className="block text-2xl font-serif font-bold text-tal-offwhite tracking-tight">
                טל fly ✈️
              </span>
              <span className="block text-sm font-sans text-tal-sand font-medium">
                תיירות ונופש
              </span>
            </Link>
            <p className="text-sm text-tal-offwhite/70 leading-relaxed font-sans mt-4 max-w-xs">
              שירות אישי ומקצועי מלווה מרגע ההזמנה ועד החזרה הביתה. אנו כאן כדי לעצב לכם את החופשה המושלמת.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-tal-sand mb-4">חופשות</h3>
            <ul className="space-y-3 text-sm font-sans text-tal-offwhite/80">
              <li><Link href="/vacations" className="hover:text-tal-sky transition-colors">סגנונות חופשה</Link></li>
              <li><Link href="/flights" className="hover:text-tal-sky transition-colors">מחלקת טיסות</Link></li>
              <li><Link href="/hotels" className="hover:text-tal-sky transition-colors">מלונות וריזורטים</Link></li>
              <li><Link href="/tours" className="hover:text-tal-sky transition-colors">טיולים מאורגנים</Link></li>
              <li><Link href="/car-rental" className="hover:text-tal-sky transition-colors">השכרת רכב בחו״ל</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-tal-sand mb-4">תמיכה ושירות</h3>
            <ul className="space-y-3 text-sm font-sans text-tal-offwhite/80">
              <li><Link href="/faq" className="hover:text-tal-sky transition-colors">שאלות נפוצות</Link></li>
              <li><Link href="/reviews" className="hover:text-tal-sky transition-colors">המלצות מלקוחות</Link></li>
              <li><Link href="/contact" className="hover:text-tal-sky transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-tal-sand mb-4">יצירת קשר</h3>
            <ul className="space-y-3 text-sm font-sans text-tal-offwhite/80">
              <li>טל זמורה - סוכנות נסיעות</li>
              <li><a href="mailto:info@talfly.co.il" className="hover:text-tal-sky transition-colors">info@talfly.co.il</a></li>
            </ul>
            <div className="mt-6">
              <Link href="/join-team" className="text-sm font-bold text-tal-sand hover:text-tal-sky transition-colors flex items-center gap-1">
                הצטרפו לצוות שלנו &larr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tal-navy/20 mt-16 pt-8 text-center text-sm font-light">
          <p>© {currentYear} טל fly ✈️ תיירות ונופש. כל הזכויות שמורות.</p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-4 text-tal-offwhite/50">
            <Link href="/accessibility" className="hover:text-tal-offwhite transition-colors">הצהרת נגישות</Link>
            <Link href="/terms" className="hover:text-tal-offwhite transition-colors">תקנון האתר</Link>
            <Link href="/privacy" className="hover:text-tal-offwhite transition-colors">מדיניות פרטיות</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
