export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-neutral-900">Menorah Academy</h3>
            <p className="mt-2 text-sm text-neutral-600">Illuminate minds. Empower futures.</p>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800">Programs</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800">Get in touch</h4>
            <p className="mt-2 text-sm text-neutral-600">hello@menorah.academy</p>
            <p className="text-sm text-neutral-600">Jerusalem • Tel Aviv • Remote</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Menorah Academy. All rights reserved.</div>
      </div>
    </footer>
  );
}
