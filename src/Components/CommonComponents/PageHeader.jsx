// import React from "react";
// import { Link } from "react-router-dom";

// const PageHeader = ({
//   title,
//   highlight,
//   subtitle,
//   currentPage = "",
//   image,
// }) => {
//   return (
//     <section className=" w-full min-h-[70vh] flex items-center justify-center overflow-hidden">

//       {/* Background Image */}
//       <div className="relative flex items-center justify-center overflow-hidden w-[95%] h-[60vh] rounded-2xl">
//         <img
//         src={image}
//         alt={title}
//         className="absolute inset-0 w-full h-[60vh] rounded-2xl object-cover"
//       />

//       {/* Black Overlay */}
//       <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/70 to-black/50" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl">

        

//         {/* Title */}
//         <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
//           {title}{" "}
//           <span className="text-(--first)">
//             {highlight}
//           </span>
//         </h1>

//         {/* Breadcrumb */}
//         <div className="mb-4 text-sm text-gray-300 uppercase font-bold tracking-wider">
//           <Link to="/" className="text-(--first) transition">
//             Home
//           </Link>
//           <span className="mx-2">/</span>
//           <span className="text-white">
//             {currentPage || title}
//           </span>
//         </div>

     
//       </div>

//       </div>
      
//     </section>
//   );
// };

// export default PageHeader;


import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  highlight,
  currentPage = "",
  image,
}) => {
  return (
    <section className="w-full min-h-[60vh] sm:min-h-[65vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden">

      {/* Main Wrapper */}
      <div className="relative flex items-center justify-center overflow-hidden 
                      w-[92%] sm:w-[94%] lg:w-full
                      h-[45vh] sm:h-[55vh] lg:h-[60vh]
                      ">

        {/* Background Image with Zoom Effect */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full opacity-10 h-full object-fill animate-zoom"
        />

        {/* Black Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/70 to-black/50" /> */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {title}{" "}
            <span className="text-(--first)">
              {highlight}
            </span>
          </h1>

          {/* Breadcrumb */}
          <div className="text-xs sm:text-sm text-gray-300 uppercase font-bold tracking-wider">
            <Link to="/" className="text-(--first) hover:opacity-80 transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">
              {currentPage || title}
            </span>
          </div>
        </div>
      </div>

      {/* Zoom Animation */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-zoom {
          animation: zoom 18s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default PageHeader;
