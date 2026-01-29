// import React from "react";
// import { motion } from "framer-motion";

// const data = [
//   {
//     title: "Our Vision",
//     highlight: "Vision",
//     desc: [
//       "To become a leading creative branding studio that helps brands build strong emotional connections through powerful visuals.",
//       "We envision a future where creativity meets strategy to create meaningful and memorable brand experiences."
//     ],
//     image:
//       "https://i.pinimg.com/736x/da/1d/97/da1d976764661f89bb7d773e2b0c8e60.jpg",
//   },
//   {
//     title: "Our Mission",
//     highlight: "Mission",
//     desc: [
//       "Our mission is to deliver high-quality branding, photography, and videography solutions that drive real impact.",
//       "We aim to blend creativity, technology, and strategy to help brands grow and stand out in competitive markets."
//     ],
//     image:
//       "https://i.pinimg.com/736x/b0/93/1c/b0931c6cc7e35dbd130f38d9944b9f84.jpg",
//     reverse: true,
//   },
//   {
//     title: "Our Values",
//     highlight: "Values",
//     desc: [
//       "Creativity, integrity, and excellence are at the core of everything we do.",
//       "We believe in long-term partnerships, transparency, and delivering consistent quality in every project."
//     ],
//     image:
//       "https://i.pinimg.com/736x/da/1d/97/da1d976764661f89bb7d773e2b0c8e60.jpg",
//   },
// ];

// const VisionMissionValues = () => {
//   return (
//     <section className="bg-(--dark-black) text-white border-t border-white/5">
//       <div className="container mx-auto">

//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`grid grid-cols-1 lg:grid-cols-12 items-center
//                         border-b border-white/5`}
//           >
//             {/* IMAGE */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className={`lg:col-span-6 ${
//                 item.reverse ? "lg:order-2 border-l" : "lg:order-1 border-r"
//               } border-white/5`}
//             >
//               <div className="relative overflow-hidden group p-15">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-[25vw] object-cover
//                              group-hover:scale-110 transition-transform duration-700"
//                 />
//                 {/* <div className="absolute inset-0 bg-black/30" /> */}
//               </div>
//             </motion.div>

//             {/* CONTENT */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className={`lg:col-span-6 p-15 ${
//                 item.reverse ? "lg:order-1" : "lg:order-2"
//               }`}
//             >
//               <p className="uppercase tracking-[0.3em] text-sm text-(--first) mb-4">
//                 {item.title}
//               </p>

//               <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
//                 Our <span className="text-(--first)">{item.highlight}</span>
//               </h2>

//               <div className="space-y-4 text-gray-300 leading-relaxed max-w-xl">
//                 {item.desc.map((text, i) => (
//                   <p key={i}>{text}</p>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default VisionMissionValues;


import React from "react";
import { motion } from "framer-motion";

// Animated Vision SVG
const VisionSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E95E0E", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#E95E0E", stopOpacity: 0.6 }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Outer Circle */}
    <motion.circle
      cx="200"
      cy="200"
      r="120"
      fill="none"
      stroke="url(#visionGrad)"
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />

    {/* Rotating Ring */}
    <motion.circle
      cx="200"
      cy="200"
      r="140"
      fill="none"
      stroke="#E95E0E"
      strokeWidth="1"
      strokeDasharray="10 10"
      opacity="0.3"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />

    {/* Eye Shape */}
    <motion.ellipse
      cx="200"
      cy="200"
      rx="100"
      ry="60"
      fill="none"
      stroke="#E95E0E"
      strokeWidth="3"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />

    {/* Iris */}
    <motion.circle
      cx="200"
      cy="200"
      r="40"
      fill="url(#visionGrad)"
      filter="url(#glow)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />

    {/* Pupil */}
    <motion.circle
      cx="200"
      cy="200"
      r="20"
      fill="#0a0a0a"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ duration: 1, delay: 1.5 }}
    />

    {/* Light Reflection */}
    <motion.circle
      cx="190"
      cy="190"
      r="8"
      fill="white"
      opacity="0.8"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0.8] }}
      transition={{ duration: 1, delay: 2 }}
    />

    {/* Vision Lines */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.line
        key={i}
        x1="200"
        y1="200"
        x2={200 + Math.cos((angle * Math.PI) / 180) * 80}
        y2={200 + Math.sin((angle * Math.PI) / 180) * 80}
        stroke="#E95E0E"
        strokeWidth="1"
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
      />
    ))}
  </svg>
);

// Animated Mission SVG
const MissionSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E95E0E", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#E95E0E", stopOpacity: 0.5 }} />
      </linearGradient>
    </defs>

    {/* Target Circles */}
    {[160, 120, 80, 40].map((r, i) => (
      <motion.circle
        key={i}
        cx="200"
        cy="200"
        r={r}
        fill="none"
        stroke="#E95E0E"
        strokeWidth="2"
        opacity={0.3 + i * 0.15}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 + i * 0.15 }}
        transition={{ duration: 1, delay: i * 0.2 }}
      />
    ))}

    {/* Center Dot */}
    <motion.circle
      cx="200"
      cy="200"
      r="15"
      fill="url(#missionGrad)"
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1.3, 1] }}
      transition={{ duration: 1, delay: 1 }}
    />

    {/* Arrow */}
    <motion.g
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.2 }}
    >
      <motion.path
        d="M 80 200 L 185 200"
        stroke="#E95E0E"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      <motion.path
        d="M 170 185 L 185 200 L 170 215"
        stroke="#E95E0E"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      />
    </motion.g>

    {/* Orbiting Particles */}
    {[0, 120, 240].map((angle, i) => (
      <motion.circle
        key={i}
        cx="200"
        cy="200"
        r="5"
        fill="#E95E0E"
        animate={{
          x: Math.cos(((angle + 360) * Math.PI) / 180) * 100,
          y: Math.sin(((angle + 360) * Math.PI) / 180) * 100,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.5,
        }}
      />
    ))}

    {/* Compass Lines */}
    {[0, 90, 180, 270].map((angle, i) => (
      <motion.line
        key={i}
        x1="200"
        y1="200"
        x2={200 + Math.cos((angle * Math.PI) / 180) * 180}
        y2={200 + Math.sin((angle * Math.PI) / 180) * 180}
        stroke="#E95E0E"
        strokeWidth="1"
        opacity="0.2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
      />
    ))}
  </svg>
);

// Animated Values SVG
const ValuesSVG = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <linearGradient id="valuesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E95E0E", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#E95E0E", stopOpacity: 0.6 }} />
      </linearGradient>
      <filter id="valuesGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Hexagon */}
    <motion.polygon
      points="200,80 280,130 280,230 200,280 120,230 120,130"
      fill="none"
      stroke="url(#valuesGrad)"
      strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />

    {/* Inner Hexagon */}
    <motion.polygon
      points="200,110 260,145 260,215 200,250 140,215 140,145"
      fill="none"
      stroke="#E95E0E"
      strokeWidth="2"
      opacity="0.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      style={{ transformOrigin: "center" }}
    />

    {/* Center Star */}
    <motion.g
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
      style={{ transformOrigin: "200px 180px" }}
    >
      <motion.path
        d="M 200,150 L 210,175 L 237,175 L 215,190 L 225,215 L 200,200 L 175,215 L 185,190 L 163,175 L 190,175 Z"
        fill="url(#valuesGrad)"
        filter="url(#valuesGlow)"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 182px" }}
      />
    </motion.g>

    {/* Corner Dots */}
    {[
      [200, 80],
      [280, 130],
      [280, 230],
      [200, 280],
      [120, 230],
      [120, 130],
    ].map(([x, y], i) => (
      <motion.circle
        key={i}
        cx={x}
        cy={y}
        r="6"
        fill="#E95E0E"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.8, delay: 1.5 + i * 0.1 }}
      />
    ))}

    {/* Connecting Lines to Center */}
    {[
      [200, 80],
      [280, 130],
      [280, 230],
      [200, 280],
      [120, 230],
      [120, 130],
    ].map(([x, y], i) => (
      <motion.line
        key={i}
        x1="200"
        y1="180"
        x2={x}
        y2={y}
        stroke="#E95E0E"
        strokeWidth="1"
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2 + i * 0.1 }}
      />
    ))}

    {/* Pulsing Outer Ring */}
    <motion.circle
      cx="200"
      cy="180"
      r="120"
      fill="none"
      stroke="#E95E0E"
      strokeWidth="1"
      opacity="0.2"
      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "center" }}
    />
  </svg>
);

const data = [
  {
    title: "// Our Vision",
    highlight: "Vision",
    desc: [
      "To become a leading creative branding studio that helps brands build strong emotional connections through powerful visuals.",
      "We envision a future where creativity meets strategy to create meaningful and memorable brand experiences."
    ],
    svg: VisionSVG,
  },
  {
    title: "// Our Mission",
    highlight: "Mission",
    desc: [
      "Our mission is to deliver high-quality branding, photography, and videography solutions that drive real impact.",
      "We aim to blend creativity, technology, and strategy to help brands grow and stand out in competitive markets."
    ],
    svg: MissionSVG,
    reverse: true,
  },
  {
    title: "// Our Values",
    highlight: "Values",
    desc: [
      "Creativity, integrity, and excellence are at the core of everything we do.",
      "We believe in long-term partnerships, transparency, and delivering consistent quality in every project."
    ],
    svg: ValuesSVG,
  },
];

const VisionMissionValues = () => {
  return (
    <section className="text-white border-t border-white/5">
      <div className="container mx-auto">
        {data.map((item, index) => {
          const SvgComponent = item.svg;
          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 items-center border-b border-white/5`}
            >
              {/* SVG */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`lg:col-span-6 ${
                  item.reverse ? "lg:order-2 border-l" : "lg:order-1 border-r"
                } border-white/5`}
              >
                <div className="relative overflow-hidden group p-12 lg:p-16">
                  <div className="w-full h-[25vw] min-h-[300px] flex items-center justify-center">
                    <SvgComponent />
                  </div>
                </div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`lg:col-span-6 p-8 lg:p-16 ${
                  item.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <p className="uppercase tracking-[0.3em] text-sm text-(--first) mb-4">
                  {item.title}
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Our <span className="text-(--first)">{item.highlight}</span>
                </h2>

                <div className="space-y-4 text-gray-300 leading-relaxed max-w-xl">
                  {item.desc.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VisionMissionValues;