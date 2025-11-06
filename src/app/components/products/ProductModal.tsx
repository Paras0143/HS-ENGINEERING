"use client";
import React, { useEffect } from "react";

type ProductModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  imageUrl: string;
  onClose: () => void;
};

export function ProductModal({ isOpen, title, description, imageUrl, onClose }: ProductModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal content */}
      <div className="relative z-10 mx-4 w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-slate-900">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-200 p-4 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-50">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <div className="relative h-64 w-full bg-gray-100 sm:h-full overflow-hidden dark:bg-slate-800">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="p-5">
            <p className="text-gray-700 leading-7 dark:text-slate-300">{description}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-200 p-4 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


