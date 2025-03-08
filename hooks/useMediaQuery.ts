'use client';

import { useState, useEffect } from 'react';

/**
 * Hook untuk mendeteksi media query
 * @param query - Query media yang ingin dideteksi (misalnya '(max-width: 768px)')
 * @returns Boolean yang menunjukkan apakah query cocok dengan ukuran layar saat ini
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Awal, cek jika window.matchMedia tersedia
        const media = window.matchMedia(query);

        // Set nilai awal
        setMatches(media.matches);

        // Callback untuk update nilai saat media berubah
        const listener = () => {
            setMatches(media.matches);
        };

        // Tambahkan listener
        media.addEventListener('change', listener);

        // Cleanup
        return () => {
            media.removeEventListener('change', listener);
        };
    }, [query]);

    return matches;
}

/**
 * Hook untuk mendeteksi apakah perangkat adalah mobile
 * @returns Boolean yang menunjukkan apakah perangkat adalah mobile
 */
export function useMobile(): boolean {
    return useMediaQuery('(max-width: 640px)');
}

/**
 * Hook untuk mendeteksi apakah perangkat adalah tablet
 * @returns Boolean yang menunjukkan apakah perangkat adalah tablet
 */
export function useTablet(): boolean {
    return useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
}

/**
 * Hook untuk mendeteksi apakah perangkat adalah desktop
 * @returns Boolean yang menunjukkan apakah perangkat adalah desktop
 */
export function useDesktop(): boolean {
    return useMediaQuery('(min-width: 1025px)');
} 