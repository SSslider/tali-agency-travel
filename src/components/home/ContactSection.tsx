'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      phone: formData.get('phone'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'אירעה שגיאה בשליחת הטופס.');
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      e.currentTarget.reset();
    } catch (err: any) {
      setErrorMsg(err.message || 'אירעה שגיאה. אנא נסו שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-tal-offwhite rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Information */}
            <div className="bg-tal-navy text-tal-offwhite p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-tal-sky/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-6">נשמח לדבר!</h2>
                <p className="text-tal-offwhite/80 font-sans text-lg mb-12 max-w-md">
                  המסע הבא שלכם מתחיל בשיחה. השאירו פרטים ונציג מטעמנו יחזור אליכם בהקדם לתכנון החופשה המושלמת.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-tal-sand/10 rounded-full flex items-center justify-center group-hover:bg-tal-sand/20 transition-colors">
                      <Phone size={24} className="text-tal-sand" />
                    </div>
                    <div>
                      <p className="text-sm text-tal-offwhite/60 font-sans mb-1">טלפון ישיר / וואטסאפ</p>
                      <p className="font-bold font-sans text-lg">050-0000000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-tal-sand/10 rounded-full flex items-center justify-center group-hover:bg-tal-sand/20 transition-colors">
                      <Mail size={24} className="text-tal-sand" />
                    </div>
                    <div>
                      <p className="text-sm text-tal-offwhite/60 font-sans mb-1">דוא״ל</p>
                      <a href="mailto:info@talfly.co.il" className="font-bold font-sans text-lg hover:text-tal-sky transition-colors">info@talfly.co.il</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-tal-sand/10 rounded-full flex items-center justify-center group-hover:bg-tal-sand/20 transition-colors">
                      <MapPin size={24} className="text-tal-sand" />
                    </div>
                    <div>
                      <p className="text-sm text-tal-offwhite/60 font-sans mb-1">פיזית (בתיאום מראש)</p>
                      <p className="font-bold font-sans text-lg">ישראל</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-tal-navy mb-8">השאירו פרטים</h3>
              
              {success ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center">
                  <h4 className="font-bold text-xl mb-2 flex justify-center items-center gap-2">
                    <Send size={24} /> הודעתך נשלחה!
                  </h4>
                  <p>תודה רבה! נציג טל fly יחזור אליכם בהקדם האפשרי.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="firstName" className="block text-sm font-bold text-tal-navy">שם מלא *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-tal-navy focus:ring-2 focus:ring-tal-sky focus:border-tal-sky transition-colors" placeholder="הקלידו שם מלא..." />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-sm font-bold text-tal-navy">טלפון נייד *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-tal-navy focus:ring-2 focus:ring-tal-sky focus:border-tal-sky transition-colors text-left" placeholder="05X-XXXXXXX" dir="ltr" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="topic" className="block text-sm font-bold text-tal-navy">נושא הפנייה</label>
                    <select id="topic" name="topic" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-tal-navy focus:ring-2 focus:ring-tal-sky focus:border-tal-sky transition-colors">
                      <option>תכנון חופשה חדשה</option>
                      <option>בירור לגבי חופשה קיימת</option>
                      <option>הצטרפות כסוכן</option>
                      <option>אחר</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-bold text-tal-navy">תוכן ההודעה</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-tal-navy focus:ring-2 focus:ring-tal-sky focus:border-tal-sky transition-colors resize-none" placeholder="נשמח לשמוע במה אפשר לעזור..."></textarea>
                  </div>
                  
                  {errorMsg && (
                    <div className="text-red-500 text-sm font-semibold text-center">
                      {errorMsg}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-tal-sky text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-tal-sky/90 transition-all shadow-md flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? 'שולח...' : 'שליחת הודעה'}
                  </button>
                  <p className="text-xs text-center text-tal-navy/50 font-sans mt-4">
                    בלחיצה על שליחה אני מאשר/ת את <a href="/terms" className="underline hover:text-tal-navy">תקנון האתר</a>.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
