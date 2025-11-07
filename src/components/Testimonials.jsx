import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Leah Cohen',
    role: 'Product Designer',
    quote:
      'Menorah Academy transformed how I learn. The mentorship and projects helped me build a portfolio I am proud of.',
  },
  {
    name: 'David Levi',
    role: 'Full-Stack Developer',
    quote:
      'The structured paths and community support made it easy to stay consistent and land my first dev role.',
  },
  {
    name: 'Sarah Gold',
    role: 'Data Analyst',
    quote:
      'Clear explanations, practical labs, and great feedback. I felt supported at every step.',
  },
];

function TestimonialCard({ name, role, quote }) {
  return (
    <div className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <Quote className="absolute -top-3 -left-3 h-8 w-8 text-amber-400" />
      <p className="text-neutral-800">“{quote}”</p>
      <div className="mt-4">
        <p className="font-semibold text-neutral-900">{name}</p>
        <p className="text-sm text-neutral-600">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Loved by learners</h2>
          <p className="mt-2 text-neutral-700">Join thousands of students advancing their careers every day.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
