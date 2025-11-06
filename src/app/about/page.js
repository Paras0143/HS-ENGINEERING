import { Navbar } from "../components/index.js";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50 dark:bg-slate-900">
      <Navbar />
      

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, var(--brand-800), var(--brand-600))'}}>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Established Excellence in Air Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">About HS ENGINEERING</h1>
            <p className="text-xl md:text-2xl text-[var(--brand-100)]">Leading Air Compressor & Dryer Manufacturing in India</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Welcome to HS ENGINEERING</h3>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                HS ENGINEERING is a leading manufacturer of Air Compressors and Dryers in India. 
                We specialize in providing high-quality, reliable, and efficient compressed air solutions 
                for various industrial applications.
              </p>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
                With years of experience in the industry, we have built a reputation for excellence 
                in manufacturing and customer service. Our commitment to quality and innovation has 
                made us a trusted partner for businesses across India.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[var(--brand-600)] text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                  To provide innovative, reliable, and energy-efficient air compressor solutions 
                  that meet and exceed our customers' expectations while maintaining the highest 
                  standards of quality and service.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[var(--brand-600)] text-white rounded-full p-3 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                  To become India's most trusted and preferred manufacturer of air compressors 
                  and related equipment, recognized for innovation, quality, and exceptional 
                  customer satisfaction.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">What We Do</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-[var(--brand-100)] text-brand rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Manufacturing Excellence</h4>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">
                      We manufacture a wide range of air compressors including oil-free, screw, 
                      reciprocating, and vacuum pumps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--brand-100)] text-brand rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quality Assurance</h4>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">
                      Every product undergoes rigorous quality testing to ensure reliability 
                      and performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--brand-100)] text-brand rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Customer Support</h4>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">
                      We provide comprehensive support and maintenance services to ensure 
                      optimal performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[var(--brand-100)] text-brand rounded-lg p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Innovation</h4>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">
                      We continuously invest in research and development to bring you 
                      the latest technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Products */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Products</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Oil-Free Air Compressors</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Oil-free screw and claw compressors for clean air applications</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Screw Air Compressors</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Base mounted and tank mounted screw compressors</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Reciprocating Compressors</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Single and multi-stage reciprocating air compressors</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Vacuum Pumps</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Rotary vane and tank mounted vacuum pumps</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Direct Drive Compressors</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">Efficient direct drive air compressors</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Permanent Magnetic Motors</h4>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">High-efficiency permanent magnetic motors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
  );
}


