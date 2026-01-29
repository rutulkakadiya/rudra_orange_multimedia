// import React, { useState, useEffect } from "react";
// import CircularText from "../CommonComponents/CircularText";
// import { Camera, Globe } from "lucide-react";

// export default function HeroSection() {
//   const [count, setCount] = useState(0);
//   const targetCount = 500;

// // -----------------------------
// // TYPEWRITER WORD ROTATION (NO BLINK VERSION)
// // -----------------------------
// const words = ["Branding", "Photography", "Videography"];

// const [displayText, setDisplayText] = useState(words[0]);
// const [wordIndex, setWordIndex] = useState(0);
// const [charIndex, setCharIndex] = useState(1);
// const [isDeleting, setIsDeleting] = useState(false);

// useEffect(() => {
//   const currentWord = words[wordIndex];

//   const speed = isDeleting ? 60 : 120;

//   const timeout = setTimeout(() => {
//     if (!isDeleting) {
//       // Typing forward
//       setDisplayText(currentWord.slice(0, charIndex + 1));
//       setCharIndex((prev) => prev + 1);

//       // Word typing completed
//       if (charIndex === currentWord.length) {
//         setTimeout(() => setIsDeleting(true), 900);
//       }
//     } else {
//       // Deleting backward but NEVER show empty string
//       setDisplayText(currentWord.slice(0, charIndex - 1));
//       setCharIndex((prev) => prev - 1);

//       // Once delete reaches 1 char → switch word immediately (NO BLINK)
//       if (charIndex === 1) {
//         setIsDeleting(false);
//         setWordIndex((prev) => (prev + 1) % words.length);
//       }
//     }
//   }, speed);

//   return () => clearTimeout(timeout);
// }, [charIndex, isDeleting, wordIndex]);


//   // -----------------------------
//   // COUNTER
//   // -----------------------------
//   useEffect(() => {
//     if (count < targetCount) {
//       const timer = setTimeout(() => {
//         setCount((prev) => Math.min(prev + 10, targetCount));
//       }, 30);
//       return () => clearTimeout(timer);
//     }
//   }, [count]);


//   return (
//     <div className="min-h-screen bg-(--dark-black) text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="grid grid-cols-12 min-h-screen items-center">

//           {/* LEFT COLUMN */}
//           <div className="col-span-3 flex flex-col justify-between h-full py-10 relative">
//             <div className="w-px h-full absolute bg-white/5 right-0 top-0 "></div>

//             <div className="flex-1 flex items-start">
//               <div className="w-[88%] h-90 rounded-lg overflow-hidden ">
//                 <img
//                   src="https://i.pinimg.com/736x/da/1d/97/da1d976764661f89bb7d773e2b0c8e60.jpg"
//                   alt=""
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="mt-auto">
//               <div className="text-7xl font-bold mb-2 flex items-center tracking-wider">
//                 {count}
//                 <span className="text-7xl">+</span>
//               </div>
//               <div className="text-md font-semibold tracking-wider uppercase">
//                 Satisfied Clients
//               </div>
//             </div>
//           </div>

//           {/* CENTER COLUMN */}
//           <div className="col-span-6 px-8 -translate-y-10">
//             <h1 className="text-7xl font-bold mb-8 leading-tight">
//               We turn <span className="text-(--first)">ideas</span> into creative{"  "} <br />
//              <span className="text-(--first) inline-block min-w-[220px]">
//   {displayText}
//   {/* <span className="border-r-2 border-(--first) ml-1 animate-pulse"></span> */}
// </span>

//             </h1>

//             <div className="space-y-6 text-gray-300 text-base leading-relaxed max-w-2xl">
//               <p>
//                 This philosophy is at the heart of everything we do, and it's
//                 what sets us apart in the world of advertising and marketing.
//               </p>
//               <p>
//                We believe a brand is more than a logo — it’s an experience, a personality, and the strongest connection you build with your audience. Our branding approach goes beyond visuals; we craft identities that communicate value, build trust, and leave a lasting impression.
//               </p>
//               <p>
//                 Your product deserves to be seen in the best light — literally. Our product photography captures every detail, texture, and emotion that inspires customers to take action.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="col-span-3 flex flex-col justify-between h-full py-8 items-end relative">
//             <div className="w-px h-full absolute bg-white/5 left-0 top-0 "></div>

//             <div className="relative w-48 h-48 mb-8">
//               <CircularText
//                 text="ORANGE*MULTI*MEDIA*"
//                 onHover="speedUp"
//                 spinDuration={20}
//                 className="custom-class"
//               />

//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
//                   <Camera size={40} className="text-black" />
//                 </button>
//               </div>
//             </div>

//             <div className="w-[88%] h-90 rounded-lg overflow-hidden shadow-2xl">
//               <img
//                 src="https://i.pinimg.com/736x/b0/93/1c/b0931c6cc7e35dbd130f38d9944b9f84.jpg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import CircularText from "../CommonComponents/CircularText";
import { Camera } from "lucide-react";

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const targetCount = 150;

  // -----------------------------
  // TYPEWRITER
  // -----------------------------
  const words = ["Branding", "Photography", "Videography"];
  const [displayText, setDisplayText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // -----------------------------
  // COUNTER
  // -----------------------------
  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount((prev) => Math.min(prev + 10, targetCount));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [count]);


  return (
    <div className="min-h-screen  bg-(--dark-black) text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* GRID - BIG SCREEN SAME FIXED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center gap-10 lg:gap-0">

          {/* LEFT COLUMN */}
          <div className="col-span-3 flex flex-col justify-between h-full py-10 relative
                          order-3 lg:order-1">

            <div className="hidden lg:block w-px h-full absolute bg-white/5 right-0 top-0"></div>

            <div className="flex-1 flex items-start justify-center lg:justify-start">
              <div className="lg:w-[88%] w-full h-50 lg:h-90 rounded-lg overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/da/1d/97/da1d976764661f89bb7d773e2b0c8e60.jpg"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-auto text-center lg:text-left">
              <div className="text-4xl lg:text-7xl font-bold mb-2 flex items-center justify-center lg:justify-start">
                {count}
                <span className="text-3xl lg:text-7xl">+</span>
              </div>
              <div className="text-sm lg:text-md font-semibold tracking-wider uppercase">
                Satisfied Clients
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-span-6 px-2 lg:px-8 translate-y-10 lg:-translate-y-10
                          order-1 lg:order-2 text-center lg:text-left">

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              We turn <span className="text-(--first)">ideas</span> into creative <br />
              <span className="text-(--first) inline-block min-w-[220px]">
                {displayText}
              </span>
            </h1>

            <div className="space-y-6 text-gray-300 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                This philosophy is at the heart of everything we do, and it's
                what sets us apart in advertising and marketing.
              </p>
              <p>
                We believe a brand is more than a logo — it’s an experience, a personality, 
                and the strongest connection you build with your audience.
              </p>
              <p>
                Your product deserves to be seen in the best light — literally.
                Our product photography captures every detail and emotion that
                inspires customers to take action.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-3 flex flex-col justify-between h-full py-8 items-center lg:items-end relative
                          order-2 lg:order-3">

            <div className="hidden lg:block w-px h-full absolute bg-white/5 left-0 top-0"></div>

            <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-8 flex justify-center items-center">
              <CircularText
                text="ORANGE*MULTI*MEDIA*"
                spinDuration={20}
              />
              <div className="absolute inset-0 flex items-center justify-center top-1/2 -translate-y-1/2">
                <button className="w-10 h-10 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Camera  className="size-5 lg:size-10 text-black" />
                </button>
              </div>
            </div>

            <div className="lg:w-[88%]  h-50 lg:h-90 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/b0/93/1c/b0931c6cc7e35dbd130f38d9944b9f84.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
