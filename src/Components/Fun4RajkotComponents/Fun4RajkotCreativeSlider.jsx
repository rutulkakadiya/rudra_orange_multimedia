import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import RippleButton from '../CommonComponents/RippleButton';
import static_post_1 from '../../assets/fun4rajkot/1 Static Post/01.jpg'
import static_post_2 from '../../assets/fun4rajkot/1 Static Post/02.jpg'
import static_post_3 from '../../assets/fun4rajkot/1 Static Post/03.jpg'
import static_post_4 from '../../assets/fun4rajkot/1 Static Post/04.jpg'
import static_post_5 from '../../assets/fun4rajkot/1 Static Post/05.jpg'
import static_post_6 from '../../assets/fun4rajkot/1 Static Post/06.jpg'
import promotional_banner_1 from '../../assets/fun4rajkot/2 Promotional banners/Promotional banners 1.jpg'
import promotional_banner_2 from '../../assets/fun4rajkot/2 Promotional banners/Promotional banners 2.jpg'
import promotional_banner_3 from '../../assets/fun4rajkot/2 Promotional banners/Promotional banners 3.jpg'
import promotional_banner_4 from '../../assets/fun4rajkot/2 Promotional banners/Promotional banners 4.jpg'
import social_media_post_1 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/01.jpg'
import social_media_post_2 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/02.jpg'
import social_media_post_3 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/03.jpg'
import social_media_post_4 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/04.jpg'
import social_media_post_5 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/05.jpg'
import social_media_post_6 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/06.jpg'
import social_media_post_7 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/07.jpg'
import social_media_post_8 from '../../assets/fun4rajkot/3 Brand-focused Social Media Posts/08.jpg'

const Fun4RajkotCreativeSlider = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeImage, setActiveImage] = useState(null);

    const creativeShowcase = [
        {
            id: 1,
            title: "Static Post",
            image: static_post_1,
            works: [
                static_post_1, static_post_2, static_post_3,
                static_post_4, static_post_5, static_post_6
            ]
        },
        {
            id: 2,
            title: "Promotional Banners",
            image: promotional_banner_1,
            works: [
                promotional_banner_1, promotional_banner_2, promotional_banner_3,
                promotional_banner_4
            ]
        },
        {
            id: 3,
            title: "Brand-focused Social Media Posts",
            image: social_media_post_1,
            works: [
                social_media_post_1, social_media_post_2, social_media_post_3,
                social_media_post_4, social_media_post_5, social_media_post_6,
                social_media_post_7, social_media_post_8
            ]
        }
    ];

    return (
        <section className="container mx-auto border-x border-white/5 overflow-hidden text-white">
            <div className="px-6 lg:px-0 border border-white/5">

                
                <div className="px-6 border-b border-white/5 pt-[30px] sm:pt-[50px]">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* LEFT : TEXT CONTENT */}
                        <div>
                            <p className="text-md text-(--first) mb-2">// Creative Showcase</p>

                            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                                Creative Post &{" "}
                                <span className="text-(--first)">Template Design</span>
                            </h2>
                        </div>

                        {/* RIGHT : IMAGE / MOCKUP */}
                        <div className="flex justify-end">
                            <div className="border-l border-white/5 p-8 text-left">

                                <p className="text-gray-400 pt-4">
                                    All designs are clean, modern, and suitable for Instagram & Facebook.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= CATEGORY VIEW ================= */}
                {!activeCategory && (
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-t border-white/5'>
                        {creativeShowcase.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveCategory(item)}
                                className="h-[400px] md:h-[600px] w-full border-r border-b p-3 md:p-6 border-white/5 overflow-hidden relative group cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    draggable="false"
                                />

                                <div className="absolute bg-black/60 backdrop-blur-md m-4 md:m-8 rounded-xl bottom-0 left-0 right-0 p-4 md:p-8 bg-linear-to-t from-black/90 to-transparent">
                                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-(--first) transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm text-gray-300 group-hover:text-white flex items-center gap-2">
                                        View Collection <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ================= DETAIL VIEW ================= */}
                {activeCategory && (
                    <div className="px-6 py-10 min-h-[500px] border-t border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">
                                    {activeCategory.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    // Various Designs
                                </p>
                            </div>

                            <button
                                onClick={() => setActiveCategory(null)}
                            >
                                <RippleButton>Back to Categories</RippleButton>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeCategory.works.map((imageUrl, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveImage(imageUrl)}
                                    className="relative cursor-pointer overflow-hidden rounded-xl
                                               border border-white/10 aspect-square group"
                                >
                                    <img
                                        src={imageUrl}
                                        alt={`${activeCategory.title} ${i + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ================= FULL SCREEN IMAGE ================= */}
                {activeImage && (
                    <div className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4">
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-(--first) transition-colors p-2"
                        >
                            <X size={40} />
                        </button>
                        <img
                            src={activeImage}
                            alt="Preview"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                        />
                    </div>
                )}

            </div>
        </section>
    );
};

export default Fun4RajkotCreativeSlider;
