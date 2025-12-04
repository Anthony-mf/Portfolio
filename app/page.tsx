import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}