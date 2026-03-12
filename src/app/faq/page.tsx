'use client';

import { PageHeader } from "@/components/ui/PageHeader";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="שאלות נפוצות" 
        subtitle="כל מה שצריך לדעת בדרך לחופשה הבאה שלכם איתנו."
        imageSrc="/images/hero_vacations.png"
        imageAlt="זוג משקיף לים"
      />
      
      {/* Resued from homepage components */}
      <FaqAccordion />

      <section className="bg-tal-offwhite py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
           <h3 className="text-2xl font-serif font-bold text-tal-navy mb-4">עדיין יש לכם שאלות?</h3>
           <p className="text-tal-navy/70 font-sans mb-8">
             הצוות שלנו כאן לענות לכם בשיחה אישית, בוואטסאפ או במייל.
           </p>
           <Link href="/contact" className="inline-block bg-tal-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-tal-sky transition-colors shadow-md">
             צרו איתנו קשר
           </Link>
        </div>
      </section>
    </div>
  );
}
