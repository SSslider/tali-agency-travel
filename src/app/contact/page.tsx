'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-tal-offwhite">
      <PageHeader 
        title="הקפה עלינו" 
        subtitle="בואו נדבר על היעד הבא שלכם. השאירו פרטים, או פשוט שלחו לנו הודעה בוואטסאפ."
        imageSrc="/images/hero_landscape.png"
        imageAlt="נוף הרים ויער"
      />
      
      <section className="py-24 relative overflow-hidden">
        {/* Soft abstract background */}
        <div className="absolute -left-40 top-40 w-96 h-96 bg-tal-sky/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Contact Info & Vibe */}
            <div className="lg:w-2/5 bg-tal-navy text-white p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
                <Image src="/images/hero_vacations.png" alt="Background" fill className="object-cover" />
              </div>
              
              <div className="relative z-10 mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  טלי פליי.<br />
                  <span className="text-tal-sky">תיירות ונופש פרימיום.</span>
                </h2>
                <p className="text-white/70 font-sans leading-relaxed">
                  אנחנו זמינים עבורכם לכל שאלה, בקשה או תכנון של חופשת החלומות. המענה שלנו אישי, מהיר ומדויק.
                </p>
              </div>

              <div className="relative z-10 space-y-10">
                <div className="flex gap-4">
                  <div className="mt-1 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-tal-sky" />
                  </div>
                  <div>
                    <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">טלפון ישיר ווסטסאפ</h4>
                    <p className="text-xl font-medium" dir="ltr">+972 50-000-0000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-tal-sky" />
                  </div>
                  <div>
                    <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">דוא&quot;ל הזמנות</h4>
                    <p className="text-xl font-medium">info@talfly.co.il</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-tal-sky" />
                  </div>
                  <div>
                    <h4 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">פגישות פיזיות</h4>
                    <p className="text-lg font-medium leading-snug">
                      אזור המרכז, מולדת<br />
                      <span className="text-tal-sky text-sm">בתיאום מראש בלבד</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Form */}
            <div className="lg:w-3/5 p-12 lg:p-16 relative">
              <h3 className="text-3xl font-serif font-bold text-tal-navy mb-2">שלחו לנו בקשה מיוחדת</h3>
              <p className="text-tal-navy/60 font-medium mb-10">נציג אישי יחזור אליכם בהקדם האפשרי עם כל הפרטים.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-tal-navy/80 block">שם מלא</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="הכניסו שם מלא"
                      className="w-full bg-tal-offwhite border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-tal-sky/50 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-tal-navy/80 block">טלפון נייד</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="05X-XXXXXXX"
                      className="w-full bg-tal-offwhite border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-tal-sky/50 transition-all font-medium text-left"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-tal-navy/80 block">דוא&quot;ל (אופציונלי)</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="email@example.com"
                      className="w-full bg-tal-offwhite border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-tal-sky/50 transition-all font-medium text-left"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold text-tal-navy/80 block">במה מתעניינים?</label>
                    <select 
                      id="interest" 
                      className="w-full bg-tal-offwhite border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-tal-sky/50 transition-all font-medium appearance-none"
                    >
                      <option>חופשת בטן-גב (ריזורטים)</option>
                      <option>טיול מאורגן מותאם אישית</option>
                      <option>טיסות בלבד</option>
                      <option>חופשה רומנטית / ירח דבש</option>
                      <option>אחר</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-tal-navy/80 block">ספרו לנו על החלום שלכם</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="הרכב נוסעים, תאריכים מועדפים, תקציב או כל פרט שיעזור לנו לדייק..."
                    className="w-full bg-tal-offwhite border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-tal-sky/50 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-tal-navy hover:bg-tal-sky text-white font-bold text-lg py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group mt-4"
                >
                  <Send size={20} className="rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform" />
                  <span>שליחת פרטים</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
