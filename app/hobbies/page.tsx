import Navbar from '@/components/Navbar';
import Hobbies from '@/components/Hobbies';
import Footer from '@/components/Footer';

export default function HobbiesPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Hobbies />
            <Footer />
        </div>
    );
}
