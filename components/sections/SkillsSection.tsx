import React from "react";

import ScrollAnimationWrapper from "../ScrollAnimationWrapper";


// Data skill dengan link SVG dari devicon
const skillIcons = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26",
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        color: "#777BB4",
    },
    {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        color: "#FF2D20",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
    },

    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
    },
    {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "#06B6D4",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "#4169E1",
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032",
    },
    {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
    },
    {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
    },
    {
        name: "Vb.net",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg",
        color: "#61DAFB",
    },
];

export const SkillsSection = () => {
    return (
        <ScrollAnimationWrapper>
            <section className="w-full py-12 md:py-16" id="skills">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                        My Skills
                    </h2>

                    {/* Skill Icons Scrolling Container */}
                    <div className="relative overflow-hidden py-6 md:py-10 mb-6 md:mb-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 sm:before:w-16 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-8 sm:after:w-16 after:bg-gradient-to-l after:from-black after:to-transparent">
                        {/* First row of icons - moving left to right */}
                        <div className="flex space-x-6 md:space-x-12 mb-6 md:mb-10 animate-scroll-left">
                            {skillIcons.map((skill, index) => (
                                <div
                                    key={`skill-1-${index}`}
                                    className="flex flex-col items-center shrink-0"
                                >
                                    <div
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4"
                                        style={{
                                            boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                                        }}
                                    >
                                        <img
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                            src={skill.icon}
                                        />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                            {/* Duplicate for seamless looping */}
                            {skillIcons.map((skill, index) => (
                                <div
                                    key={`skill-1-dup-${index}`}
                                    className="flex flex-col items-center shrink-0"
                                >
                                    <div
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4"
                                        style={{
                                            boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                                        }}
                                    >
                                        <img
                                            alt={skill.name}
                                            className="w-full h-full object-contain"
                                            src={skill.icon}
                                        />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Second row of icons - moving right to left */}
                        <div className="flex space-x-6 md:space-x-12 animate-scroll-right">
                            {skillIcons
                                .slice()
                                .reverse()
                                .map((skill, index) => (
                                    <div
                                        key={`skill-2-${index}`}
                                        className="flex flex-col items-center shrink-0"
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4"
                                            style={{
                                                boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                                            }}
                                        >
                                            <img
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                src={skill.icon}
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            {/* Duplicate for seamless looping */}
                            {skillIcons
                                .slice()
                                .reverse()
                                .map((skill, index) => (
                                    <div
                                        key={`skill-2-dup-${index}`}
                                        className="flex flex-col items-center shrink-0"
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-2 hover:scale-110 transition-transform p-3 md:p-4"
                                            style={{
                                                boxShadow: `0 4px 10px rgba(0,0,0,0.1), 0 0 20px ${skill.color}25`,
                                            }}
                                        >
                                            <img
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                src={skill.icon}
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollAnimationWrapper>
    );
};

export default SkillsSection;
