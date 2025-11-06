'use client';

import {
  HeartIcon,
  StarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

// Constants for maintainability
const SOCIAL_LINKS = [
  { href: 'https://facebook.com', icon: HeartIcon, label: 'Visit our Facebook page', hoverColor: 'hover:text-[var(--brand-600)]', focusColor: 'focus:ring-[var(--brand-600)]' },
  { href: 'https://instagram.com', icon: StarIcon, label: 'Visit our Instagram page', hoverColor: 'hover:text-[var(--brand-600)]', focusColor: 'focus:ring-[var(--brand-600)]' },
  { href: 'tel:+1234567890', icon: PhoneIcon, label: 'Call us', hoverColor: 'hover:text-[var(--brand-600)]', focusColor: 'focus:ring-[var(--brand-600)]' }
];

const LINK_CLASSES = "p-2 text-brand dark:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-md";

export default function PreNavbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-gray-200 dark:border-slate-700">
      <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded bg-white/70 dark:bg-slate-800/70 border border-sky-200 dark:border-slate-600 overflow-hidden">
                <img src="/file.svg" alt="File icon" className="h-8 w-8 lg:h-9 lg:w-9 object-contain" />
              </div>
              <div className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded bg-white/70 dark:bg-slate-800/70 border border-sky-200 dark:border-slate-600 overflow-hidden">
                <img src="/globe.svg" alt="Globe icon" className="h-8 w-8 lg:h-9 lg:w-9 object-contain" />
              </div>
            </div>

            <div className="flex-1 flex justify-center md:flex-none md:justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/logo.jpg"
                  alt="Company Logo"
                  width={160}
                  height={48}
                  priority
                  className="brand-logo object-contain transition-all duration-300"
                />

                <div className="mt-2 w-16 h-px bg-[var(--brand-200)] dark:bg-slate-600"></div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />

              {SOCIAL_LINKS.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${LINK_CLASSES} ${link.hoverColor} dark:${link.hoverColor} ${link.focusColor}`}
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
