import React from 'react';
import { motion } from 'framer-motion';
import social from '../../assets/fun4rajkot/social.png';
import social1 from '../../assets/fun4rajkot/social_1.png';
import social2 from '../../assets/fun4rajkot/social_2.png';

const Services = [
    {
        title: 'Social Media Advertising',
        description: 'We design and publish eye-catching advertisement posts for local businesses, restaurants, events, and startups. Optimized for maximum reach.',
        icon: '📢',
        image: social,
    },
    {
        title: 'Daily Updates & City Buzz',
        description: 'Stay updated with city news, events, viral content, and everything happening in Rajkot. Informative and engaging posts daily.',
        icon: '📰',
        image: social1,
    },
    {
        title: 'Creative Design',
        description: 'Professional templates, static posts, banners, and brand-focused creatives that are clean, modern, and platform-ready.',
        icon: '🎨',
        image: social2,
    },
];

const Fun4RajkotWhatWeDo = () => {
    return (
        <section className="container mx-auto border-x border-white/5 text-white">
            <div className="pt-10 px-6 lg:px-0">
                <div className="mb-10 lg:pl-6">
                    <p className="text-md text-(--first) mb-2">// Services</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        What <span className="text-(--first)">We Do</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3">
                    {Services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 border border-white/5 hover:border-(--first) transition-colors duration-300"
                        >
                            <div className="mb-6 overflow-hidden rounded-xl border border-white/10 h-auto">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fun4RajkotWhatWeDo;
