import React from 'react';
import { Mail, Phone } from 'lucide-react';
import RippleButton from "../CommonComponents/RippleButton";

const Fun4RajkotContact = () => {
    return (
        <div className="h-full p-8 lg:p-10 flex flex-col justify-center">
            <div className="text-center lg:text-left">
                <p className="text-md text-(--first) mb-2">// Contact</p>
                <h2 className="text-4xl font-semibold leading-tight mb-6">
                    Advertise <span className="text-(--first)">With Us</span>
                </h2>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Promote your business, event, or service with Fun4Rajkot and get noticed by the local audience.
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/2 hover:bg-white/5 transition-colors">
                        <div className="p-3 rounded-full bg-white/5 text-(--first)">
                            <Phone size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Call Us</p>
                            <p className="text-md font-bold">87338 77811 / 80000 77811</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/2 hover:bg-white/5 transition-colors">
                        <div className="p-3 rounded-full bg-white/5 text-(--first)">
                            <Mail size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Email Us</p>
                            <p className="text-md font-bold">fun4keshod@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fun4RajkotContact;
