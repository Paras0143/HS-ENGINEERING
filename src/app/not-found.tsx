export default function NotFoundPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <p className="text-sm font-semibold text-brand">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Sorry, we couldn’t find the page you’re looking for.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-brand text-on-brand rounded-lg">Go back home</a>
      </div>
    </main>
  );
}


