"use client";
import React from "react";
type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  onReadMore: () => void;
};

export function ProductCard({ imageUrl, title, description, onReadMore }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="relative h-48 w-full bg-gray-100 overflow-hidden dark:bg-slate-700">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="flex grow flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{title}</h3>
        <p className="line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-300">{description}</p>
        <div className="mt-auto">
          <button
            type="button"
            onClick={onReadMore}
            className="inline-flex items-center justify-center rounded-md bg-[var(--brand-600)] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--brand-700)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}


