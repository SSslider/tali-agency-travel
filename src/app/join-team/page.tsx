'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle2, ArrowLeft } from 'lucide-react';


export default function JoinTeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="הצטרפו לנבחרת המנצחת" 
        subtitle="אנו מחפשים סוכני תיירות פרילנסרים מצטיינים לשיתוף פעולה ארוך טווח, עם תגמול הוגן ומערכת תמיכה טכנולוגית מתקדמת."
        imageSrc="/images/hero_team.png"
        imageAlt="צוות סוכני נסיעות מתכנן חופשות במשרד מואר"
      />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-tal-offwhite p-10 md:p-14 rounded-3xl border border-gray-100 shadow-sm mb-16">
            <h2 className="text-3xl font-serif font-bold text-tal-navy mb-6">למה לעבוד איתנו?</h2>
            
            <div className="space-y-4 mb-10">
              {[
                'עמלות גבוהות בשוק התיירות הישראלי.',
                'גישה ישירה למערכות הטסה וסיטונאי תיירות בלעדיים.',
                'מערך פתירת משברים ותמיכה 24/7 ללקוחות שלכם.',
                'סביבת עבודה משפחתית אך מקצועית וחסרת פשרות.',
                'הכשרות והשתלמויות מקצועיות מסביב לעולם.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 text-tal-navy/80 font-sans text-lg">
                  <CheckCircle2 className="text-tal-sky shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
               <a 
                 href="mailto:jobs@talfly.co.il"
                 className="inline-flex items-center gap-2 bg-tal-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-tal-sky transition-colors shadow-lg"
               >
                 <span>שלחו לנו קורות חיים ונדבר</span>
                 <ArrowLeft size={20} className="rtl:-scale-x-100" />
               </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
