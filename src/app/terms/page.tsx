import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'תקנון ותנאי שימוש | טל fly',
  description: 'תקנון ותנאי השימוש של אתר טל fly תיירות ונופש.',
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-tal-navy/60 hover:text-tal-sky transition-colors font-medium mb-8">
            <ArrowLeft size={16} className="rtl:-scale-x-100" />
            חזרה לעמוד הבית
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-tal-navy mb-6">תקנון ותנאי שימוש</h1>
          <p className="text-lg text-tal-navy/70 font-sans">
            ברוכים הבאים לטל fly. השימוש באתר ובשירותים שלנו כפוף לתנאים המפורטים מטה. גלישה באתר כמוה כהסכמה לתנאים אלו.
          </p>
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-tal-navy/80 font-sans leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">1. כללי</h2>
            <p>
              אתר &quot;טל fly&quot; (להלן: &quot;האתר&quot;) משמש כפלטפורמה להצגת שירותי תיירות ונופש וליצירת קשר מול סוכנות הנסיעות טל זמורה. האתר אינו מהווה פלטפורמת סחר או רכישה ישירה, אלא כלי לאיסוף פניות ולמתן שירות אישי.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">2. הצעות ומחירים</h2>
            <p>
              כל המידע, התמונות והתיאורים המופיעים באתר הינם להמחשה בלבד. מחירי החופשות והשירותים עשויים להשתנות בכל עת, ללא הודעה מוקדמת, עקב שינויים בתעריפי הספקים, שערי חליפין או זמינות המקומות. ההצעה המחייבת תינתן רק לאחר יצירת קשר ישיר ותהליך הזמנה מסודר מול הסוכנות.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">3. אחריות על צדדים שלישיים</h2>
            <p>
              טל fly פועלת כמתווכת בין הלקוח לבין ספקי התיירות (חברות תעופה, מלונות, ספקי רכב וכו׳). אין אנו נושאים באחריות על תקלות, עיכובים, ביטולים או פגיעות שנגרמו על ידי ספקים אלו, וכל טענה צריכה להיות מופנית לספק הרלוונטי על פי חוקי התעופה והתיירות המקובלים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">4. זכויות יוצרים</h2>
            <p>
              כל התוכן המופיע באתר, לרבות טקסטים, עיצובים, לוגו ותמונות, מוגן בזכויות יוצרים ומהווה קניין רוחני של טל fly ו/או של צדדים שלישיים שהעניקו לנו הרשאה לשימוש בהם. אין להעתיק, לשכפל או לעשות שימוש מסחרי בתוכן ללא אישור בכתב מראש.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-tal-navy mb-4">5. דין וסמכות שיפוט</h2>
            <p>
              על שימוש באתר ותנאים אלו יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל סכסוך הנוגע לאתר תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.
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
