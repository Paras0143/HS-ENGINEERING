import Section from './Section';

export default function QualitySection() {
  return (
    <Section id="quality" backgroundColor="white" className="py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            Our Quality Promise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Built for reliability, verified by rigorous testing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">What we guarantee</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500"/> ISO-aligned processes and documentation</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500"/> 100% performance and leakage tests</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500"/> Genuine components and spares</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500"/> Energy-efficient, low-maintenance design</li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Certifications & checks</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-500)]"/> Pressure and flow calibration</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-500)]"/> Electrical safety and insulation tests</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-500)]"/> Noise and vibration compliance</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand-500)]"/> Final inspection with traceable records</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
