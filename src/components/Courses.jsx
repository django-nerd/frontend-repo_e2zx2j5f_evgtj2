import { Star, Clock, Layers } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    level: 'Beginner',
    duration: '12 weeks',
    rating: 4.8,
    color: 'from-amber-400 to-rose-500',
  },
  {
    id: 2,
    title: 'Data Science with Python',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.7,
    color: 'from-sky-400 to-indigo-500',
  },
  {
    id: 3,
    title: 'UI/UX Design Foundations',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.6,
    color: 'from-emerald-400 to-teal-500',
  },
];

function CourseCard({ title, level, duration, rating, color }) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className={`h-2 w-full rounded-md bg-gradient-to-r ${color} mb-4`} />
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <div className="mt-2 flex items-center gap-3 text-sm text-neutral-600">
        <span className="inline-flex items-center gap-1"><Layers className="h-4 w-4" /> {level}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {duration}</span>
        <span className="ml-auto inline-flex items-center gap-1 text-amber-600"><Star className="h-4 w-4 fill-amber-500" /> {rating}</span>
      </div>
      <button className="mt-4 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800">
        View syllabus
      </button>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Featured Programs</h2>
          <p className="mt-2 text-neutral-700">Curated, career-focused learning paths designed by industry experts.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
