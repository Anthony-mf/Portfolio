import Navbar from '@/components/Navbar';
import Internship from '@/components/Internship';
import Footer from '@/components/Footer';

export default function InternshipPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Internship />
            <Footer />
        </div>
    );
}
