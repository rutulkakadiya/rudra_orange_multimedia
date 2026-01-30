// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef, useState } from "react";

// const Project = () => {
//   return (
//     <div className="container mx-auto border border-white/5 ">
//       <div className="w-full pt-20 flex justify-between items-center px-10 text-white">
//         <div>
//           <p className="text-md text-(--first) mb-2">// Projects</p>

//           <h2 className="text-4xl lg:text-6xl font-semibold leading-tight mb-5">
//             Your <span className="text-orange-500">trusted partner</span> <br />{" "}
//             for business
//           </h2>

//         </div>

//         <div>
//           <p className="text-gray-400 leading-7 mb-6 w-2xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
//             sunt soluta eligendi corporis iusto beatae nobis dolore nostrum,
//             cumque molestias perferendis magnam nam doloremque aut reiciendis
//             sapiente laudantium vel. Sed.
//           </p>
//           <div className="h-1 w-20 bg-orange-500"></div>

//         </div>
//       </div>
//       <HorizontalScrollCarousel />
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh]">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div>
//         {/* IMAGE CARD */}
//         <div
//           className="group relative h-[450px] w-[450px] overflow-hidden border border-white/5 cursor-pointer"
//           onClick={() => setOpen(true)}
//         >
//           <img
//             src={card.url}
//             alt={card.title}
//             className="w-full h-full object-cover p-7 transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>

//         {/* TITLE BELOW IMAGE */}
//         <p className="text-white border border-white/5 text-3xl font-bold py-4 px-10 uppercase tracking-wide">
//           {card.title}
//         </p>
//       </div>

//       {/* FULLSCREEN MODAL */}
//     </>
//   );
// };

// export default Project;

// // cards
// const cards = [
//   {
//     url: "https://i.pinimg.com/736x/38/9e/8d/389e8d2f8df547b6c6ae4180495675ac.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "https://i.pinimg.com/736x/3c/e4/3e/3ce43e00625485af5d185935b80a68bc.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "https://i.pinimg.com/1200x/21/0c/22/210c22ae1d578cc50ad1b201fd7c9ef0.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "https://i.pinimg.com/1200x/57/5a/4d/575a4d10aca9c90cc706527c10f00cc8.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "https://i.pinimg.com/736x/23/0e/30/230e306f9fc5c35cfe5e1062bf1ce7c3.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "https://i.pinimg.com/1200x/87/04/60/8704603f2007113127bd5716fb1f53c7.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "https://i.pinimg.com/736x/c6/93/45/c693458c2a7d58aa92fcc6631e74e7e5.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import RippleButton from "../CommonComponents/RippleButton";
import logodesign from '../../assets/Portfolio/Cover_Photo/Logo.jpg';
import photography from '../../assets/Portfolio/02_Photography/Photo_10.jpg';
import videography from '../../assets/Portfolio/Cover_Photo/Video.jpg';
import catelogdesign from '../../assets/Portfolio/Cover_Photo/Brochure.jpg';
import stationarydesign from '../../assets/Portfolio/Cover_Photo/Stationery.jpg';
import socialmediapost from '../../assets/Portfolio/Cover_Photo/Social media.jpg';
import packagingdesign from '../../assets/Portfolio/Cover_Photo/Packaging.jpg';
import paperprinting from '../../assets/Portfolio/Cover_Photo/Paper Printing.jpg';
import outdoorhoarding from '../../assets/Portfolio/Cover_Photo/Out Door.jpg';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="container mx-auto border border-white/5 ">
      <div className="w-full pt-20 flex md:flex-row flex-col justify-between items-center px-10 text-white">
        <div>
          <p className="text-md text-(--first) mb-2">// Featured Work</p>

          <h2 className="text-2xl lg:text-6xl font-semibold leading-tight mb-5 md:w-xl">
            Explore  Our   <span className="text-(--first)">Creative Projects </span>
            that speak's
          </h2>
        </div>

        <div>
          <p className="text-gray-400 leading-7 mb-6 md:w-xl">
            From digital experiences to branding visuals — every project is
            crafted with precision, creativity, and modern aesthetics. Explore
            our featured work below and see how we transform ideas into visual
            impact.
          </p>
          <div className="h-1 w-20 bg-(--first)"></div>
        </div>
      </div>

      <HorizontalScrollCarousel />

      <div className="w-full flex justify-center -translate-y-13 mt-[30px]">
        <Link to='/portfolio'>
          <RippleButton>View All Projects</RippleButton>
        </Link>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden py-10 w-full max-w-[1400px] mx-auto group">

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-(--first) text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-(--first) text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-4"
            animate={{ x: `-${index * (450 + 16)}px` }} // 450px card width + 16px gap
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link to='/portfolio'>
        <div>
          {/* IMAGE CARD */}
          <div
            className="group relative h-[450px] w-[450px] overflow-hidden border border-white/5 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              src={card.url}
              alt={card.title}
              className="w-full h-full object-cover p-7 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* TITLE BELOW IMAGE */}
          <p className="text-white border border-white/5 text-3xl font-bold py-4 px-10 uppercase tracking-wide">
            {card.title}
          </p>
        </div>

      </Link>
      {/* FULLSCREEN MODAL — will add if required */}
    </>
  );
};

export default Project;

// ----------------------------------
// CARDS DATA
// ----------------------------------
const cards = [
  {
    url: videography,
    title: "Videography",
    id: 1,
  },
  {
    url: photography,
    title: "Photography",
    id: 2,
  },
  {
    url: logodesign,
    title: "Logo Design",
    id: 3,
  },

  {
    url: stationarydesign,
    title: "Stationary Design",
    id: 4,
  },

  {
    url: catelogdesign,
    title: "Catalog Design",
    id: 5,
  },

  {
    url: socialmediapost,
    title: "Social Media",
    id: 6,
  },
  {
    url: outdoorhoarding,
    title: "Outdoor Hoarding",
    id: 7,
  },
  {
    url: packagingdesign,
    title: "Packaging Design",
    id: 8,
  },
  {
    url: paperprinting,
    title: "Paper Printing",
    id: 9,
  },
];
