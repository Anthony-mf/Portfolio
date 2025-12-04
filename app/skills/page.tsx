import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function SkillsPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Skills />
            <Footer />
        </div>
    );
}
