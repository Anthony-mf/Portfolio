import Navbar from '@/components/Navbar';
import Jobs from '@/components/Jobs';
import Footer from '@/components/Footer';

export default function JobsPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
            <Navbar />
            <Jobs />
            <Footer />
        </div>
    );
}
