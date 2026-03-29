import { PageHeader } from "@/components/ui/PageHeader";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="מדיניות פרטיות" 
        subtitle="אנחנו מתייחסים לפרטיות שלכם בכובד ראש. כך אנחנו שומרים על המידע שלכם."
        imageSrc="/images/hero_landscape.png"
        imageAlt="נוף רגוע"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 font-sans text-tal-navy/80 leading-relaxed text-justify space-y-6">
         <h2 className="text-2xl font-bold font-serif text-tal-navy">כללי</h2>
         <p className="mb-6 leading-relaxed">
           טל fly ✈️ תיירות ונופש מכבדת את פרטיות הגולשים באתר האינטרנט שלה. מטרת מסמך זה להסביר כיצד החברה משתמשת במידע 
           הנמסר לה על ידי המשתמשים או נאסף בעת השימוש באתר.
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">איסוף ושימוש במידע</h2>
         <p>
           אנו אוספים שני סוגי מידע:
           <br/>1. מידע אקטיבי שאתם מוסרים מרצונכם בעת מילוי טופס פנייה (שם, טלפון, דוא&quot;ל, העדפות חופשה). חלק ממידע זה נדרש על מנת שנוכל לחזור אליכם עם הצעה רלוונטית וליצור עמכם קשר באמצעות הטלפון או הוואטסאפ.
         </p>
         <p>
           2. מידע טכני/סטטיסטי שנאסף בעת הגלישה (כתובת IP, סוג דפדפן, זמן שהייה) – מידע זה הוא אנונימי ומשמש לצורכי שיפור חוויית הגלישה (Cookies) ולניתוח סטטיסטי בלבד (גוגל אנליטיקס וכד&apos;).
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">מאגר המידע ומסירת מידע לצד ג&apos;</h2>
         <p>
           פרטיכם יישמרו במאגר המידע המאובטח של החברה. אנו מתחייבים לא למכור או להעביר את פרטי הקשר האישיים שלכם לצדדים שלישיים לצרכי שיווק.
           כאשר תתקדמו לתהליך הזמנה, פרטים רלוונטיים (כשמות נוסעים ותאריכי לידה) יועברו אך ורק לספקי רלוונטים לביצוע העסקה בפועל (חברות תעופה, מלונות).
         </p>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">דיוור ישיר</h2>
         <p>
           במידה ובחרתם להצטרף ל&quot;קבוצת הדילים הסודית&quot; שלנו (וואטסאפ/ניוזלטר), אתם מסכימים לקבל עדכונים שיווקיים והצעות. 
           תוכלו להסיר את עצמכם מתפוצה זו בכל עת, בקליק אחד, בהתאם להוראות חוק התקשורת (&quot;חוק הספאם&quot;).
         </p>

         <p className="text-sm border-t border-gray-200 pt-6">לשאלות בנושא מדיניות הפרטיות, ניתן לפנות אלינו במייל: privacy@talfly.co.il</p>
      </div>
    </div>
  );
}
