'use client';
import { useState } from 'react';

export interface ImageItem {
    imageSrc: string;
    title: string;
    subtitle?: string;
}

interface ImageCarouselProps {
    items: ImageItem[];
    accentColor: string;
}

export default function ImageCarousel({ items, accentColor }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

    // Get previous and next items with circular logic
    const getPrevIndex = () => (currentIndex - 1 + items.length) % items.length;
    const getNextIndex = () => (currentIndex + 1) % items.length;

    const prevItem = items[getPrevIndex()];
    const currentItem = items[currentIndex];
    const nextItem = items[getNextIndex()];

    const goToPrevious = () => {
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex(getPrevIndex());
            setTimeout(() => setSlideDirection(null), 50);
        }, 300);
    };

    const goToNext = () => {
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex(getNextIndex());
            setTimeout(() => setSlideDirection(null), 50);
        }, 300);
    };

    return (
        <div className="w-full mx-auto mt-12 px-4">
            {/* Circular Carousel */}
            <div className="relative h-64 mb-8 flex items-center justify-center perspective-1000">
                <div
                    className={`flex items-center justify-center gap-12 transition-all duration-300 ease-in-out ${slideDirection === 'left' ? 'animate-slide-to-left' :
                        slideDirection === 'right' ? 'animate-slide-to-right' : ''
                        }`}
                >
                    {/* Previous Item (Left) */}
                    <div
                        onClick={goToPrevious}
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 z-10"
                        style={{
                            opacity: 0.5,
                            transform: 'scale(0.75) rotateY(20deg)',
                        }}
                    >
                        <div
                            className="w-44 h-44 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
                            style={{
                                border: `2px solid ${accentColor}30`,
                                background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`
                            }}
                        >
                            <img
                                src={prevItem.imageSrc}
                                alt={prevItem.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                <p className="text-white text-sm font-semibold truncate">{prevItem.title}</p>
                                {prevItem.subtitle && (
                                    <p className="text-gray-300 text-xs truncate">{prevItem.subtitle}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Current Item (Center) */}
                    <div
                        className="z-20 transition-transform duration-300"
                        style={{
                            transform: 'scale(1)',
                        }}
                    >
                        <div
                            className="w-72 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
                            style={{
                                background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}05)`,
                                border: `2px solid ${accentColor}50`,
                                boxShadow: `0 20px 60px ${accentColor}30`
                            }}
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={currentItem.imageSrc}
                                    alt={currentItem.title}
                                    className="w-full h-56 object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white truncate">{currentItem.title}</h3>
                                    {currentItem.subtitle && (
                                        <p className="text-sm text-gray-400 truncate">{currentItem.subtitle}</p>
                                    )}
                                    <p className="text-xs text-gray-500 mt-1">
                                        {currentIndex + 1} of {items.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Item (Right) */}
                    <div
                        onClick={goToNext}
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 z-10"
                        style={{
                            opacity: 0.5,
                            transform: 'scale(0.75) rotateY(-20deg)',
                        }}
                    >
                        <div
                            className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
                            style={{
                                border: `2px solid ${accentColor}30`,
                                background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}05)`
                            }}
                        >
                            <img
                                src={nextItem.imageSrc}
                                alt={nextItem.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                <p className="text-white text-sm font-semibold truncate">{nextItem.title}</p>
                                {nextItem.subtitle && (
                                    <p className="text-gray-300 text-xs truncate">{nextItem.subtitle}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }

                @keyframes slideToLeft {
                    0% {
                        transform: translateX(0) scale(1) rotateY(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: translateX(-30%) scale(0.8) rotateY(-15deg);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateX(-100%) scale(0.6) rotateY(-30deg);
                        opacity: 0;
                    }
                }

                @keyframes slideToRight {
                    0% {
                        transform: translateX(0) scale(1) rotateY(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: translateX(30%) scale(0.8) rotateY(15deg);
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateX(100%) scale(0.6) rotateY(30deg);
                        opacity: 0;
                    }
                }

                .animate-slide-to-left {
                    animation: slideToLeft 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
                }

                .animate-slide-to-right {
                    animation: slideToRight 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
}
