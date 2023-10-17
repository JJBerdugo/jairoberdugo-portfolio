"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-300 to-white">
                            ' JairoBerdu.go
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "[./portFolio ] '",
                                600, // wait 1s before replacing "Mice" with "Hamsters"
                                "Interactive media design '",
                                1000,
                                "3D Modeling '",
                                1000,
                                "Front-end Developer '",
                                5000,
                            ]}
                            wrapper="span"
                            speed={60}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I’m a passionate about interactive media design with an
                        interest for UX/UI and front-end web developement. I
                        enjoy creating attractive and functional interfaces to
                        enhance user experiences, and I also have expertise in
                        branding, animation and 3D modeling. I’m always curious
                        to learn more!
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black ">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-white  to-black hover:bg-slate-800 text-white border border-yellow-300 mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5  mt-4 lg:mt-0" /*place-self-center*/>
                    <div className="rounded-full bg-[#181818] w-[250] h-[250] lg:w-[400] lg:h-[400] relative">
                        <img
                            src="/images/hero-image.png"
                            alt="hero Image"
                            className="absolute transform -translate-x-1/2 -translate+y-1/2 top-1/2 left-1/2"
                            width={300}
                            heigth={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;
