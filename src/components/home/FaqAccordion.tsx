'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'האם השירות שלכם כרוך בעמלה נוספת?',
    answer: 'לא, המחירים שלנו שקופים ולרוב זהים או זולים יותר מהזמנה עצמאית באתרי האונליין, בזכות ההסכמים שלנו מול סיטונאי התיירות וחברות התעופה.'
  },
  {
    question: 'איך מתבצע תהליך ההזמנה?',
    answer: 'לאחר ששוחחנו והבנו בדיוק מה הצורך שלכם, אנו בונים לכם תיק הצעה מסודר. ברגע שתרצו לאשר אותו, נבצע עבורכם התאמות סופיות ונשלים את ההזמנה מול הספקים השונים.'
  },
  {
    question: 'מה קורה אם הטיסה מתבטלת או מתעכבת?',
    answer: 'זה היתרון הגדול בעבודה מול סוכנות תיירות פרטית. אתם מתקשרים אלינו, ואנחנו דואגים לכל הבירוקרטיה, למציאת טיסה חלופית ולשמירה על הזכויות שלכם מול חברת התעופה.'
  },
  {
    question: 'האם אתם עושים גם טיולים בארץ?',
    answer: 'ההתמחות המרכזית שלנו היא חופשות ויעדים בחו״ל, עם זאת לבקשות מיוחדות של קבוצות וחברות, אנחנו מפיקים גם חבילות נופש בארץ. תמיד מוזמנים לשאול אותנו בוואטסאפ.'
  },
  {
    question: 'האם אתם מציעים ביטוח נסיעות?',
    answer: 'בהחלט! אנו עובדים עם חברות הביטוח המובילות ודואגים להתאים לכם ביטוח נסיעות מדויק שמכסה בדיוק את הפעילויות המתוכננות (סקי, אקסטרים, מצב רפואי וכו\').'
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-tal-navy mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-tal-navy/70 text-lg font-sans">
            כל מה שרציתם לדעת על השירות שלנו לפני שממריאים.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === idx ? 'border-tal-sand bg-tal-offwhite/50' : 'border-gray-100 hover:border-gray-300 bg-white'
              }`}
            >
              <button
                onClick={() => toggleOpen(idx)}
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-tal-sky rounded-2xl"
                aria-expanded={openIndex === idx}
              >
                <span className="font-bold font-serif text-lg text-tal-navy pr-4 border-r-4 border-transparent data-[active=true]:border-tal-sky" data-active={openIndex === idx}>
                  {faq.question}
                </span>
                <span className="text-tal-sky flex-shrink-0 mr-4">
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 font-sans text-tal-navy/80 leading-relaxed border-t border-tal-sand/20 mx-6 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
