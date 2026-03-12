import { PageHeader } from "@/components/ui/PageHeader";

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="הצהרת נגישות" 
        subtitle="אנו פועלים רבות כדי להנגיש את המידע ואת השירותים באתר שלנו עבור כלל האוכלוסייה."
        imageSrc="/images/hero_landscape.png"
        imageAlt="נוף רגוע"
      />
      <div className="max-w-4xl mx-auto px-4 py-20 font-sans text-tal-navy/80 leading-relaxed text-justify space-y-6">
         <h2 className="text-2xl font-bold font-serif text-tal-navy">מבוא</h2>
         <p>
           טלי Fly ✈️ תיירות ונופש רואה חשיבות עליונה בהנגשת אתר האינטרנט לאנשים עם מוגבלויות, ובכך לאפשר למרבית האוכלוסייה לגלוש בקלות ובנוחות. 
           האתר נבנה בהתאם להוראות תקן הנגישות הישראלי (ת&quot;י 5568) ברמה AA.
         </p>
         
         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">אמצעי הנגישות באתר</h2>
         <ul className="list-disc pr-6 space-y-2">
           <li>התאמה מלאה לניווט במקלדת התומכת בפוקוס ברור.</li>
           <li>תפריט נגישות (כפתור כחול בצד המסך) המאפשר: הגדלת טקסט, שינוי עוצמת ניגודיות (גבוהה/מונוכרום).</li>
           <li>תאימות מיטבית למקריאי מסך תוך שימוש בתגיות מותאמות (ARIA).</li>
           <li>תיאור אלטרנטיבי (Alt Text) מדויק לתמונות בעלות משמעות.</li>
         </ul>

         <h2 className="text-2xl font-bold font-serif text-tal-navy pt-6">יצירת קשר ותמיכה</h2>
         <p>
           אם נתקלתם בקושי כלשהו בגלישה באתר או אם יש לכם הערות בנוגע לנגישות, נשמח לעמוד לרשותכם:
           <br/>אימייל אחראי נגישות: accessibility@talfly.co.il
         </p>
         <p className="text-sm border-t border-gray-200 pt-6">תאריך עדכון אחרון: מרץ 2026</p>
      </div>
    </div>
  );
}
