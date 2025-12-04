'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGamepad, FaPalette, FaMusic, FaCamera, FaDumbbell, FaBook } from 'react-icons/fa';

const hobbies = [
    {
        icon: FaPalette,
        titleKey: 'hobbies.art3d.title',
        descriptionKey: 'hobbies.art3d.description',
        color: '#FF6B6B',
    },
    {
        icon: FaGamepad,
        titleKey: 'hobbies.gaming.title',
        descriptionKey: 'hobbies.gaming.description',
        color: '#4ECDC4',
    },
    {
        icon: FaMusic,
        titleKey: 'hobbies.music.title',
        descriptionKey: 'hobbies.music.description',
        color: '#95E1D3',
    },
    {
        icon: FaCamera,
        titleKey: 'hobbies.photography.title',
        descriptionKey: 'hobbies.photography.description',
        color: '#F38181',
    },
    {
        icon: FaDumbbell,
        titleKey: 'hobbies.fitness.title',
        descriptionKey: 'hobbies.fitness.description',
        color: '#AA96DA',
    },
    {
        icon: FaBook,
        titleKey: 'hobbies.reading.title',
        descriptionKey: 'hobbies.reading.description',
        color: '#FCBAD3',
    },
];

export default function Hobbies() {
    const { t } = useLanguage();

    return (
        <section id="hobbies" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('hobbies.pageTitle')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {t('hobbies.intro')}
                    </p>
                </div>

                {/* Hobbies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hobbies.map((hobby, idx) => {
                        const Icon = hobby.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${hobby.color}20`, border: `2px solid ${hobby.color}40` }}
                                    >
                                        <Icon className="text-4xl" style={{ color: hobby.color }} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{t(hobby.titleKey)}</h3>
                                    <p className="text-gray-400 leading-relaxed">{t(hobby.descriptionKey)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
