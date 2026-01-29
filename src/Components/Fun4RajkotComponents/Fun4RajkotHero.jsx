import React from 'react';
import RippleButton from "../CommonComponents/RippleButton";

const Fun4RajkotHero = () => {
    return (
        <section className="relative h-[85vh] overflow-hidden border-x border-b border-white/5 flex items-center justify-center">
            <div className="mx-auto w-full">

                {/* CENTER CONTENT */}
                <div className="text-center max-w-4xl mx-auto px-6 md:px-10">
                    <p className="text-md text-(--first) mb-2">// Social Media Brand</p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Rajkot’s Own{" "}
                        <span className="text-(--first)">
                            Social Media Advertisement
                        </span>{" "}
                        & Updates Platform
                    </h2>

                    <p className="mt-6 text-white text-lg leading-relaxed">
                        fun4rajkot is a dynamic social media advertising and city-updates agency
                        dedicated to bringing the latest happenings, promotions, events, and fun
                        content of Rajkot to one engaging platform. We help brands, businesses, and
                        the local community connect with the right audience through creative posts
                        and timely updates.
                    </p>

                    <div className="mt-8">
                        <a
                            href="https://www.instagram.com/fun4rajkot"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RippleButton>Connect With Us</RippleButton>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Fun4RajkotHero;
