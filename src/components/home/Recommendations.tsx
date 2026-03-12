'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'משפחת לוי',
    type: 'חופשה משפחתית ביער השחור',
    text: 'טלי פשוט מדהימה! תפרה לנו חופשה מאפס עם התחשבות בכל פרט קטן. הילדים נהנו בטירוף והכל תיקתק כמו שעון. לא נטוס בלעדיה!'
  },
  {
    id: 2,
    name: 'דנה ועומר',
    type: 'ירח דבש בתאילנד',
    text: 'חיפשנו משהו מיוחד אבל לא מנקר עיניים. טלי הבינה אותנו בדיוק והמליצה על ריזורט בוטיק שקט באי קו פנגן שהיה פשוט גן עדן. איזה כיף שיש על מי לסמוך.'
  },
  {
    id: 3,
    name: 'רמי קליין',
    type: 'טיול עסקים לונדון-פריז',
    text: 'כשזמן שווה כסף, אין תחליף לשירות כזה. הטיסות שוריינו, המלונות היו במיקומים הכי אסטרטגיים. שירות ברמה אחרת.'
  }
];

export function Recommendations() {
  return (
    <section className="py-24 bg-tal-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
            מה אומרים העולים למטוס?
          </h2>
          <div className="w-24 h-1 bg-tal-sky mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
            >
              <Quote className="absolute top-6 left-6 text-tal-sand/30" size={48} />
              
              <div className="mb-6 relative z-10 flex-1">
                <p className="text-tal-navy/80 font-sans text-lg leading-relaxed italic">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6 relative z-10">
                <h4 className="font-bold text-tal-navy font-serif text-xl">
                  {review.name}
                </h4>
                <p className="text-tal-sky font-medium text-sm">
                  {review.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
