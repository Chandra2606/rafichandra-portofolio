"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
    delay?: number;
}

export default function ScrollAnimationWrapper({
    children,
    className = '',
    threshold = 0.1,
    delay = 0
}: ScrollAnimationWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Tambahkan delay jika diperlukan
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                        // Berhenti mengamati setelah elemen terlihat
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, delay]);

    return (
        <div ref={ref} className={`animate-scroll-in ${className}`}>
            {children}
        </div>
    );
} 