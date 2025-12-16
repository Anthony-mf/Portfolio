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
        <div className="w-full mx-auto mt-6 md:mt-8 px-2 md:px-4">
            {/* Circular Carousel - Responsive */}
            <div className="relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] py-4 md:py-6 mb-6 md:mb-8 flex items-center justify-center perspective-1000 overflow-visible">
                <div
                    className={`flex items-center justify-center gap-4 md:gap-8 lg:gap-12 transition-all duration-300 ease-in-out ${slideDirection === 'left' ? 'animate-slide-to-left' :
                        slideDirection === 'right' ? 'animate-slide-to-right' : ''
                        }`}
                >
                    {/* Previous Item (Left) - Hidden on mobile */}
                    <div
                        onClick={goToPrevious}
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 z-10 hidden sm:block"
                        style={{
                            opacity: 0.5,
                            transform: 'scale(0.75) rotateY(20deg)',
                        }}
                    >
                        <div
                            className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm relative"
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
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                                <p className="text-white text-xs font-semibold truncate">{prevItem.title}</p>
                                {prevItem.subtitle && (
                                    <p className="text-gray-300 text-[10px] truncate">{prevItem.subtitle}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Current Item (Center) - Responsive */}
                    <div
                        className="z-20 transition-transform duration-300"
                        style={{
                            transform: 'scale(1)',
                        }}
                    >
                        <div
                            className="w-48 md:w-56 lg:w-72 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
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
                                    className="w-full h-48 md:h-56 lg:h-72 object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-3 md:p-4 bg-gradient-to-t from-black/90 to-black/70">
                                <h3 className="text-base md:text-lg font-bold text-white mb-1">{currentItem.title}</h3>
                                {currentItem.subtitle && (
                                    <p className="text-xs md:text-sm" style={{ color: accentColor }}>{currentItem.subtitle}</p>
                                )}

                                {/* Counter */}
                                <div className="mt-2 md:mt-3 flex items-center justify-center gap-1">
                                    {items.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="h-1 rounded-full transition-all duration-300"
                                            style={{
                                                width: idx === currentIndex ? '24px' : '8px',
                                                backgroundColor: idx === currentIndex ? accentColor : `${accentColor}40`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
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
