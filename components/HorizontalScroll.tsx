'use client';

import React, { ReactNode, useRef, useState, useEffect } from 'react';

interface HorizontalScrollProps {
    children: ReactNode;
    className?: string;
    itemClassName?: string;
    showScrollbar?: boolean;
}

export default function HorizontalScroll({
    children,
    className = '',
    itemClassName = '',
    showScrollbar = false
}: HorizontalScrollProps) {
    const scrollContainer = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Konversi children menjadi array untuk memproses
    const childrenArray = React.Children.toArray(children);

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainer.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainer.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX) * 2; // Kecepatan scroll
        scrollContainer.current.scrollLeft = scrollLeft - walk;
    };

    const onTouchStart = (e: React.TouchEvent) => {
        if (!scrollContainer.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainer.current.offsetLeft);
        setScrollLeft(scrollContainer.current.scrollLeft);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !scrollContainer.current) return;
        const x = e.touches[0].pageX - scrollContainer.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.current.scrollLeft = scrollLeft - walk;
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        // Cleanup event listeners
        const currentRef = scrollContainer.current;
        const onMouseLeave = () => setIsDragging(false);

        if (currentRef) {
            currentRef.addEventListener('mouseleave', onMouseLeave);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mouseleave', onMouseLeave);
            }
        };
    }, []);

    return (
        <div
            ref={scrollContainer}
            className={`flex overflow-x-auto ${showScrollbar ? '' : 'scrollbar-hide'} ${className}`}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {React.Children.map(childrenArray, (child, index) => (
                <div key={index} className={`flex-shrink-0 ${itemClassName}`}>
                    {child}
                </div>
            ))}
        </div>
    );
} 