"use client";

import React, { useState, useEffect } from "react";
import { X, QrCode, CheckCircle2 } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    companyName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load Razorpay Script
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  // Reset state when opened/closed
  useEffect(() => {
    if (!isOpen) {
      setSuccess(false);
      setError(null);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Validation Logic
  const isFormValid =
    formData.name.trim().length > 1 &&
    formData.phone.length >= 10 &&
    formData.email.includes("@") &&
    formData.profession.trim().length > 1 &&
    formData.companyName.trim().length > 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Strict Validation on typing
    if (name === "name") {
      // Only allow letters and spaces
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }
    if (name === "phone") {
      // Only allow numbers
      if (!/^\d*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setLoading(true);
    setError(null);

    try {
      // 1. Create an Order on the backend
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 100, // ₹100 Application Fee
          ...formData,
        }),
      });

      const order = await res.json();

      if (!res.ok) {
        throw new Error(order.details || order.error || "Failed to create order");
      }

      // 2. Open Razorpay Checkout Window
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Your Public Key
        amount: order.amount,
        currency: order.currency,
        name: "Inspire Excellence",
        description: "Application Fee for The Evolution Circle",
        order_id: order.id,
        handler: async function (response: any) {
          // Success callback - Send email notification
          // Success callback - Send email notification directly from browser to bypass Web3Forms server blocks
          const emailData = new FormData();
          emailData.append("access_key", "e65f40b5-1230-4d95-838c-b66543c6c2b1");
          emailData.append("subject", `New Circle Application: ${formData.name}`);
          emailData.append("from_name", "The Evolution Circle - Inspire Excellence");
          emailData.append("Applicant_Name", formData.name);
          emailData.append("Phone_Number", formData.phone);
          emailData.append("Email_Address", formData.email);
          emailData.append("Profession", formData.profession);
          emailData.append("Company_Name", formData.companyName);
          emailData.append("Payment_Method", "Razorpay Gateway");
          emailData.append("Payment_ID", response.razorpay_payment_id);

          try {
            await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: emailData
            });
          } catch (emailErr) {
            console.error("Email send failed, but payment succeeded", emailErr);
          }
          setSuccess(true);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#1A3B2F",
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.on("payment.failed", function (response: any) {
        setError(`Payment failed: ${response.error.description}`);
      });

      razorpayInstance.open();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#EDE7DB] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white text-[#1A3B2F] hover:bg-gray-100 rounded-full shadow-md transition-all border border-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="w-full p-10 flex flex-col items-center justify-center text-center bg-white/40">
            <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="font-serif text-[24px] font-bold text-[#1A3B2F] mb-2">
              Application Received
            </h3>
            <p className="text-[#2D3D35] mb-6">
              Thank you for applying. We have received your details and payment information.
            </p>
            <button
              onClick={onClose}
              className="bg-[#0E2823] text-[#C5A44E] font-serif font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-[#133731] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            {/* Main Form */}
            <div className="w-full p-6 md:p-8 bg-white/40">
              <h3 className="font-serif text-[18px] md:text-[20px] font-bold uppercase tracking-widest text-[#1A3B2F] mb-6">
                Apply for The Circle
              </h3>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleRazorpayPayment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#1A3B2F] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A6B32] transition-all text-[#2D3D35]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#1A3B2F] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A6B32] transition-all text-[#2D3D35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#1A3B2F] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A6B32] transition-all text-[#2D3D35]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#1A3B2F] mb-1">
                      Profession
                    </label>
                    <input
                      type="text"
                      name="profession"
                      required
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A6B32] transition-all text-[#2D3D35]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#1A3B2F] mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1A3B2F]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#8A6B32] transition-all text-[#2D3D35]"
                    />
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    disabled={loading || !isFormValid}
                    className="w-full bg-[#0E2823] text-[#C5A44E] font-serif font-bold uppercase tracking-widest py-3.5 rounded-lg hover:bg-[#133731] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? "Processing..." : "Pay ₹100 via Razorpay"}
                  </button>

                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
