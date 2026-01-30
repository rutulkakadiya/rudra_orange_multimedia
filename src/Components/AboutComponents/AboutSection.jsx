// import React from "react";
// import { motion } from "framer-motion";

// const skills = [
//   { label: "Video Editing", value: 85 },
//   { label: "Videography", value: 92 },
//   { label: "Branding Strategy", value: 80 },
// ];

// const stats = [
//   { value: "20+", label: "Years Experience" },
//   { value: "1,000+", label: "Projects Delivered" },
//   { value: "300+", label: "Happy Clients" },
//   { value: "64", label: "Awards & Recognition" },
// ];

// const AboutSection = () => {
//   return (
//     <section className="bg-(--dark-black) text-white overflow-hidden border-t border-white/5 mt-5">
//       <div className="container mx-auto">

//         {/* TOP GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center border border-white/5">

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="lg:col-span-5"
//           >
//             <div className="relative overflow-hidden border-r border-white/5 group p-15">
//               <img
//                 src="https://i.pinimg.com/736x/b0/93/1c/b0931c6cc7e35dbd130f38d9944b9f84.jpg"
//                 alt="Orange Multi Media"
//                 className="w-full h-[40vw] object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 " />
//             </div>
//           </motion.div>

//           {/* CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="lg:col-span-7"
//           >
//             <p className="uppercase tracking-[0.3em] text-sm text-(--first) mb-4">
//               About Orange Multi Media
//             </p>

//             <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//               We Don’t Just Create <br />
//               <span className="text-(--first)">Visuals</span>, We Build Brands
//             </h2>

//             <div className="space-y-5 text-gray-300 leading-relaxed max-w-2xl">
//               <p>
//                 Orange Multi Media is a creative branding studio driven by
//                 strategy, storytelling, and strong visual identity. We help
//                 brands stand out in an overcrowded digital world.
//               </p>

//               <p>
//                 From high-end photography and cinematic videography to complete
//                 brand positioning, our work is designed to connect emotionally
//                 and convert strategically.
//               </p>

//               <p>
//                 Every frame we capture and every brand we build is guided by
//                 purpose, creativity, and performance.
//               </p>
//             </div>

//             <button className="mt-10 px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-(--first) transition-all duration-300 shadow-lg">
//               Let’s Work Together
//             </button>
//           </motion.div>
//         </div>

//         {/* SKILLS + STATS */}
//         <div className="grid grid-cols-1 lg:grid-cols-12">

//           {/* SKILLS */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="lg:col-span-6 border-r border-white/5 p-15"
//           >
//             <h3 className="text-2xl font-semibold mb-8">Our Expertise</h3>

//             <div className="space-y-8">
//               {skills.map((skill, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between mb-2 text-sm">
//                     <span>{skill.label}</span>
//                     <span>{skill.value}%</span>
//                   </div>
//                   <div className="w-full h-1 bg-white/5 overflow-hidden">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.value}%` }}
//                       transition={{ duration: 1 }}
//                       viewport={{ once: true }}
//                       className="h-full bg-(--first)"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* STATS */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="lg:col-span-6 grid grid-cols-2"
//           >
//             {stats.map((item, i) => (
//               <div
//                 key={i}
//                 className="border border-white/5 p-8 text-center
//                            hover:border-(--first)
//                            transition-all duration-300"
//               >
//                 <h4 className="text-4xl font-bold text-(--first)">
//                   {item.value}
//                 </h4>
//                 <p className="text-sm text-gray-400 mt-3">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;


import React from "react";
import { motion } from "framer-motion";
import RippleButton from "../CommonComponents/RippleButton";
import { Link } from "react-router-dom";

const skills = [
  { label: "Video Editing", value: 85 },
  { label: "Videography", value: 92 },
  { label: "Branding Strategy", value: 80 },
  { label: "Creative Direction", value: 88 },
  { label: "Post Production", value: 90 },
];

const approach = [
  {
    title: "Creative Thinking",
    desc: "Unique concepts that help brands stand out visually and emotionally in a competitive market.",
  },
  {
    title: "Strategic Planning",
    desc: "Every project begins with a clear strategy aligned with brand goals and audience behavior.",
  },
  {
    title: "Visual Excellence",
    desc: "High-end production quality with sharp attention to detail in every frame we create.",
  },
  {
    title: "Brand Growth",
    desc: "We focus on building long-term brand value, not just delivering good-looking visuals.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-(--dark-black) text-white overflow-hidden border-white/5">
      <div className="container mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center border border-white/5">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden border-r border-white/5 group p-15">
              <img
                src="https://i.pinimg.com/736x/b0/93/1c/b0931c6cc7e35dbd130f38d9944b9f84.jpg"
                alt="Orange Multi Media"
                className="w-full h-[40vw] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* <p className="uppercase tracking-[0.3em] text-sm text-(--first) mb-4">
              About Orange Multi Media
            </p> */}
             <p className="text-md text-(--first) tracking-widest mb-2">// About Orange Multi Media</p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              We Don’t Just <span className="text-(--first)">Create</span> <br />
              <span className="text-(--first)">Visuals</span>, We Build Brands
            </h2>

            <div className="space-y-5 text-gray-300 leading-relaxed max-w-2xl">
              <p>
                Orange Multi Media is a creative branding studio driven by
                strategy, storytelling, and strong visual identity.
              </p>
              <p>
                From high-end photography to cinematic videography, our work
                connects emotionally and converts strategically.
              </p>
              <p>
                Every frame is guided by purpose, creativity, and performance.
              </p>
            </div>

                <div className="mt-10">
            <Link to="/contact"><RippleButton className="text-sm">Let’s Work Together</RippleButton></Link>
                </div>

            {/* <button className="mt-10 px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-(--first) transition-all duration-300 shadow-lg">
              
            </button> */}
          </motion.div>
        </div>

        {/* ============ SKILLS + APPROACH ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-12">

        

          {/* RIGHT SIDE – HOVER EFFECT CARDS */}
          <div className="lg:col-span-6 grid grid-cols-2">
            {approach.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden border border-white/5 p-8
                           approach-card group transition-all duration-300 flex justify-center items-center"
              >
                <div className="relative z-10 flex flex-col justify-center items-center">
                  <h4 className="text-xl font-semibold mb-3  transition">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-white text-center transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

            {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6 border-r border-white/5 p-15"
          >
            <h3 className="text-2xl font-semibold mb-8">Our Expertise</h3>

            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-(--first)"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* ===== CUSTOM HOVER EFFECT ===== */}
      <style jsx>{`
        .approach-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 40px;
          height: 40px;
          background: var(--first);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.6s ease-in-out;
          z-index: 0;
        }

        .approach-card:hover::before {
          transform: scale(25);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
