import React from 'react';
import RippleButton from "../CommonComponents/RippleButton";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import fun4rajkot from "../../assets/HomeImg/fun4rajkot.png";

const Fun4RajkotHero = () => {
    return (
        <section className="relative overflow-hidden border-x border-b border-white/5">
            <div className="mx-auto grid lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div className="lg:border-r border-b lg:border-b-0 border-white/5">
                    <div className="py-10 px-6 md:py-14 md:px-10">
                        <p className="text-md text-(--first) mb-2">// Social Media Brand</p>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Rajkot’s Own <span className="text-(--first)">Social Media Advertisement</span> & Updates Platform
                        </h2>

                        <p className="mt-6 text-white text-lg leading-relaxed">
                            fun4rajkot is a dynamic social media advertising and city-updates agency
                            dedicated to bringing the latest happenings, promotions, events, and fun
                            content of Rajkot to one engaging platform. We help brands, businesses, and the local community connect with the right audience through creative posts and timely updates.
                        </p>

                        <br />
                        <a href="https://www.instagram.com/fun4rajkot" target="_blank" rel="noopener noreferrer">
                            <RippleButton>Connect With Us</RippleButton>
                        </a>
                    </div>
                </div>

                {/* RIGHT GRID */}
                <div className="p-5 h-full flex flex-col justify-center">
                    <div className="relative group rounded-2xl overflow-hidden shadow-lg h-full min-h-[300px]">
                        <img
                            src={fun4rajkot}
                            alt="Fun4Rajkot Post"
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                            <a
                                href="https://www.instagram.com/fun4rajkot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition transform shadow-lg"
                            >
                                <FaInstagram size={20} /> Instagram
                            </a>

                            <a
                                href="https://www.facebook.com/fun4rajkot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition transform shadow-lg"
                            >
                                <FaFacebook size={20} /> Facebook
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Fun4RajkotHero;
