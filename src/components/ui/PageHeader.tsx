'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export function PageHeader({ title, subtitle, imageSrc, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-tal-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-tal-offwhite via-transparent to-tal-navy/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-sans font-medium drop-shadow-sm">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
