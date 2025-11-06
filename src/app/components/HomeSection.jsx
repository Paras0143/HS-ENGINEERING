"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Rotary Screw Compressors',
      image: '/product1.jpg',
      description: 'Industrial-grade performance',
    },
    {
      id: 2,
      name: 'Refrigerated Air Dryers',
      image: '/product2.jpg',
      description: 'Moisture-free compressed air',
    },
    {
      id: 3,
      name: 'Air Filtration Systems',
      image: '/product3.jpg',
      description: 'Clean air, every time',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center brand-hero dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />
      
      <div className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-2 text-sm font-medium text-brand">
                <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-400)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-500)]"></span>
                </span>
                Trusted by industries across India
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
                Premium Air Compressors
                <span className="block text-brand mt-2">
                  Built for Performance
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Leading manufacturer of industrial air compressors and dryers in India. 
                Delivering reliable, energy-efficient solutions for your compressed air needs.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Made in India</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-on-brand bg-brand rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
                >
                  View Products
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand bg-white dark:bg-slate-800 border-2 border-[var(--brand-600)] rounded-lg hover:bg-[var(--brand-50)] dark:hover:bg-slate-700 transition-all"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200 dark:ring-slate-700">
                {/* Sliding Images */}
                <div 
                  className="flex h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {products.map((product) => (
                    <div key={product.id} className="min-w-full h-full flex-shrink-0 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={product.id === 1}
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-base text-white/90">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-full p-3 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-full p-3 shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
