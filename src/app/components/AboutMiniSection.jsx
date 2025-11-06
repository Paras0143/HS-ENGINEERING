"use client";

export default function AboutMiniSection() {
  return (
    <section className="bg-white dark:bg-slate-800 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Left: Video */}
          <div className="w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-gray-200 dark:ring-slate-800">
            <div className="aspect-video w-full bg-black/10 dark:bg-white/5">
              <video
                className="h-full w-full object-cover"
                src="/VID-20240307-WA0008.mp4"
                controls
                muted
                playsInline
                autoPlay
                loop
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">About Us</h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              HS ENGINEERING is a leading manufacturer of Air Compressors and Dryers in India. We specialize in providing
              high-quality, reliable, and efficient compressed air solutions for various industrial applications.
            </p>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
              With years of experience in the industry, we have built a reputation for excellence in manufacturing and
              customer service. Our commitment to quality and innovation has made us a trusted partner for businesses
              across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
