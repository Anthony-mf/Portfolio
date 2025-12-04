'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        titleKey: 'experiences.exp1.title',
        companyKey: 'experiences.exp1.company',
        periodKey: 'experiences.exp1.period',
        locationKey: 'experiences.exp1.location',
        descriptionKey: 'experiences.exp1.description',
        tasksKey: 'experiences.exp1.tasks',
        type: 'Alternance',
    },
    {
        id: 2,
        titleKey: 'experiences.exp2.title',
        companyKey: 'experiences.exp2.company',
        periodKey: 'experiences.exp2.period',
        locationKey: 'experiences.exp2.location',
        descriptionKey: 'experiences.exp2.description',
        tasksKey: 'experiences.exp2.tasks',
        type: 'Stage',
    },
];

export default function Experiences() {
    const { t } = useLanguage();

    return (
        <section id="experiences" className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {t('experiences.pageTitle')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        {t('experiences.intro')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-yellow-500 to-transparent"></div>

                    {/* Experiences */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={exp.id} className="relative pl-20">
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-orange-400 border-4 border-gray-900"></div>

                                {/* Experience Card */}
                                <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.01] transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400">
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                                                {t(exp.titleKey)}
                                            </h2>
                                            <p className="text-xl text-gray-300 mb-4">
                                                <FaBriefcase className="inline mr-2" />
                                                {t(exp.companyKey)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-wrap gap-6 mb-6 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-orange-400" />
                                            <span>{t(exp.periodKey)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-orange-400" />
                                            <span>{t(exp.locationKey)}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {t(exp.descriptionKey)}
                                    </p>

                                    {/* Tasks */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Missions principales :</h3>
                                        <ul className="space-y-2">
                                            {t(exp.tasksKey).split('|').map((task: string, taskIdx: number) => (
                                                <li key={taskIdx} className="flex items-start gap-3 text-gray-400">
                                                    <span className="text-orange-400 mt-1">▸</span>
                                                    <span>{task.trim()}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
