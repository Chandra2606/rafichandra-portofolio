'use client';

import { useEffect } from 'react';

/**
 * Komponen yang menjalankan script animasi scroll pada halaman
 * Ini akan menambahkan class 'visible' ke elemen dengan class 'animate-scroll-in'
 * saat elemen tersebut muncul di viewport
 */
export default function ScrollAnimation() {
    useEffect(() => {
        // Function untuk menambahkan class 'visible' ke elemen yang terlihat
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-scroll-in');

            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                // Elemen dianggap terlihat jika setidaknya 10% dari elemen terlihat di viewport
                const isVisible =
                    rect.top + (rect.height * 0.1) <= windowHeight &&
                    rect.bottom >= (rect.height * 0.1);

                if (isVisible) {
                    element.classList.add('visible');
                }
            });
        };

        // Jalankan sekali pada awal render
        handleScroll();

        // Tambahkan event listener
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Komponen ini tidak merender apa pun
    return null;
} 