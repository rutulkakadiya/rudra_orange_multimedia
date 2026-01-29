import React from 'react';
import { Users, Sparkles, Wallet, Zap, PartyPopper } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: "Strong Reach",
        desc: "Strong local audience reach in Rajkot"
    },
    {
        icon: Sparkles,
        title: "Creative Content",
        desc: "Creative & engaging content"
    },
    {
        icon: Wallet,
        title: "Affordable",
        desc: "Affordable advertisement solutions"
    },
    {
        icon: Zap,
        title: "Fast Updates",
        desc: "Fast updates & timely posting"
    },
    {
        icon: PartyPopper,
        title: "Perfect Mix",
        desc: "Perfect mix of promotion + entertainment"
    }
];

const Fun4RajkotWhyChoose = () => {
    return (
        <section className="container mx-auto border-x border-white/5 text-white">
            <div className="py-20 px-6 lg:px-0">
                <div className="mb-14 lg:pl-6 text-center lg:text-left">
                    <p className="text-md text-(--first) mb-2">// Benefits</p>
                    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
                        Why Choose <span className="text-(--first)">Fun4Rajkot?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-px border-y border-white/5">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/5 p-10 transition-colors duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-(--first)/10 flex items-center justify-center text-(--first) mb-6 group-hover:scale-110 group-hover:bg-(--first) group-hover:text-white transition-all duration-300">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Fun4RajkotWhyChoose;
