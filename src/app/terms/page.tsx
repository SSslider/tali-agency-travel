import { PageHeader } from "@/components/ui/PageHeader";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="תקנון ותנאי שימוש" 
        subtitle="מסמך משפטי המסדיר את תנאי ההתקשרות בינינו."
        imageSrc="/images/hero_landscape.png"
        imageAlt="תמונת נוף הרים יוקרתית"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 font-sans text-tal-navy/80 leading-relaxed text-justify space-y-6">
         <h2 className="text-2xl font-bold font-serif text-tal-navy">1. מבוא</h2>
         <p className="mb-6 leading-relaxed">
           ברוכים הבאים לאתר &quot;טל fly ✈️ תיירות ונופש&quot; (להלן: &quot;האתר&quot;). השימוש באתר כפוף לתנאים המפורטים בתקנון זה. 
           עצם גלישתך באתר מהווה הסכמה מלאה לתנאים אלו.
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">2. הזמנת שירותים</h2>
         <p>
           האתר משמש כפלטפורמת שיווק ומידע לשירותי תיירות. כל הזמנת שירות (טיסות, מלונות, חבילות, רכב וכו&apos;) מתבצעת באופן ישיר מול סוכני החברה לאחר יצירת קשר, ולא כהזמנה מקוונת אוטומטית (E-commerce). 
           התנאים הספציפיים (דמי ביטול, שינויים, אחריות) יפורטו בטופס ההזמנה העוקב ולאתר אין צד חוזי בעסקה עצמה.
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">3. קניין רוחני</h2>
         <p className="mb-6 leading-relaxed">
           כל זכויות היוצרים והקניין הרוחני באתר – לרבות טקסטים, תמונות (לרבות תמונות AI שנוצרו עבור האתר), עיצובים, קוד מקור ושם המותג – שייכים לטל fly תיירות ונופש. 
           אין להעתיק, לשכפל, להפיץ או לעשות כל שימוש מסחרי במידע ללא אישור בכתב.
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">4. פטור מאחריות</h2>
         <p>
           המידע המוצג באתר, לרבות מחירי דילים במבצע, מסופק כמות שהוא (As-Is) ונשען על נתונים מספקי צד ג&apos; שעשויים להשתנות בכל רגע (זמינות, שערי מטבע). אין לראות במידע כהצעה מחייבת עד לאישור סופי על ידי סוכן מורשה מחברתנו.
         </p>

         <p className="text-sm border-t border-gray-200 pt-6">תאריך עדכון אחרון: מרץ 2026. סמכות שיפוט: בתי המשפט במחוז תל אביב-יפו.</p>
      </div>
    </div>
  );
}
