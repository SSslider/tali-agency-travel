'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import { Recommendations } from "@/components/home/Recommendations";
import { Star, ShieldCheck } from 'lucide-react';

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-tal-offwhite">
      <PageHeader 
        title="מכתבי תודה" 
        subtitle="המדד האמיתי להצלחה שלנו הוא החיוך שלכם כשאתם חוזרים הביתה. הנה מה שיש ללקוחות טל fly ✈️ להגיד."
        imageSrc="/images/reviews-hero.jpg"
        imageAlt="תמונת נוף הרים יוקרתית"
      />
      
      {/* We reuse the core recommendations component from the homepage to ensure visual consistency */}
      <Recommendations />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-6">
            {[1,2,3,4,5].map(star => (
              <Star key={star} size={32} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl font-serif font-bold text-tal-navy mb-6">דורגו 5 כוכבים מעל ל-500 חופשות</h2>
          <p className="text-tal-navy/70 text-lg font-sans">
            האמון שלכם הוא הנכס היקר ביותר שלנו. בזכות השירות האישי והפרטני אנחנו בונים מערכות יחסים לשנים ארוכות עם הלקוחות שמפקידים בידינו את השבועות החשובים בשנה.
          </p>
          <div className="mt-8 flex justify-center">
             <div className="flex items-center gap-2 text-tal-sky font-bold bg-tal-sky/10 px-6 py-2 rounded-full border border-tal-sky/20">
               <ShieldCheck size={20} />
               מוסמכים כסוכנות תיירות מורשית
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
