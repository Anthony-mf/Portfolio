'use client';
import { useState, useEffect } from 'react';

interface TypewriterProps {
    texts: string[];
    typingDelay?: number;
    deletingDelay?: number;
    pauseDelay?: number;
    className?: string;
}

export default function Typewriter({
    texts,
    typingDelay = 100,
    deletingDelay = 50,
    pauseDelay = 2000,
    className = ''
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentText = texts[currentTextIndex];

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDelay);
            return () => clearTimeout(pauseTimeout);
        }

        if (isDeleting) {
            if (displayedText.length === 0) {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            } else {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.substring(0, displayedText.length - 1));
                }, deletingDelay);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayedText.length === currentText.length) {
                setIsPaused(true);
            } else {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.substring(0, displayedText.length + 1));
                }, typingDelay);
                return () => clearTimeout(timeout);
            }
        }
    }, [displayedText, currentTextIndex, isDeleting, isPaused, texts, typingDelay, deletingDelay, pauseDelay]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
