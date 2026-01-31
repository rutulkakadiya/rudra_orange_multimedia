import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import fun4rajkot from "../../assets/HomeImg/fun4rajkot.png"
import RippleButton from "../CommonComponents/RippleButton";

export default function SocialMedia() {
    return (
        <section className="relative overflow-hidden border border-white/5">

            <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <div className="border border-white/5 border-l-0">
                    <div className="py-10 px-2 md:py-14">
                        <p className="text-md text-(--first) mb-2">// Digital Outreach Platform</p>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            fun4rajkot
                            <span className="text-(--first)"> by Orange Multimedia</span>
                        </h2>

                        <p className="mt-6 text-white text-lg leading-relaxed">
                            fun4rajkot is a city-centric lifestyle platform connecting Rajkot
                            through trending places, events, food spots and local stories.
                            Strategized, created and managed by Orange Multimedia.
                        </p>

                        {/* SOCIAL HANDLES */}
                        <div className="mt-8">
                            <h4 className="text-white text-lg font-semibold mb-4">Our Official Pages</h4>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.instagram.com/fun4rajkot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition shadow-lg"
                                >
                                    <FaInstagram className="text-2xl" />
                                    <span>@fun4rajkot</span>
                                </a>

                                <a
                                    href="https://www.facebook.com/fun4rajkot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition shadow-lg"
                                >
                                    <FaFacebook className="text-2xl" />
                                    <span>fun4rajkot</span>
                                </a>
                            </div>
                        </div>
                        <br />
                        <a href="https://www.instagram.com/fun4rajkot" target="_blank" rel="noopener noreferrer">
                            <RippleButton>Connect With Us</RippleButton>
                        </a>
                    </div>
                </div>

                {/* RIGHT GRID */}
                <div className="gap-4 border border-white/5 border-r-0 p-5 h-full">
                    <div
                        className="relative group rounded-2xl overflow-hidden shadow-lg h-full"
                    >
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
}
