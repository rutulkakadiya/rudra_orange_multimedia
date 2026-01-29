// import React from "react";

// export default function AutoScrollingText() {
//   const items = [
//     "BRANDING",
//     "CGI",
//     "CONTENT CREATION",
//     "WEB DEVELOPMENT",
//     "FILMS",
//     "ANIMATION",
//     "PRODUCT SHOOT",
//   ];

//   return (
//     <div className="w-full overflow-hidden py-10 border border-white/5">
//       <div className="whitespace-nowrap flex overflow-hidden relative ">

//         {/* Infinite scroll wrapper */}
//         <div className="flex animate-marquee">
//           {items.map((text, index) => (
//             <div
//               key={index}
//               className="flex items-center text-white text-4xl font-semibold mx-8"
//             >
//               {text}
//               <span className="mx-8 text-white text-4xl">*</span>
//             </div>
//           ))}
//         </div>

//         {/* Duplicate for smooth seamless loop */}
//         <div className="flex animate-marquee">
//           {items.map((text, index) => (
//             <div
//               key={index}
//               className="flex items-center text-white text-2xl font-semibold mx-8"
//             >
//               {text}
//               <span className="mx-8 text-white text-3xl">*</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind custom animation */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             animation: marquee 18s linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// }


import React from "react";

export default function AutoScrollingText({
  direction = "left",
  speed = 20,
}) {
  const items = [
    "BRANDING",
    "CORPORATE VIDEO",
    "GRAPHIC DESIGNING",
    "SOCIAL MEDIA BRANDING",
    "PRODUCT PHOTOGRAPHY",
    "3D DESIGN & ANIMATION",
    "ALL TYPE OF PRINTING WORK",
  ];

  const animation = direction === "left" 
    ? `scroll-left ${speed}s linear infinite`
    : `scroll-right ${speed}s linear infinite`;

  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          user-select: none;
        }

        .track {
          display: flex;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Hover pause */
        .marquee-container:hover .track {
          animation-play-state: paused !important;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="marquee-container py-8 container mx-auto">
        <div
          className="track"
          style={{ animation }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center mx-10">
              <span className="text-white text-4xl font-semibold cursor-pointer">
                {item}
              </span>
              <span className="text-white text-5xl leading-0 translate-y-2 ml-6">*</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
