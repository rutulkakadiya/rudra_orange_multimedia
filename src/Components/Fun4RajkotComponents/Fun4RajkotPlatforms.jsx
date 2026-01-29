import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ExternalLink } from 'lucide-react';

const Fun4RajkotPlatforms = () => {
    return (
        <section className="container mx-auto border-x border-white/5 text-white">
            <div className="py-20 px-6 lg:px-0">
                <div className="mb-10 lg:pl-6 text-center lg:text-left">
                    <p className="text-md text-(--first) mb-2">// Social Hub</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Platforms We <span className="text-(--first)">Cover</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto lg:mx-0">
                        Follow & join us to stay connected with Rajkot’s fun side across all major platforms!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/fun4rajkot?igsh=MTg0eXVpYWwxMWFvYQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-8 border border-white/5 transition-all duration-300 relative overflow-hidden text-center items-center"
                    >
                        <div className="p-4 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <FaInstagram size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-(--first) transition-colors">Instagram</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Daily posts, stories & promotions</p>
                        <span className="mt-auto text-sm text-(--first) font-medium flex items-center gap-2 border border-white/10 px-6 py-2 rounded-full group-hover:bg-(--first) group-hover:text-white transition-all">
                            Follow Now <ExternalLink size={14} />
                        </span>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/share/1DM3PvVk6M/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-8 border border-white/5 transition-all duration-300 relative overflow-hidden text-center items-center"
                    >
                        <div className="p-4 rounded-full bg-[#1877F2] text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <FaFacebook size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#1877F2] transition-colors">Facebook</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Updates, ads & community reach</p>
                        <span className="mt-auto text-sm text-blue-400 font-medium flex items-center gap-2 border border-white/10 px-6 py-2 rounded-full group-hover:bg-[#1877F2] group-hover:text-white transition-all">
                            Join Page <ExternalLink size={14} />
                        </span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/918733877811"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-8 border border-white/5 transition-all duration-300 relative overflow-hidden text-center items-center"
                    >
                        <div className="p-4 rounded-full bg-[#25D366] text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            <FaWhatsapp size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">Instant updates, promos & content</p>
                        <span className="mt-auto text-sm text-green-500 font-medium flex items-center gap-2 border border-white/10 px-6 py-2 rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-all">
                            Join Community <ExternalLink size={14} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Fun4RajkotPlatforms;
