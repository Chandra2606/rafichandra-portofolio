'use client'

import React from 'react';

const ProjectSection = () => {
    return (
        <section id="projects" className="w-full py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                    Project Portfolio
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                    Koleksi proyek-proyek terbaik yang telah saya kerjakan, menampilkan kemampuan dan pengalaman saya
                </p>

                {/* Coming Soon */}
                <div className="bg-[#161b22] p-8 rounded-xl border border-gray-700 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-[#FF1CF7]/20 to-[#b249f8]/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-[#58a6ff]/20 to-[#b249f8]/20 rounded-full blur-2xl"></div>

                    <div className="text-center py-16 relative z-10">
                        <h3 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#58a6ff] to-[#b249f8]">
                            Coming Soon
                        </h3>
                        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
                            Halaman proyek sedang dalam pengembangan. Segera hadir!
                        </p>

                        <div className="flex justify-center space-x-4 mt-8">
                            <div className="w-3 h-3 rounded-full bg-[#58a6ff] animate-pulse"></div>
                            <div className="w-3 h-3 rounded-full bg-[#8a6bfa] animate-pulse delay-100"></div>
                            <div className="w-3 h-3 rounded-full bg-[#b249f8] animate-pulse delay-200"></div>
                        </div>
                    </div>

                    {/* Placeholder Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-[#21262d]/50 rounded-lg p-4 border border-gray-700 h-64 flex flex-col justify-center items-center backdrop-blur-sm">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#58a6ff]/30 to-[#b249f8]/30 mb-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="h-6 w-32 bg-gray-700/50 rounded mb-2"></div>
                                <div className="h-4 w-24 bg-gray-700/50 rounded"></div>
                                <div className="mt-4 flex space-x-2">
                                    <div className="h-4 w-12 bg-gray-700/50 rounded"></div>
                                    <div className="h-4 w-12 bg-gray-700/50 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProjectSection; 