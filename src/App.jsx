import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
