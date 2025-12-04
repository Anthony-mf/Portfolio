import Navbar from '@/components/Navbar';
import Experiences from '@/components/Experiences';
import Footer from '@/components/Footer';

export default function ExperiencesPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Experiences />
            <Footer />
        </div>
    );
}
