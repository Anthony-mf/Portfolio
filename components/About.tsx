'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGraduationCap, FaMapMarkerAlt, FaHeart, FaCalendar } from 'react-icons/fa';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('about.title')}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        {t('about.intro')}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Personal Info Card */}
                    <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            {t('about.personalInfo.title')}
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaCalendar className="text-2xl text-orange-400" />
                                <div>
                                    <p className="text-sm text-gray-400">{t('about.personalInfo.ageLabel')}</p>
                                    <p className="text-lg font-semibold">{t('about.personalInfo.age')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-2xl text-orange-400" />
                                <div>
                                    <p className="text-sm text-gray-400">{t('about.personalInfo.locationLabel')}</p>
                                    <p className="text-lg font-semibold">{t('about.personalInfo.location')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            {t('about.education.title')}
                        </h2>

                        <div className="space-y-6">
                            {/* Education Timeline Item */}
                            <div className="relative pl-8 border-l-2 border-orange-400/30">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-orange-400"></div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">{t('about.education.period')}</p>
                                    <h3 className="text-xl font-bold mb-2">{t('about.education.degree')}</h3>
                                    <p className="text-gray-400 mb-2">
                                        <FaGraduationCap className="inline mr-2" />
                                        {t('about.education.school')}
                                    </p>
                                    <p className="text-sm text-gray-500">{t('about.education.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Biography Card - Full Width */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            {t('about.bio.title')}
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>{t('about.bio.paragraph1')}</p>
                            <p>{t('about.bio.paragraph2')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
