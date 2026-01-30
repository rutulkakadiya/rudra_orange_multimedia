import React from "react";
import { Camera, Video, Brush, PenTool, Megaphone, Monitor, Flag, Package, ScrollText } from "lucide-react";
import logodesign from '../../assets/CoverImg/Logo.jpg';
import photography from '../../assets/Photography/photography (3).jpg';
import videography from '../../assets/CoverImg/Video.jpg';
import catelogdesign from '../../assets/CoverImg/Brochure.jpg';
import stationarydesign from '../../assets/CoverImg/Stationery.jpg';
import socialmediapost from '../../assets/CoverImg/Social media.jpg';
import packagingdesign from '../../assets/CoverImg/Packaging.jpg';
import paperprinting from '../../assets/CoverImg/Paper Printing.jpg';
import outdoorhoarding from '../../assets/CoverImg/Out Door.jpg';

const services = [
  {
    title: "Videography",
    desc: "Cinematic videos crafted to tell your brand story and connect emotionally.",
    image: videography,
    icon: Video,
  },
  {
    title: "Photography",
    desc: "High-quality product and brand photography that captures attention and builds trust.",
    image: photography,
    icon: Camera,
  },
  
  {
    title: "Logo",
    desc: "Strategic branding solutions that define identity and elevate brand presence.",
    image: logodesign,
    icon: Brush,
  },
  {
    title: "Stationery Design",
    desc: "Visually stunning designs aligned with your brand personality.",
    image: stationarydesign,
    icon: PenTool,
  },
  {
    title: "Brochure Design",
    desc: "Targeted campaigns that boost visibility, engagement, and conversions.",
    image: catelogdesign,
    icon: Megaphone,
  },
  {
    title: "Social Media Branding",
    desc: "Modern, responsive interfaces designed for performance and aesthetics.",
    image: socialmediapost,
    icon: Monitor,
  },
  {
    title: "Outdoor Hoarding Banners",
    desc: "Modern, responsive interfaces designed for performance and aesthetics.",
    image: outdoorhoarding,
    icon: Flag,
  },
  {
    title: "Packaging Design",
    desc: "Modern, responsive interfaces designed for performance and aesthetics.",
    image: packagingdesign,
    icon: Package,
  },
  {
    title: "Paper Printing",
    desc: "Modern, responsive interfaces designed for performance and aesthetics.",
    image: paperprinting,
    icon: ScrollText,
  },
];


const OurServices = () => {
  return (
    <section className="bg-(--dark-black) text-white border-t border-white/5">
      <div className="container mx-auto">

      <div className="w-full flex lg:flex-row py-10 flex-col justify-between lg:items-center border-b border-white/5 px-10 text-white">
  <div>
    <p className="text-md text-(--first) mb-2">// Our Services</p>

    <h2 className="text-2xl lg:text-6xl font-semibold leading-tight mb-5 md:w-xl">
      Creative <span className="text-(--first)">Solutions </span> 
      to <span className="text-(--first)">elevate</span> your brand
    </h2>
  </div>

  <div>
    <p className="text-gray-400 leading-7 mb-6 md:w-xl">
      We offer end-to-end creative services — from branding and visual identity
      to photography, videography, and digital design. Every service is crafted
      with strategy, creativity, and a strong focus on results.
    </p>
    <div className="h-1 w-20 bg-(--first)"></div>
  </div>
</div>



        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border border-white/5 p-10 overflow-hidden
                         transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-90 overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* ICON */}
              <div className="relative -mt-8 flex justify-center">
                <div
                  className="w-16 h-16 rounded-full bg-(--dark-black)
                             border border-white/10 flex items-center justify-center
                             group-hover:bg-(--first) transition"
                >
                  <service.icon
                    className="w-7 h-7 text-(--first) group-hover:text-black transition"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-center px-6 pb-8 pt-4">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <button
                  className="text-sm font-semibold text-(--first)
                             hover:underline tracking-wide"
                >
                  View Service →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;
