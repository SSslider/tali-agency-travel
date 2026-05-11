import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | טל fly',
  description: 'הצהרת הנגישות של אתר טל fly תיירות ונופש.',
};

export default function AccessibilityPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-tal-navy/60 hover:text-tal-sky transition-colors font-medium mb-8">
            <ArrowLeft size={16} className="rtl:-scale-x-100" />
            חזרה לעמוד הבית
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-tal-navy mb-6">הצהרת נגישות</h1>
          <p className="text-lg text-tal-navy/70 font-sans">
            אנו בטל fly רואים חשיבות רבה במתן שירות שוויוני, נגיש ומקצועי לכלל לקוחותינו, לרבות לאנשים עם מוגבלויות.
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-tal-navy/80 font-sans leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">נגישות האתר</h2>
            <p>
              אתר אינטרנט זה הונגש בהתאם להוראות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, ומותאם לדפדפנים נפוצים ולשימוש בטלפון הסלולרי.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">אמצעי הנגישות באתר</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>אפשרות לניווט באתר באמצעות המקלדת (מקש Tab).</li>
              <li>הגדלת והקטנת גופן באמצעות סרגל הנגישות.</li>
              <li>שינוי ניגודיות צבעים, מצב מונוכרום, והדגשת קישורים.</li>
              <li>עצירת אנימציות.</li>
              <li>התאמה מלאה לקוראי מסך.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">פניות בנושא נגישות</h2>
            <p>
              אנו ממשיכים במאמצים לשפר את נגישות האתר. אם נתקלתם בבעיה או בתקלה כלשהי בנושא נגישות, נשמח שתעדכנו אותנו על מנת שנוכל לתקן זאת.
            </p>
            <p className="mt-4 font-bold">פרטי רכז הנגישות בחברה:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>שם: טל זמורה</li>
              <li>טלפון: <a href="tel:0524468884" className="text-tal-sky hover:underline" dir="ltr">052-4468884</a></li>
              <li>דוא״ל: <a href="mailto:info@talfly.co.il" className="text-tal-sky hover:underline">info@talfly.co.il</a></li>
            </ul>
          </section>

          <section className="text-sm text-tal-navy/50 pt-8 border-t border-gray-100">
            <p>תאריך עדכון אחרון: מאי 2026</p>
          </section>
        </div>

      </div>
    </div>
  );
}
