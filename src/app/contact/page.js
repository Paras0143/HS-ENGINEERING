'use client';
import { useState } from 'react';
import { Navbar } from "../components/index.js";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    country: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    // Simulate a short network delay and success state (no backend)
    await new Promise((r) => setTimeout(r, 600));
    setStatus("Thanks! Your enquiry has been received. We'll get back to you soon.");
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      country: "",
      product: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-slate-900">
      <Navbar />
      
      {/* Hero Header */}
      <header className="relative text-white py-16 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, var(--brand-800), var(--brand-600))'}}>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              We're here to help
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-[color:rgba(255,255,255,0.85)]">Have questions? We'd love to hear from you.</p>
          </div>
        </div>
      </header>
      
      <section className="flex items-center justify-center bg-sky-50 dark:bg-slate-900 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 px-4 max-w-6xl mx-auto w-full">
          {/* Left Section */}
          <div className="w-full lg:w-[420px] bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex-shrink-0 hover:shadow-3xl transition-shadow duration-300">
            <h1 className="mb-6 text-3xl text-brand text-center font-bold tracking-tight">
              HS ENGINEERING
            </h1>

            {/* Address */}
            <div className="mb-5 group">
              <h3 className="mb-2 text-lg font-semibold text-brand flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
                Ashirward Apartments, FL No-373, A-Block, Kondli, Mayur Vihar, Phase-3, New Delhi - 110096
              </p>
            </div>

            {/* Mobile */}
            <div className="mb-5 group">
              <h3 className="mb-2 text-lg font-semibold text-brand flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Mobile
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 pl-7 font-medium">+91 8595155463</p>
            </div>

            {/* Email */}
            <div className="group">
              <h3 className="mb-2 text-lg font-semibold text-brand flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 pl-7 font-medium break-all">hsengineering1905@gmail.com</p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full lg:flex-1 flex-shrink-0 hover:shadow-3xl transition-shadow duration-300">
            <h1 className="mb-6 text-center text-brand text-3xl font-bold tracking-tight">
              Enquire Now
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
              </div>

              {/* Row 2: Phone + Company + City */}
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  placeholder="Company"
                  onChange={handleChange}
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  placeholder="City"
                  onChange={handleChange}
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
              </div>

              {/* Row 3: Country + Product */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  placeholder="Country"
                  onChange={handleChange}
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                />
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none"
                >
                  <option value="">Select Product</option>
                  <option value="Product A">Product A</option>
                  <option value="Product B">Product B</option>
                  <option value="Product C">Product C</option>
                  <option value="Product D">Product D</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <textarea
                name="message"
                value={form.message}
                placeholder="Message"
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-3 text-base border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-[var(--brand-600)] focus:border-[var(--brand-600)] transition-all duration-200 outline-none resize-none"
              />

              {/* Button centered */}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-[var(--brand-600)] hover:bg-[var(--brand-700)] text-white px-12 py-3.5 text-base font-semibold rounded-lg cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>

            {status && (
              <p className="mt-6 text-center text-base font-medium text-slate-900 dark:text-slate-100 bg-[var(--brand-50)]/80 dark:bg-slate-800 p-3 rounded-lg">
                {status}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
