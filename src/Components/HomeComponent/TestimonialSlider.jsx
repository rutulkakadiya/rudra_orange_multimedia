// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const TestimonialSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       text: "Working with this IT team has transformed our business operations. Their expertise in cloud solutions and cybersecurity has given us peace of mind and improved efficiency across all departments.",
//       name: "Sarah Mitchell",
//       position: "CTO, TechVenture Inc",
//       bg: "orange"
//     },
//     {
//       text: "The level of professionalism and technical knowledge is outstanding. They delivered our complex enterprise software on time and exceeded our expectations in every way possible.",
//       name: "Michael Chen",
//       position: "Director of IT, GlobalSoft",
//       bg: "black"
//     },
//     {
//       text: "Their innovative approach to problem-solving and commitment to excellence made them an invaluable partner. Our digital transformation wouldn't have been possible without their expertise.",
//       name: "Jennifer Adams",
//       position: "VP Technology, DataCorp",
//       bg: "orange"
//     },
//     {
//       text: "Exceptional service and support throughout our entire project lifecycle. The team's dedication to understanding our unique needs resulted in a solution that perfectly fits our requirements.",
//       name: "David Rodriguez",
//       position: "IT Manager, CloudSystems",
//       bg: "black"
//     },
//     {
//       text: "Their cutting-edge solutions and proactive approach to IT infrastructure management have significantly reduced our downtime and improved our overall system performance.",
//       name: "Emily Thompson",
//       position: "CEO, InnovateTech",
//       bg: "orange"
//     },
//     {
//       text: "From initial consultation to deployment and ongoing support, every interaction has been professional and productive. They truly understand the modern IT landscape.",
//       name: "Robert Johnson",
//       position: "COO, SecureNet Solutions",
//       bg: "black"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-8">
//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//         {/* Left Side - Heading and Pagination */}
//         <div className="space-y-8">
//           <div>
//             <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               What our customers think
//             </h2>
//             <p className="text-gray-400 text-lg leading-relaxed">
//               Discover how we've helped businesses transform their IT infrastructure
//               and achieve their digital goals through innovative solutions and dedicated support.
//             </p>
//           </div>

//           {/* Pagination */}
//           <div className="flex items-center gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-1 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? 'bg-white w-16'
//                     : 'bg-gray-600 w-12 hover:bg-gray-500'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <div className="flex gap-4">
//             <button
//               onClick={prevSlide}
//               className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Testimonial Card */}
//         <div className="relative">
//           <div
//             className={`${
//               testimonials[currentSlide].bg === 'orange'
//                 ? 'bg-orange-500'
//                 : 'bg-black border-2 border-gray-800'
//             } p-12 rounded-2xl shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col justify-between`}
//           >
//             {/* Logo/Icon */}
//             <div className="mb-8">
//               <div className={`w-16 h-16 ${
//                 testimonials[currentSlide].bg === 'orange'
//                   ? 'bg-white'
//                   : 'bg-white'
//               } rounded-lg flex items-center justify-center`}>
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="w-10 h-10"
//                   stroke={testimonials[currentSlide].bg === 'orange' ? '#000' : '#000'}
//                   strokeWidth="2"
//                 >
//                   <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                   <path d="M2 17l10 5 10-5" />
//                   <path d="M2 12l10 5 10-5" />
//                 </svg>
//               </div>
//             </div>

//             {/* Testimonial Text */}
//             <blockquote
//               className={`${
//                 testimonials[currentSlide].bg === 'orange'
//                   ? 'text-white'
//                   : 'text-white'
//               } text-xl lg:text-2xl font-light italic leading-relaxed mb-8`}
//             >
//               "{testimonials[currentSlide].text}"
//             </blockquote>

//             {/* Author Info */}
//             <div>
//               <p
//                 className={`${
//                   testimonials[currentSlide].bg === 'orange'
//                     ? 'text-white'
//                     : 'text-white'
//                 } font-bold text-xl mb-1`}
//               >
//                 {testimonials[currentSlide].name}
//               </p>
//               <p
//                 className={`${
//                   testimonials[currentSlide].bg === 'orange'
//                     ? 'text-white/90'
//                     : 'text-gray-400'
//                 } text-base`}
//               >
//                 {testimonials[currentSlide].position}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Really good experience with this branding agency...The designs were creative and the work was delivered on time...Happy with the overall service.",
      name: "Krunal Movaliya",
      position: "Gold Lion Resort",
      bg: "orange",
    },
    {
      text: "Good branding agency with creative design ideas, Smooth process and timely delivery, Satisfied with their work.",
      name: "Krunal Mehta",
      position: "Honest Restaurant",
      bg: "black",
    },
    {
      text: "Excellent branding agency! Very creative design work with great attention to detail. Timely delivery and smooth coordination throughout the project. Highly recommended for branding and design services.",
      name: "Vijay Bhai",
      position: "Dharvi Consultant Pvt. Ltd.",
      bg: "orange",
    },
    {
      text: "Creative designs with fast response and good support throughout the project. Happy with the service.",
      name: "Gaurav Markana",
      position: "American Color & Kohinoor Color",
      bg: "black",
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden p-8">
      <div className="w-px h-full bg-white/5 absolute"></div>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side - Heading and Pagination */}
        <div className="space-y-8 flex flex-col justify-center p-4 text-white h-full ">
          <div>
            <div>
              <p className="text-md text-(--first) mb-2">// Clients</p>

              <h2 className="text-2xl lg:text-6xl font-semibold leading-tight mb-5 md:w-xl">
                Hear From <span className="text-(--first)">Our Happy </span>
                Clients
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Discover how we've helped businesses transform their Branding
              infrastructure and achieve their digital goals through innovative
              solutions and dedicated support.
            </p>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all cursor-pointer duration-300 ${
                  index === currentSlide
                    ? "bg-white w-16"
                    : "bg-gray-600 w-12 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white cursor-pointer text-black rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white cursor-pointer text-black rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side - Stacked Testimonial Cards */}
        <div className="relative h-[500px] p-4">
          {testimonials.map((testimonial, index) => {
            const position = index - currentSlide;
            const isActive = index === currentSlide;
            const isNext = position === 1;
            const isNextNext = position === 2;

            return (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-out ${
                  isActive
                    ? "z-30 translate-x-0 scale-100 opacity-100"
                    : isNext
                    ? "z-20 translate-x-8 scale-95 opacity-60"
                    : isNextNext
                    ? "z-10 translate-x-16 scale-90 opacity-30"
                    : position > 2
                    ? "z-0 translate-x-20 scale-85 opacity-0"
                    : "z-0 -translate-x-20 scale-85 opacity-0"
                }`}
              >
                <div
                  className={`${
                    testimonial.bg === "orange" ? "bg-(--first)" : "bg-black "
                  } p-12 rounded-2xl  min-h-[500px] flex flex-col justify-between`}
                >
                  {/* Logo/Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10 h-10"
                        stroke="#000"
                        strokeWidth="2"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-white text-xl lg:text-2xl font-light italic leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <p className="text-white font-bold text-xl mb-1">
                      {testimonial.name}
                    </p>
                    <p
                      className={`${
                        testimonial.bg === "orange"
                          ? "text-white/90"
                          : "text-gray-400"
                      } text-base`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
