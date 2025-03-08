import React from 'react';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper';

export const AboutSection = () => {
    return (
        <ScrollAnimationWrapper>
            <section id="about" className="w-full py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-10 items-center">
                        <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] text-center">About Me</h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                                Lulusan dari Sekolah Tinggi Manajemen Informatika Dan Komputer Jayanusa Jurusan Sistem Informasi dengan
                                keahlian dalam pengembangan web, rekayasa perangkat lunak, manajemen basis data, dan jaringan komputer
                                serta kemampuan dalam software dan hardware. Bersertifikat dari Oracle dan Cisco, saya unggul dalam
                                mempelajari teknologi baru dengan cepat dan beradaptasi di lingkungan kerja yang dinamis. Berfokus pada
                                mengembangkan dan mengoptimalkan solusi digital yang ramah pengguna, aman, serta andal, baik dari sisi
                                frontend maupun backend.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default AboutSection; 