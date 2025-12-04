import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Projects />
            <Footer />
        </div>
    );
}
