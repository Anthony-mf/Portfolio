'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

type TabType = 'digital' | 'languages' | 'softSkills';

export default function Strengths() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabType>('digital');

    const tabs: { id: TabType; labelKey: string }[] = [
        { id: 'digital', labelKey: 'strengths.tabs.digital' },
        { id: 'languages', labelKey: 'strengths.tabs.languages' },
        { id: 'softSkills', labelKey: 'strengths.tabs.softSkills' },
    ];

    return (
        <section id="strengths" className="min-h-screen pt-20 md:pt-32 pb-8 md:pb-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="mb-8 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {t('strengths.pageTitle')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {t('strengths.intro')}
                    </p>
                </div>

                {/* Tabs - Responsive */}
                <div className="mb-6 md:mb-8 flex gap-2 md:gap-4 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-orange-400 to-yellow-500 text-black'
                                : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                                }`}
                        >
                            {t(tab.labelKey)}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-gray-900/70 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0px_20px_80px_rgba(0,0,0,0.35)]">
                    {/* Digital Tools */}
                    {activeTab === 'digital' && (
                        <ul className="space-y-4 text-gray-300">
                            {t('strengths.digital.items')
                                .split('|')
                                .map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span className="leading-relaxed">{item.trim()}</span>
                                    </li>
                                ))}
                        </ul>
                    )}

                    {/* Languages */}
                    {activeTab === 'languages' && (
                        <ul className="space-y-4 text-gray-300">
                            {t('strengths.languages.items')
                                .split('|')
                                .map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span className="leading-relaxed">{item.trim()}</span>
                                    </li>
                                ))}
                        </ul>
                    )}

                    {/* Soft Skills */}
                    {activeTab === 'softSkills' && (
                        <ul className="space-y-4 text-gray-300">
                            {t('strengths.softSkills.items')
                                .split('|')
                                .map((item: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="text-orange-400 mt-1">•</span>
                                        <span className="leading-relaxed">{item.trim()}</span>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}
