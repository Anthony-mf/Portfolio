import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <About />
            <Footer />
        </div>
    );
}
