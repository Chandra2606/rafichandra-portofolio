import React from "react";
import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Download } from "lucide-react";

import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

import foto from "@/public/image/me.jpg";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center gap-8 py-8 md:py-10">
            {/* Card Foto */}
            <ScrollAnimationWrapper>
                <Card
                    isFooterBlurred
                    className="border-none w-[250px] md:w-[300px]"
                    radius="lg"
                >
                    <Image
                        alt="Foto profil"
                        className="object-cover w-full"
                        height={300}
                        src={foto.src}
                        width={300}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Download CV</p>
                        <Button
                            className="text-tiny text-white bg-black/20 hover:bg-primary/80 transition-all duration-300 ease-in-out group overflow-hidden"
                            color="default"
                            radius="lg"
                            size="sm"
                            variant="flat"
                        >
                            <span className="group-hover:-translate-y-10 transition-transform duration-300 inline-block">
                                <Download size={16} />
                            </span>
                            <span className="absolute translate-y-10 group-hover:translate-y-0 transition-transform duration-300 inline-flex items-center justify-center">
                                <Download className="animate-bounce" size={16} />
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
            </ScrollAnimationWrapper>

            {/* Heading utama */}
            <ScrollAnimationWrapper>
                <div className="inline-block max-w-xl text-center justify-center px-4">
                    <span className="tracking-tight inline font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
                        Hi, I&apos;m
                    </span>
                    <span className="tracking-tight inline font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">
                        Rafi Chandra.
                    </span>

                    <div className="w-full my-2 text-base sm:text-lg lg:text-xl text-default-600 block max-w-full">
                        I&apos;m a software engineer with a passion for building accessible and
                        customizable web applications.
                    </div>
                </div>
            </ScrollAnimationWrapper>

            {/* Running Text/Marquee */}
            <div className="w-full mt-6 md:mt-10 overflow-hidden py-2 relative">
                <div className="inline-flex animate-marquee whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 font-semibold">
                            Web Developer
                        </span>
                        <span className="text-base mx-4 text-white/60">•</span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] font-bold">
                            Software Engineer
                        </span>
                        <span className="text-base mx-4 text-white/60">•</span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 font-semibold">
                            Frontend Developer
                        </span>
                        <span className="text-base mx-4 text-white/60">•</span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-4 bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] font-bold">
                            Backend Developer
                        </span>
                        <span className="text-base mx-4 text-white/60">•</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
