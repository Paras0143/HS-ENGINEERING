"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  CubeIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "/", icon: HomeIcon, isRoute: true },
  { name: "Products", href: "#products", icon: CubeIcon },
  { name: "Industries", href: "#industries", icon: BuildingOfficeIcon },
  { name: "Quality", href: "#quality", icon: CheckBadgeIcon },
  { name: "ABOUT US", href: "/about", icon: InformationCircleIcon, isRoute: true },
  { name: "CONTACT US", href: "/contact", icon: PhoneIcon, isRoute: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const sections = navigation.map((item) => item.href.slice(1));

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActiveSection(hash);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.slice(1);
    setActiveSection(targetId);
  };

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/70 border-b border-gray-200 dark:border-slate-700"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Company Logo"
              width={160}
              height={48}
              priority
              className="brand-logo object-contain transition-all duration-300 rounded-md"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              const Icon = item.icon;
              const LinkComponent = item.isRoute ? Link : 'a';
              return (
                <LinkComponent
                  key={item.name}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-full ${
                    isActive
                      ? "text-brand bg-brand-tint"
                      : "text-slate-700 hover:text-brand hover:bg-brand-tint dark:text-slate-300"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.name}
                </LinkComponent>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-slate-700 hover:text-brand dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="mb-0 border-t border-gray-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                const Icon = item.icon;
                const LinkComponent = item.isRoute ? Link : 'a';
                return (
                  <LinkComponent
                    key={item.name}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`flex items-center px-3 py-3 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
                      isActive
                        ? "text-brand bg-brand-tint"
                        : "text-slate-700 hover:text-brand hover:bg-brand-tint dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="h-5 w-5 mr-3" aria-hidden="true" />
                    {item.name}
                  </LinkComponent>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
