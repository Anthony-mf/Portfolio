'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const jobs = [
    {
        id: 1,
        titleKey: 'job.auchan.title',
        companyKey: 'job.auchan.company',
        periodKey: 'job.auchan.period',
        locationKey: 'job.auchan.location',
        descriptionKey: 'job.auchan.description',
        taskKey: 'job.auchan.tasks',
        gradient: 'from-green-500 to-emerald-500',
        accentColor: '#10B981',
    },
    {
        id: 2,
        titleKey: 'job.carrefour.title',
        companyKey: 'job.carrefour.company',
        periodKey: 'job.carrefour.period',
        locationKey: 'job.carrefour.location',
        descriptionKey: 'job.carrefour.description',
        taskKey: 'job.carrefour.tasks',
        gradient: 'from-orange-500 to-red-500',
        accentColor: '#F97316',
    },
];

export default function Jobs() {
    const { t } = useLanguage();

    return (
        <section id="jobs" className="min-h-screen pt-20 md:pt-32 pb-8 md:pb-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-8 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {t('jobs.pageTitle')}
                    </h1>
                </div>

                {/* Jobs Grid - Responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="group relative bg-gradient-to-br from-gray-900/70 to-black/60 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                            style={{ border: `2px solid ${job.accentColor}20` }}
                        >
                            {/* Gradient Background Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon Badge */}
                                <div
                                    className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${job.gradient} mb-6 shadow-lg`}
                                    style={{ width: '64px', height: '64px' }}
                                >
                                    <FaBriefcase className="text-3xl text-white" />
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: job.accentColor }}>
                                        {t(job.titleKey)}
                                    </p>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {t(job.companyKey)}
                                    </h3>
                                </div>

                                {/* Info Pills */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                                        <FaMapMarkerAlt className="text-sm" style={{ color: job.accentColor }} />
                                        <span className="text-sm text-gray-300">{t(job.locationKey)}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                                        <FaCalendarAlt className="text-sm" style={{ color: job.accentColor }} />
                                        <span className="text-sm text-gray-300">{t(job.periodKey)}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {t(job.descriptionKey)}
                                </p>

                                {/* Missions */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: job.accentColor }}>
                                        <FaCheckCircle className="text-base" />
                                        Missions
                                    </h4>
                                    <div className="space-y-2 ml-6">
                                        {t(job.taskKey).split('|').map((task, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div
                                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                    style={{ backgroundColor: job.accentColor }}
                                                />
                                                <span className="text-gray-300 leading-relaxed">{task.trim()}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Line */}
                                <div
                                    className={`h-1 rounded-full bg-gradient-to-r ${job.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}