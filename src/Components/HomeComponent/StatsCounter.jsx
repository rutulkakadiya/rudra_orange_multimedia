import React from 'react';

const StatsCounter = () => {
  const stats = [
    {
      title: "Years of experience in the creative world",
      number: "7+"
    },
    {
      title: "Campaigns Launched / Projects Managed / Deliverables Completed",
      number: "999+"
    },
    {
      title: "Branches and looking forward to expanding our roots",
      number: "02"
    },
    {
      title: "Happy clients and their invaluable cooperation",
      number: "150+"
    },
    {
      title: "Employees equipped with the creative spirit",
      number: "10+"
    }
  ];

  return (
    <div className="min-h-screen container mx-auto text-white p-4 md:p-0">
      {/* Header Section */}
      <div className=" mx-auto mb-8 md:mb-16">
        <div className="w-full pt-20 flex md:flex-row flex-col justify-between items-center px-10 text-white">
        <div>
          <p className="text-md text-(--first) mb-2">// Numbers</p>

          <h2 className="text-2xl lg:text-6xl font-semibold leading-tight mb-5 md:w-xl">
           
          Where  <span className="text-(--first)">Technology Meets </span> 
              Innovation
          </h2>
        </div>

        <div>
          <p className="text-gray-400 leading-7 mb-6 md:w-xl">
           Every number you see below is a testament to our commitment, hard work, and trust earned over the years. We aim to build long-lasting relationships through scalable, secure, and high-performing Branding solutions.
          </p>
          <div className="h-1 w-20 bg-(--first)"></div>
        </div>
      </div>
      </div>

      {/* Stats Section */}
      <div className=" mx-auto border border-white/5">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Side Image - 30% */}
          <div className="w-full lg:w-[32%]">
            <div className="h-full flex flex-col">
              {/* <span className="inline-block px-4 md:px-6 py-2 bg-orange-500 rounded-full text-xs md:text-sm font-semibold mb-0 w-fit">
                MILESTONES ACHIEVED
              </span> */}
              <div className="flex-1 rounded-bl-lg overflow-hidden min-h-[300px] lg:min-h-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover p-5 "
                />
              </div>
            </div>
          </div>

          {/* Stats Grid - 70% */}
          <div className="w-full lg:w-[68%] flex flex-col">
            {/* First Row - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/5 flex-1">
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="group relative border-r border-b border-white/5 p-6 md:p-8 lg:p-12 overflow-hidden cursor-pointer min-h-[200px] md:min-h-[250px] flex flex-col justify-between"
                >
                  {/* Circular Hover Effect from Top Right */}
                  <div className="absolute -top-[130%] -right-[130%] w-[250%] h-[250%] bg-(--first) rounded-full scale-0 group-hover:scale-130 transition-transform duration-1300 ease-out"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb-8">
                      {stat.number}
                    </h2>
                    <p className="text-xs md:text-sm md:w-xs text-center text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {stat.title}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-white/5 flex-1">
              {stats.slice(2).map((stat, index) => (
                <div
                  key={index}
                  className="group relative border-r border-b border-white/5 p-6 md:p-8 lg:p-12 overflow-hidden cursor-pointer min-h-[200px] md:min-h-[250px] flex flex-col justify-between"
                >
                  {/* Circular Hover Effect from Top Right */}
                  <div className="absolute -top-[130%] -right-[130%] w-[250%] h-[250%] bg-(--first) rounded-full scale-0 group-hover:scale-130 transition-transform duration-1300 ease-out"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4 md:mb-8">
                      {stat.number}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-400  text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                      {stat.title}
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;