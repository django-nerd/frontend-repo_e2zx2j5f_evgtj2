import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6T1JqgNQxLr4l2FQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-200">New • Fall 2025 Cohort</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900">
              Illuminate your learning journey
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Menorah Academy blends expert-led courses with immersive practice to help you master in-demand skills. Learn at your pace with guided projects, community, and mentorship.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#courses" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-neutral-800">Explore Courses</a>
              <a href="#about" className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50">How it works</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white" />
    </section>
  );
}
