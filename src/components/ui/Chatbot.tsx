'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

const KNOWLEDGE_BASE = [
  {
    keywords: ['שלום', 'היי', 'אהלן'],
    response: 'שלום! אני נעה, העוזרת הווירטואלית של טל fly. איך אוכל לעזור לכם לתכנן את החופשה הבאה שלכם?'
  },
  {
    keywords: ['טיסות', 'טיסה'],
    response: 'מחלקת הטיסות שלנו מטפלת בהכל. אנו עובדים עם כל חברות התעופה. נוכל לבנות עבורכם הצעה מסודרת דרך הוואטסאפ: 050-0000000.'
  },
  {
    keywords: ['מלונות', 'מלון', 'ריזורט', 'ריזורטים'],
    response: 'בחירת המלון היא קריטית להצלחת החופשה. אצלנו תמצאו דילים למלונות בוטיק וריזורטים מהשורה הראשונה. ספרו לנו לאן תרצו לטוס!'
  },
  {
    keywords: ['טיולים מאורגנים', 'טיול מאורגן'],
    response: 'מעדיפים שמישהו אחר ידאג להכל? יש לנו מגוון טיולים מאורגנים לגילאים ולקהלים שונים, כולל פנסיונרים ומשפחות. רוצים לקבל סילבוס לדוגמה?'
  },
  {
    keywords: ['רכב', 'השכרת רכב', 'נהיגה'],
    response: 'אנו מטפלים בכל נושא השכרת הרכב בחו״ל, כולל ביטוחים מורחבים מלאים, כדי שתשבו מאחורי ההגה בראש שקט. לאיזה יעד תצטרכו רכב?'
  },
  {
    keywords: ['משפחות', 'משפחה', 'ילדים'],
    response: 'חופשה משפחתית דורשת תכנון מוקפד! אנו מציעים טיולי משפחות הכוללים אטרקציות מותאמות ולינה ידידותית לילדים. נבנה לכם מסלול אישי.'
  },
  {
    keywords: ['זוגות', 'זוג', 'ירח דבש', 'רומנטי'],
    response: 'מחפשים חופשה זוגית רומנטית? נוכל להציע לכם יעדים אקזוטיים, צ\'לוט וריזורטים למבוגרים בלבד, לחוויה שקטה ומפנקת.'
  },
  {
    keywords: ['תקציב', 'זול', 'מחיר'],
    response: 'אנו בונים חופשות בהתאמה אישית לטווח רחב של תקציבים. כדי לקבל הערכת מחיר מדויקת, שלחו לנו הודעה ונבנה לכם הצעת מחיר מסודרת.'
  },
  {
    keywords: ['צור קשר', 'איך לפנות', 'טלפון', 'וואטסאפ', 'וידאו'],
    response: 'הכי מומלץ ליצור קשר ישירות דרך הוואטסאפ שלנו! או פשוט להשאיר פרטים בטופס באתר ונחזור אליכם בהקדם.'
  }
];

const DEFAULT_RESPONSE = 'תודה על ההודעה! כדי לתת לכם את השירות הטוב והאישי ביותר, מומלץ במידה ותרצו לקבל הצעת מחיר מסודרת על חופשה, טיסה או מלון - לפנות אלינו לוואטסאפ, או להשאיר פרטים ונחזור אליכם.';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'שלום! אני נעה, העוזרת הווירטואלית של טל fly. איך אוכל לעזור לכם לתכנן את החופשה הבאה שלכם?'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Process Response
    setTimeout(() => {
      let botResponse = DEFAULT_RESPONSE;
      const lowerInput = userMessage.text.toLowerCase();

      // Simple keyword matching for RAG alternative
      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some((kw) => lowerInput.includes(kw))) {
          botResponse = item.response;
          break;
        }
      }

      const botMessage: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-tal-navy text-tal-offwhite rounded-full shadow-2xl flex items-center justify-center hover:bg-tal-navy/90 transition-transform hover:scale-105"
          aria-label="פתח צ'אט"
        >
          <MessageSquare size={28} />
        </button>
      ) : (
        <div className="w-80 md:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-tal-navy text-tal-offwhite p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-tal-sky/20 p-2 rounded-full">
                <Bot size={24} className="text-tal-sky" />
              </div>
              <div className="mr-3">
                <h3 className="font-bold font-serif text-lg">טל fly אונליין</h3>
                <p className="text-xs opacity-80">מענה אוטומטי מהיר</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-tal-offwhite/80 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-tal-navy text-tal-offwhite rounded-br-sm'
                      : 'bg-white text-tal-navy border border-gray-100 shadow-sm rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="הקלד/י כאן..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full pr-4 pl-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-tal-sky/50 focus:border-tal-sky/50 text-tal-navy"
                dir="rtl"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute left-2 text-white bg-tal-sky p-2 rounded-full hover:bg-tal-sky/80 disabled:opacity-50 disabled:hover:bg-tal-sky transition-colors"
              >
                <Send size={18} className="rtl:rotate-180" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
