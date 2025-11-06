"use client";
import Section from './Section';
import Link from 'next/link';
import { products as allProducts } from './products/data';
import { ProductCard } from './products/ProductCard';

export default function ProductsSection() {
  const top3 = allProducts.slice(0, 3);

  return (
    <Section id="products" backgroundColor="white" className="py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore our top air solutions engineered for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top3.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.shortDescription}
              imageUrl={p.imageUrl}
              onReadMore={() => {
                window.location.href = '/products';
              }}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-[var(--brand-600)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--brand-700)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2"
          >
            Show more
          </Link>
        </div>
      </div>
    </Section>
  );
}
