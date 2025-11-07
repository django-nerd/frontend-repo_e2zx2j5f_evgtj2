import { GraduationCap, BookOpen, Phone, Info, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Menorah Academy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
            <a href="#courses" className="hover:text-neutral-900 inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Courses
            </a>
            <a href="#about" className="hover:text-neutral-900 inline-flex items-center gap-2">
              <Info className="h-4 w-4" /> About
            </a>
            <a href="#contact" className="hover:text-neutral-900 inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900">
              <User className="h-4 w-4" /> Sign in
            </button>
            <a href="#courses" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-neutral-800">
              Browse Courses
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
