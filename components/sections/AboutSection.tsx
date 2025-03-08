import React from 'react';

export const AboutSection = () => {
    return (
        <section id="about" className="w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-10 items-center">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] text-center">About Me</h3>
                        <p className="text-lg text-gray-300">
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
    );
};

export default AboutSection; 