// import React from "react";

// export default function AboutUs() {
//   const images = [
//     {
//       title: "Creative Workspace",
//       desc: "We design smart ideas backed by strong strategy.",
//       img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
//     },
//     {
//       title: "Happy Clients",
//       desc: "Building successful partnerships over the years.",
//       img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//     },
//   ];

//   return (
//     <div className="w-full text-white px-6 lg:px-0">
//       <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-12">

//         {/* LEFT SIDE - Larger width */}
//         <div className="lg:col-span-7 ">
//             <div className=" h-100 p-10 border border-white/5 ps-20">
//             <p className="text-sm text-gray-400 mb-2">About Our Agency</p>

//           <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-5">
//             Your <span className="text-(--first)">trusted partner</span>  <br /> for business
//           </h2>

//           <p className="text-gray-400 leading-7 mb-6 w-md">
//             We deliver specialist consultancy services with years of experience,
//             helping businesses grow with strategic direction and clarity.
//           </p>
//             <div className="h-1 w-20 bg-(--first)"></div>
//             </div>

//             <div className="h-100 p-5 border border-white/5">
//           {/* Large Image */}
//           <SmoothImage
//             img="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
//             title="Professional Team"
//             desc="Strong professionals providing business solutions."
//             height="h-full"
//           />
//             </div>

//         </div>

//         {/* RIGHT IMAGES - Smaller width */}
//         <div className="lg:col-span-5 grid ">
//           {images.map((item, i) => (
//             <SmoothImage
//               key={i}
//               img={item.img}
//               title={item.title}
//               desc={item.desc}
//               height="h-100 p-5 border border-white/5"
//             />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// // Reusable smooth image block
// function SmoothImage({ img, title, desc, height }) {
//   return (
//     <div
//       className={`group ${height} overflow-hidden cursor-pointer relative `}
//     >
//       <img src={img} alt={title} className={`w-full h-full object-cover`} />

//       {/* Smooth overlay expanding from top-right with content inside */}
//       <div className="absolute top-0 right-0 w-0 h-0 bg-(--first)/50  transition-all duration-1000 ease-in-out group-hover:w-full group-hover:h-full rounded-bl-[200%] group-hover:rounded-bl-none overflow-hidden">
//         {/* Content */}
//         <div className="absolute inset-0 top-0   left-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-3 transition-all duration-700 delay-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
//           <h3 className="text-xl font-semibold mb-1">{title}</h3>
//           <p className="text-gray-300 text-sm">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import about_us from "../../assets/HomeImg/about_us.jpg"

export default function AboutUs() {
  const images = [
    {
      title: "Creative Workspace",
      desc: "We design smart ideas backed by strong strategy.",
      img: "https://i.pinimg.com/1200x/34/2b/a6/342ba6e9e9bf98ab11ed8e9d6b675f90.jpg",
    },
    {
      title: "Happy Clients",
      desc: "Building successful partnerships over the years.",
      img: about_us,
    },
  ];

  return (
    <div className="w-full text-white px-6 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT SIDE - Larger width */}
        <div className="lg:col-span-7">
          <div className="h-100 md:p-10 p-3 border border-white/5 ps-5 md:ps-20">
            <p className="text-md text-(--first) mb-2">// About Us</p>

            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-5">
              Your <span className="text-(--first)">trusted partner</span>{" "}
              <br /> for business
            </h2>

            <p className="text-gray-400 leading-7 mb-6 md:w-2xl">
              ORANGE MULTIMEDIA is a leading Branding Solutions and Printing
              Company operating from India. Located at Rajkot. it has its
              markets spread from Gujarat to Australia, USA as well. The company
              has 5 year of experience in the field of Corporate Designing and
              Video / AD’s Printing and Brand Development. From Print Media to
              Banner Design to Corporate Video / AD’s the company had done
              everything.
            </p>

            <div className="h-1 w-20 bg-(--first)"></div>
          </div>

          <div className="h-100 p-5 border border-white/5">
            {/* Large Image */}
            <SmoothImage
              // img="https://i.pinimg.com/originals/7b/e2/a8/7be2a89d6c2adf9faa77890b3e2c86b4.gif"
              img="https://i.pinimg.com/1200x/cb/75/ea/cb75ea982cb092ac0016e46f8fa9e0e9.jpg"
              title="Professional Team"
              desc="Strong professionals providing business solutions."
              height="h-full"
            />
          </div>
        </div>

        {/* RIGHT IMAGES - Smaller width */}
        <div className="lg:col-span-5 grid">
          {images.map((item, i) => (
            <div key={i} className="h-100 p-5 border border-white/5">
              <SmoothImage
                img={item.img}
                title={item.title}
                desc={item.desc}
                height="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable smooth image block
function SmoothImage({ img, title, desc, height }) {
  return (
    <div
      className={`group ${height} overflow-hidden cursor-pointer relative rounded-lg`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Smooth overlay - visible by default in top-right corner, expands on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-(--first)/50 transition-all duration-700 ease-out group-hover:w-full group-hover:h-full rounded-bl-[100px] group-hover:rounded-bl-none overflow-hidden will-change-transform">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 translate-y-3 transition-all duration-500 delay-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-4xl opacity-0 group-hover:opacity-100 font-semibold mb-1 text-white">
            {title}
          </h3>
          <p className="text-white opacity-0 group-hover:opacity-100 text-lg text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
