import Section from './Section';

export default function IndustriesSection() {
  return (
    <Section id="industries" backgroundColor="sky" className="py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Reliable compressed air solutions across diverse applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Manufacturing */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V9h4v12"/><path d="M15 21V3h4v18"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Manufacturing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Continuous-duty compressors for assembly lines, CNC, and pneumatic tools.</p>
          </div>

          {/* Automotive */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13l2-5h14l2 5"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Automotive</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Paint booths, tyre inflation, and workshop air tools.</p>
          </div>

          {/* Food & Beverage */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22V2"/><path d="M8 22V8"/><path d="M12 22V4"/><path d="M16 22v-6"/><path d="M20 22v-10"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Food & Beverage</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Oil-free air for packaging, bottling, and conveying.</p>
          </div>

          {/* Pharma */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 21V3h10v18"/><path d="M7 9h10"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Pharmaceutical</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Clean, dry air for cleanrooms and process equipment.</p>
          </div>

          {/* Electronics */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Electronics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Static-free, contaminant-free air for precision assembly.</p>
          </div>

          {/* Mining */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--brand-100)] text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l9-9 9 9-9 9-9-9z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Mining & Utilities</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Rugged systems for harsh environments and heavy-duty tools.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
