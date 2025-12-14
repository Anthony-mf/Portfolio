'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const internships = [
    {
        id: 1,
        titleKey: 'internship.title',
        companyKey: 'internship.company',
        periodKey: 'internship.period',
        locationKey: 'internship.location',
        descriptionKey: 'internship.description',
        gradient: 'from-blue-500 to-cyan-500',
        accentColor: '#3B82F6',
    },
    {
        id: 2,
        titleKey: 'apprentice.title',
        companyKey: 'apprentice.company',
        periodKey: 'apprentice.period',
        locationKey: 'apprentice.location',
        descriptionKey: 'apprentice.description',
        gradient: 'from-purple-500 to-pink-500',
        accentColor: '#A855F7',
    },
];

export default function Internship() {
    const { t } = useLanguage();

    return (
        <section id="internship" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('internships.pageTitle')}
                    </h1>
                </div>

                {/* Internship Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {internships.map((internship) => (
                        <div
                            key={internship.id}
                            className="group relative bg-gradient-to-br from-gray-900/70 to-black/60 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                            style={{ border: `2px solid ${internship.accentColor}20` }}
                        >
                            {/* Gradient Background Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${internship.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Badge */}
                                <div
                                    className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${internship.gradient} mb-6 shadow-lg`}
                                    style={{ width: '64px', height: '64px' }}
                                >
                                    <FaGraduationCap className="text-3xl text-white" />
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: internship.accentColor }}>
                                        {t(internship.titleKey)}
                                    </p>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {t(internship.companyKey)}
                                    </h3>
                                </div>

                                {/* Info Pills */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                                        <FaMapMarkerAlt className="text-sm" style={{ color: internship.accentColor }} />
                                        <span className="text-sm text-gray-300">{t(internship.locationKey)}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                                        <FaCalendarAlt className="text-sm" style={{ color: internship.accentColor }} />
                                        <span className="text-sm text-gray-300">{t(internship.periodKey)}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {t(internship.descriptionKey)}
                                </p>

                                {/* Decorative Line */}
                                <div
                                    className={`h-1 rounded-full bg-gradient-to-r ${internship.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}