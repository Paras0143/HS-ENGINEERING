"use client";
import React, { useMemo, useState } from "react";
import { SectionHeader } from "../components/common/SectionHeader";
import { ProductCard } from "../components/products/ProductCard";
import { ProductModal } from "../components/products/ProductModal";
import { PreNavbar, Navbar } from "../components";
import { products as allProducts, type Product } from "../components/products/data";

export default function ProductsPage() {
  const products: Product[] = allProducts;

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-dvh flex flex-col bg-sky-50 text-gray-900 dark:bg-slate-900 dark:text-slate-50">
      <PreNavbar />
      <Navbar />

      {/* Header */}
      <header className="relative text-white py-16 overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, var(--brand-800), var(--brand-600))'}}>
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Complete Range of Industrial Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Our Products</h1>
            <p className="text-lg sm:text-xl text-[color:rgba(255,255,255,0.85)]">Air Compressors & Dryers, India</p>
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="mx-auto w-full max-w-7xl grow px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.shortDescription}
              imageUrl={product.imageUrl}
              onReadMore={() => setActiveProduct(product)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      <ProductModal
        isOpen={Boolean(activeProduct)}
        title={activeProduct?.title ?? ""}
        description={activeProduct?.fullDescription ?? ""}
        imageUrl={activeProduct?.imageUrl ?? ""}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}


