// import React from "react";
// import { Megaphone, PenTool, Wand2, Layers, Palette, Cpu } from "lucide-react";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Brand Development",
//       desc: "Strengthen your brand identity and get an edge over competitors.",
//       icon: PenTool,
//     },
//     {
//       title: "Print Identity",
//       desc: "Print-based branding with fonts, colors, & layouts that build recall.",
//       icon: Palette,
//     },
//     {
//       title: "Digital Identity",
//       desc: "We boost your digital presence through powerful communication.",
//       icon: Cpu,
//     },
//     {
//       title: "Communication Strategy",
//       desc: "We express your brand through meaningful & strategic content.",
//       icon: Megaphone,
//     },
//     {
//       title: "Creative Direction",
//       desc: "Complete visual direction for campaigns, branding & aesthetics.",
//       icon: Wand2,
//     },
//     {
//       title: "Brand Assets",
//       desc: "Logos, guidelines, templates & everything your brand needs.",
//       icon: Layers,
//     },
//   ];

//   return (
//     <div className="w-full text-white border border-white/5">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12">

//         {/* LEFT SIDE STICKY HEADING */}
//         <div className="col-span-4 pr-10 mb-10 lg:mb-0">
//           <div className="lg:sticky lg:top-24">
//             <h2 className="text-4xl lg:text-5xl font-semibold leading-tight pt-10 ">
//               A sneakpeek <br /> into our <br /> services
//             </h2>

//             <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold">
//               EXPLORE OUR SERVICES
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE SERVICE GRID */}
//         <div className="col-span-8 ">
//           <div className="grid grid-cols-1 sm:grid-cols-2  relative">

//             {services.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className=" h-90 p-15 relative border border-white/5 flex flex-col justify-center"
//                 >
//                   {/* BORDER TOP */}
//                   {/* <div className="absolute top-0 left-0 w-full h-px bg-[#2a2a2c]"></div> */}

//                   {/* ICON */}
//                   <div className="w-14 h-14 rounded-full bg-[#1f1f21] flex items-center justify-center mb-6">
//                     <Icon size={28} />
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               );
//             })}

//             {/* LAST BOTTOM BORDER */}
//             <div className="absolute bottom-0 left-0 w-full h-px bg-[#2a2a2c]"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import { Megaphone, PenTool, Wand2, Layers, Palette, Cpu } from "lucide-react";

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Brand Development",
//       desc: "Strengthen your brand identity and get an edge over competitors.",
//       icon: PenTool,
//       image: "https://i.pinimg.com/originals/e2/4d/a3/e24da3e805a37edb9170da28f6032391.gif",
//     },
//     {
//       title: "Print Identity",
//       desc: "Print-based branding with fonts, colors, & layouts that build recall.",
//       icon: Palette,
//       image: "https://i.pinimg.com/originals/05/09/83/05098300a72598712aa3580d889af685.gif",
//     },
//     {
//       title: "Digital Identity",
//       desc: "We boost your digital presence through powerful communication.",
//       icon: Cpu,
//       image: "https://i.pinimg.com/originals/7f/b3/1f/7fb31fa854d047e5b4a41be6e5d3bdbd.gif",
//     },
//     {
//       title: "Communication Strategy",
//       desc: "We express your brand through meaningful & strategic content.",
//       icon: Megaphone,
//       image: "https://i.pinimg.com/originals/62/12/48/6212485181ca055f760855d98d3ee4bc.gif",
//     },
//     {
//       title: "Creative Direction",
//       desc: "Complete visual direction for campaigns, branding & aesthetics.",
//       icon: Wand2,
//       image: "https://i.pinimg.com/originals/15/70/84/157084787880c1ead98ec92332da7094.gif",
//     },
//     {
//       title: "Brand Assets",
//       desc: "Logos, guidelines, templates & everything your brand needs.",
//       icon: Layers,
//       image: "https://i.pinimg.com/originals/26/ba/74/26ba743438c34193166547e518b6e6ea.gif",
//     },
//   ];

//   return (
//     <div className="w-full  text-white border border-white/5 ">
//       <div className=" container mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8">

//         {/* LEFT SIDE STICKY HEADING */}
//         <div className="col-span-12 lg:col-span-4 lg:pr-10 mb-10 lg:mb-0 ps-10">
//           <div className="lg:sticky lg:top-24">
//             <h2 className="text-4xl lg:text-6xl font-semibold leading-tight pt-10">
//               A <span className="text-(--first)">sneakpeek</span>  into our  <span className="text-(--first)">services</span>
//             </h2>
//             <p className="text-gray-400 leading-7 tracking-wide py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, molestiae? Modi obcaecati dolor saepe deleniti quas at, asperiores fugit aut labore, corrupti et aliquid velit? Eligendi impedit minima adipisci magni!</p>
      
//             <button className="border border-(--first) hover:bg-(--first) cursor-pointer text-white px-8 py-4 rounded-2xl font-semibold transition-colors duration-300">
//               EXPLORE OUR SERVICES
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE SERVICE GRID */}
//         <div className="col-span-12 lg:col-span-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 relative">

//             {services.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group h-80 p-8 relative border border-white/5 flex flex-col justify-end overflow-hidden cursor-pointer"
//                 >
//                   {/* BACKGROUND IMAGE WITH OVERLAY */}
//                   <div className="absolute top-0 right-0 w-0 h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-full rounded-bl-[200%] group-hover:rounded-bl-none">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/70 "></div>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="relative z-10">
//                     {/* ICON */}
//                     <div className="w-14 h-14 rounded-full bg-[#1f1f21] text-(--first) flex items-center justify-center mb-6">
//                       <Icon size={28} />
//                     </div>

//                     {/* TITLE */}
//                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

//                     {/* DESCRIPTION */}
//                     <p className="text-gray-300 text-sm leading-relaxed w-xs">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* LAST BOTTOM BORDER */}
//             <div className="absolute bottom-0 left-0 w-full h-px bg-[#2a2a2c]"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Megaphone, PenTool, Wand2, Layers, Palette, Cpu } from "lucide-react";
import RippleButton from "../CommonComponents/RippleButton";

export default function ServicesSection() {
  const services = [
    {
      title: "CORPORATE VIDEO",
      desc: "Promotional Video | Products Video | Documentary Video Company Culture Video | Motion Graphic Video | Catalog Video",
      icon: PenTool,
      image: "https://i.pinimg.com/originals/e2/4d/a3/e24da3e805a37edb9170da28f6032391.gif",
    },
    {
      title: "GRAPHIC DESIGNING",
      desc: "Logo Design | Stationery Design | Catalogue & Brochure Design Poster Design | Packaging Design | Banner Design | Hoarding Design ",
      icon: Palette,
      image: "https://i.pinimg.com/originals/05/09/83/05098300a72598712aa3580d889af685.gif",
    },
    {
      title: "SOCIAL MEDIA BRANDING",
      desc: "Advertisement Post | Products Post | Festival Post",
      icon: Cpu,
      image: "https://i.pinimg.com/originals/7f/b3/1f/7fb31fa854d047e5b4a41be6e5d3bdbd.gif",
    },
    {
      title: "PRODUCT PHOTOGRAPHY",
      desc: "Mainly we working on Product & Concept Photography",
      icon: Megaphone,
      image: "https://i.pinimg.com/originals/62/12/48/6212485181ca055f760855d98d3ee4bc.gif",
    },
    {
      title: "3D DESIGN & ANIMATION",
      desc: "Stall Design | Product Design | Interior Design",
      icon: Wand2,
      image: "https://i.pinimg.com/originals/15/70/84/157084787880c1ead98ec92332da7094.gif",
    },
    {
      title: "ALL TYPE OF PRINTING WORK",
      desc: "Logos, guidelines, templates & everything your brand needs.",
      icon: Layers,
      image: "https://i.pinimg.com/originals/26/ba/74/26ba743438c34193166547e518b6e6ea.gif",
    },
  ];

  return (
    <>
     

      <div className="container mx-auto text-white border border-white/5">
        <div className=" px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT SIDE CONTENT UPDATED */}
          <div className="col-span-12 lg:col-span-4 lg:pr-10 mb-10 lg:mb-0 ps-10 py-10">
            <div className="lg:sticky lg:top-24">

              {/* NEW HEADING */}
               <p className="text-md text-(--first) mb-2">// Services</p>
              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight">
                <span className="text-(--first)">Premium</span> Creative  
                <br /> 
                <span className="text-(--first)">Branding</span> & Services
              </h2>

              {/* NEW DESCRIPTION */}
              <p className="text-gray-400 leading-7 tracking-wide py-8">
                Elevate your business identity with our powerful branding, 
                visual design, content strategy, and digital communication services.
                We create brand experiences that leave lasting impressions.
              </p>

              {/* NEW BUTTON WITH DIRECTION-BASED HOVER */}
           <RippleButton>Explore Services</RippleButton>
            </div>
          </div>

          {/* RIGHT SIDE SERVICE GRID (UNCHANGED) */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 relative">

              {services.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group h-80 p-8 relative border border-white/5 flex flex-col justify-end overflow-hidden cursor-pointer"
                  >
                    {/* BACKGROUND IMAGE WITH OVERLAY */}
                    <div className="absolute top-0 right-0 w-0 h-0 overflow-hidden transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-full rounded-bl-[200%] group-hover:rounded-bl-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70 "></div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-[#1f1f21] text-(--first) flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed w-xs">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-0 left-0 w-full h-px bg-[#2a2a2c]"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
