import React from 'react';
import { MapPin } from 'lucide-react';

const branches = [
    'fun4keshod',
    'fun4junagadh',
    'fun4amreli',
    'fun4gujarat',
];

const Fun4RajkotBranches = () => {
    return (
        <div className="h-full pt-8 pb-8 lg:pt-10 lg:pb-10 lg:border-r border-b lg:border-b-0 border-white/5">
            <div className="pb-8 lg:pb-10 text-center lg:text-left px-6">
                <p className="text-md text-(--first) mb-2">// Network</p>
                <h2 className="text-4xl font-semibold leading-tight mb-4">
                    Other <span className="text-(--first)">Branches</span>
                </h2>
                <p className="text-gray-400 text-sm">
                    We are expanding fun and updates across Gujarat through our growing network.
                </p>
            </div>

            <div className="grid grid-cols-2">
                {branches.map((branch, i) => (
                    <div
                        key={i}
                        className="group p-6 border border-white/5 transition-all duration-300 text-center"
                    >
                        <div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-(--first) group-hover:text-white transition-colors mb-3">
                            <MapPin size={20} />
                        </div>
                        <h3 className="text-sm font-bold lowercase">@{branch}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Fun4RajkotBranches;
