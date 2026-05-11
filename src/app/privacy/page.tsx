import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | טל fly',
  description: 'מדיניות הפרטיות של אתר טל fly תיירות ונופש.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-tal-navy/60 hover:text-tal-sky transition-colors font-medium mb-8">
            <ArrowLeft size={16} className="rtl:-scale-x-100" />
            חזרה לעמוד הבית
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-tal-navy mb-6">מדיניות פרטיות</h1>
          <p className="text-lg text-tal-navy/70 font-sans">
            בטל fly אנו מכבדים את פרטיותך. מסמך זה מפרט כיצד אנו אוספים, שומרים ומשתמשים במידע האישי שלך.
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-tal-navy/80 font-sans leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">איסוף מידע</h2>
            <p>
              אנו אוספים מידע אישי כגון שם, כתובת דוא״ל ומספר טלפון כאשר אתה משאיר פרטים באתר לצורך קבלת הצעת מחיר או יצירת קשר. כמו כן, אנו עשויים לאסוף מידע טכני בלתי מזוהה על אופן השימוש באתר למטרות שיפור חוויית הגלישה.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">שימוש במידע</h2>
            <p>המידע שנאסף ישמש אך ורק למטרות הבאות:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>יצירת קשר חזרה ותפירת חופשה מותאמת אישית.</li>
              <li>שליחת עדכונים והצעות רלוונטיות (רק אם אישרת זאת מראש).</li>
              <li>שיפור השירותים והחוויה הדיגיטלית באתר.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">אבטחת מידע ומסירת מידע לצד ג׳</h2>
            <p>
              אנו מתחייבים לא להעביר את פרטיך לצדדים שלישיים ללא הסכמתך המפורשת, למעט במקרים בהם הדבר נדרש לצורך השלמת הזמנה (למשל העברת שם חברת תעופה או מלון) או במקרים הנדרשים על פי חוק. אנו מיישמים אמצעי אבטחה קפדניים כדי להגן על המידע שלך.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">יצירת קשר בנושא פרטיות</h2>
            <p>
              בכל שאלה או בקשה למחיקת המידע האישי שלך מהמאגר שלנו, ניתן לפנות אלינו בדוא״ל: <a href="mailto:info@talfly.co.il" className="text-tal-sky hover:underline">info@talfly.co.il</a>.
            </p>
          </section>

          <section className="text-sm text-tal-navy/50 pt-8 border-t border-gray-100">
            <p>תאריך עדכון אחרון: מאי 2026</p>
          </section>
        </div>

      </div>
    </div>
  );
}
