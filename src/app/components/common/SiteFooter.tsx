import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
              Address
            </h4>
            <p className="mt-3 text-sm text-gray-600">
              Plot no. 356, Dhanwapur Road,
              <br /> Gurgaon, Haryana, India
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
              Contact
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          {/* Navigation & Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-800">
              Navigate
            </h4>
            <nav className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                About Us
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Products
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-600)] text-white transition hover:bg-[var(--brand-700)]"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white transition hover:bg-pink-700"
              >
                ig
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


