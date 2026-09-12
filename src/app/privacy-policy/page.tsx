import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#EDE7DB] text-[#1A3B2F] py-20 px-6 sm:px-10 lg:px-16 selection:bg-[#C5A44E] selection:text-[#1A3B2F]">
      <div className="max-w-4xl mx-auto bg-[#F5F0E6] p-8 md:p-12 rounded-3xl border border-[#1A3B2F]/10 shadow-xl">
        <Link href="/" className="inline-flex items-center text-[#8A6B32] hover:text-[#1A3B2F] mb-8 transition-colors font-medium text-sm tracking-widest uppercase">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-10 text-[#1A3B2F]">Privacy Policy</h1>
        
        <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-[#2D3D35]">
          <section>
            <p className="font-medium text-[#1A3B2F] mb-4">Privacy Policy for Inspire Excellence</p>
            <p>This Privacy Policy outlines the practices of Inspire Excellence in collecting, using, maintaining, and disclosing information obtained from users (referred to as &ldquo;Users&rdquo;) of the https://inspirexcellence.org/ website (&ldquo;Site&rdquo;). It is applicable to all products and services provided by Inspire Excellence.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Personal Identification Information</h2>
            <p>We may gather personal identification information from Users through various means, including but not limited to when Users visit our site, register, place orders, or engage in other activities and resources offered on our Site. The information collected may include names, email addresses, mailing addresses, phone numbers, and credit card details. Users have the option to visit our Site anonymously. We only collect personal identification information if Users voluntarily submit such details. Users can choose not to provide personal identification information, though it may limit their participation in certain Site-related activities.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Non-Personal Identification Information</h2>
            <p>Whenever Users interact with our Site, we may collect non-personal identification information, such as browser names, computer types, technical details about Users&apos; connections to our Site (like operating systems and Internet service providers), and similar information.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Web Browser Cookies</h2>
            <p>Our Site may use &ldquo;cookies&rdquo; to enhance User experience. These are placed on the hard drive for record-keeping and tracking purposes. Users can adjust their web browser settings to refuse cookies, but this may affect certain functions on the Site.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">How We Use Collected Information</h2>
            <p>Inspire Excellence may collect and use Users&apos; personal information for specific purposes, including processing payments and sending periodic emails related to orders and inquiries. We employ data collection, storage, and processing practices with security measures to protect against unauthorized access or disclosure.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Sharing Your Personal Information</h2>
            <p>We do not sell, trade, or rent Users&apos; personal identification information. Generic aggregated demographic information may be shared with business partners, trusted affiliates, and advertisers for outlined purposes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Changes to This Privacy Policy</h2>
            <p>Inspire Excellence reserves the right to update this privacy policy at any time. Users will be notified of changes via email. It is Users&apos; responsibility to periodically review this policy for modifications.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Your Acceptance of These Terms</h2>
            <p>By using this Site, you indicate your acceptance of this policy. If you disagree, please refrain from using our Site. Continued use following policy changes will be deemed acceptance of those changes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold mb-4 text-[#8A6B32]">Contact Us</h2>
            <p>For questions or suggestions about our Privacy Policy, feel free to contact us.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
