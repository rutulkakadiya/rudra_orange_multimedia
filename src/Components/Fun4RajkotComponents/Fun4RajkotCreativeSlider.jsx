import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Dynamically import all images from fun4rajkot folder
const fun4rajkotImages = import.meta.glob('../../assets/fun4rajkot/**/*.{jpg,jpeg,png}', { eager: true });
const allImages = Object.values(fun4rajkotImages).map((img) => img.default);
const extendedImages = [...allImages, ...allImages, ...allImages];

const Fun4RajkotCreativeSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(allImages.length);
    const [isResetting, setIsResetting] = React.useState(false);
    const cardWidth = 324; // 300px width + 24px gap

    // Auto-slide logic
    React.useEffect(() => {
        if (isResetting) return; // Don't auto-slide while resetting

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, isResetting]);

    const nextSlide = () => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev - 1);
    };

    const handleAnimationComplete = () => {
        if (currentIndex >= allImages.length * 2) {
            setIsResetting(true);
            setCurrentIndex(currentIndex - allImages.length);
        } else if (currentIndex < allImages.length) {
            setIsResetting(true);
            setCurrentIndex(currentIndex + allImages.length);
        }
    };

    // Reset the resetting flag after the instant jump is properly registered
    React.useEffect(() => {
        if (isResetting) {
            // A small timeout to allow the render with duration: 0 to complete
            const timer = setTimeout(() => {
                setIsResetting(false);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isResetting]);

    return (
        <section className="container mx-auto border-x border-white/5 overflow-hidden text-white">
            <div className="px-6 lg:px-0 border border-white/5">
                <div className="px-6 border-b border-white/5 pt-[30px] sm:pt-0">
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
                        <div className="flex justify-center">
                            <div className="border-l border-white/5 p-8 text-left">
                                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                                    We provide professional update plate (template) designs and
                                    advertisement creatives, including:
                                </p>

                                <ul className="grid sm:grid-cols-2 gap-4 mb-4">
                                    {[
                                        "Static Post",
                                        "Promotional Banners",
                                        "Brand-focused Social Media Posts",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-white font-medium"
                                        >
                                            <CheckCircle className="text-(--first)" size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-gray-400 pt-4">
                                    All designs are clean, modern, and suitable for Instagram & Facebook.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SLIDER CONTROLS */}
                <div className="flex justify-end px-6 mt-4 mb-4 gap-4">
                    <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 hover:bg-(--first) hover:border-(--first) transition-all cursor-pointer">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 hover:bg-(--first) hover:border-(--first) transition-all cursor-pointer">
                        <ChevronRight size={24} />
                    </button>
                </div>
                {/* Wait, I need to import ChevronLeft/Right or use existing icons. Existing imports: CheckCircle. I should import new ones. */}

                {/* SLIDER */}
                <div className="relative border-y border-white/10 py-10 overflow-hidden">
                    <motion.div
                        animate={{ x: -currentIndex * cardWidth }}
                        transition={{ ease: "easeInOut", duration: isResetting ? 0 : 0.5 }}
                        onAnimationComplete={handleAnimationComplete}
                        className="flex gap-6 pl-6"
                    >
                        {extendedImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[300px] h-[300px] md:h-[400px] border border-white/10 rounded-xl overflow-hidden relative group"
                            >
                                <img
                                    src={img}
                                    alt={`Creative Design ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    draggable="false"
                                />
                                {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div> */}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Fun4RajkotCreativeSlider;
