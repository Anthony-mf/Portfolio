import Navbar from '@/components/Navbar';
import Strengths from '@/components/Strenghts';
import Footer from '@/components/Footer';

export default function StrenghtsPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Strengths />
            <Footer />
        </div>
    );
}
