"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What happens to the ₹100 application fee?",
      answer: "If you are selected for the Circle, this ₹100 fee will be fully adjusted and deducted from your final package. If you are not selected, the fee is 100% refunded immediately."
    },
    {
      question: "Where is the event taking place?",
      answer: "The event is taking place at a premium, highly curated venue in Kolkata. The exact location details will be shared exclusively with selected participants upon approval."
    },
    {
      question: "Who is the Evolution Circle for?",
      answer: "It is designed exclusively for Coaches, Consultants, Trainers, Healers, Professional Practitioners, Solopreneurs, and Small Business Owners who are looking for high-level networking, deep reflection, and transformative business growth in a confidential setting."
    },
    {
      question: "What if I am not selected for this cohort?",
      answer: "We curate our circles very carefully to ensure maximum synergy and value for all participants. If you are not selected this time, your ₹100 application fee will be fully refunded, and you will be prioritized for our upcoming events."
    },
    {
      question: "What if I have other questions?",
      answer: "If you have any further questions before applying, please feel free to reach out to our team directly. We are always happy to help you determine if this Circle is the right fit for your current journey."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#EDE7DB]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[32px] md:text-[42px] font-medium text-[#1A3B2F] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-[2px] w-[60px] bg-[#8A6B32] mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-[#1A3B2F]/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/60 shadow-md' : 'bg-white/30 hover:bg-white/40'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className="font-serif text-[16px] md:text-[18px] font-bold text-[#1A3B2F] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 text-[#8A6B32]">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 md:p-6 pt-0 text-[14px] md:text-[15px] text-[#2D3D35] leading-relaxed border-t border-[#1A3B2F]/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
