import React, { useEffect, useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import logodesign from '../../assets/Portfolio/Cover_Photo/Logo.jpg';
import videography from '../../assets/Portfolio/Cover_Photo/Video.jpg';
import catelogdesign from '../../assets/Portfolio/Cover_Photo/Brochure.jpg';
import holding from '../../assets/Portfolio/Cover_Photo/Out Door.jpg';
import stationarydesign from '../../assets/Portfolio/Cover_Photo/Stationery.jpg';
import RippleButton from "../CommonComponents/RippleButton";


// videography

import video1 from '../../assets/Portfolio/Videography/video (1).png';
import video2 from '../../assets/Portfolio/Videography/video (2).png';
import video3 from '../../assets/Portfolio/Videography/video (3).png';

// photography

import photo1 from '../../assets/Portfolio/02_Photography/Photo_01.jpg';
import photo2 from '../../assets/Portfolio/02_Photography/Photo_02.jpg';
import photo3 from '../../assets/Portfolio/02_Photography/Photo_03.jpg';
import photo4 from '../../assets/Portfolio/02_Photography/Photo_04.jpg';
import photo5 from '../../assets/Portfolio/02_Photography/Photo_05.jpg';
import photo6 from '../../assets/Portfolio/02_Photography/Photo_06.jpg';
import photo7 from '../../assets/Portfolio/02_Photography/Photo_07.jpg';
import photo8 from '../../assets/Portfolio/02_Photography/Photo_08.jpg';
import photo9 from '../../assets/Portfolio/02_Photography/Photo_09.jpg';
import photo10 from '../../assets/Portfolio/02_Photography/Photo_10.jpg';
import photo11 from '../../assets/Portfolio/02_Photography/Photo_11.jpg';
import photo12 from '../../assets/Portfolio/02_Photography/Photo_12.jpg';
import photo13 from '../../assets/Portfolio/02_Photography/Photo_13.jpg';
import photo14 from '../../assets/Portfolio/02_Photography/Photo_14.jpg';
import photo15 from '../../assets/Portfolio/02_Photography/Photo_15.jpg';
import photo16 from '../../assets/Portfolio/02_Photography/Photo_16.jpg';

// logodesign
import logo1 from '../../assets/Portfolio/03_Logo/01.jpg';
import logo2 from '../../assets/Portfolio/03_Logo/02.jpg';
import logo3 from '../../assets/Portfolio/03_Logo/03.jpg';
import logo4 from '../../assets/Portfolio/03_Logo/04.jpg';
import logo5 from '../../assets/Portfolio/03_Logo/05.jpg';
import logo6 from '../../assets/Portfolio/03_Logo/06.jpg';
import logo7 from '../../assets/Portfolio/03_Logo/07.jpg';
import logo8 from '../../assets/Portfolio/03_Logo/08.jpg';


// stationarydesign

import stationary1 from '../../assets/Portfolio/04_Stationery/01.jpg';
import stationary2 from '../../assets/Portfolio/04_Stationery/02.jpg';
import stationary3 from '../../assets/Portfolio/04_Stationery/03.jpg';
import stationary4 from '../../assets/Portfolio/04_Stationery/04.jpg';
import stationary5 from '../../assets/Portfolio/04_Stationery/05.jpg';
import stationary6 from '../../assets/Portfolio/04_Stationery/06.jpg';

// catelogdesign

import borchure1 from '../../assets/Portfolio/05_Brochure/01.jpg';
import borchure2 from '../../assets/Portfolio/05_Brochure/02.jpg';
import borchure3 from '../../assets/Portfolio/05_Brochure/03.jpg';
import borchure4 from '../../assets/Portfolio/05_Brochure/04.jpg';
import borchure5 from '../../assets/Portfolio/05_Brochure/05.jpg';
import borchure6 from '../../assets/Portfolio/05_Brochure/06.jpg';

// socialmediapost
import social from '../../assets/Portfolio/Cover_Photo/Social media.jpg';

import post1 from '../../assets/Portfolio/06_Social_Media/01.jpg';
import post2 from '../../assets/Portfolio/06_Social_Media/02.jpg';
import post3 from '../../assets/Portfolio/06_Social_Media/03.jpg';
import post4 from '../../assets/Portfolio/06_Social_Media/04.jpg';
import post5 from '../../assets/Portfolio/06_Social_Media/05.jpg';
import post6 from '../../assets/Portfolio/06_Social_Media/06.jpg';
import post7 from '../../assets/Portfolio/06_Social_Media/07.jpg';
import post8 from '../../assets/Portfolio/06_Social_Media/08.jpg';
import post9 from '../../assets/Portfolio/06_Social_Media/09.jpg';
import post10 from '../../assets/Portfolio/06_Social_Media/10.jpg';
import post11 from '../../assets/Portfolio/06_Social_Media/11.jpg';
import post12 from '../../assets/Portfolio/06_Social_Media/12.jpg';

// outdoorhoarding

import holding1 from '../../assets/Portfolio/07_Out_Door/01.jpg';
import holding2 from '../../assets/Portfolio/07_Out_Door/02.jpg';
import holding3 from '../../assets/Portfolio/07_Out_Door/03.jpg';
import holding4 from '../../assets/Portfolio/07_Out_Door/04.jpg';
import holding5 from '../../assets/Portfolio/07_Out_Door/05.jpg';
import holding6 from '../../assets/Portfolio/07_Out_Door/06.jpg';
import holding7 from '../../assets/Portfolio/07_Out_Door/07.jpg';
import holding8 from '../../assets/Portfolio/07_Out_Door/08.jpg';

//  packagingdesign

import packages from '../../assets/Portfolio/Cover_Photo/Packaging.jpg';
import package1 from '../../assets/Portfolio/08_Packaging/01.jpg';
import package2 from '../../assets/Portfolio/08_Packaging/02.jpg';
import package3 from '../../assets/Portfolio/08_Packaging/03.jpg';
import package4 from '../../assets/Portfolio/08_Packaging/04.jpg';
import package5 from '../../assets/Portfolio/08_Packaging/05.jpg';
import package6 from '../../assets/Portfolio/08_Packaging/06.jpg';
import package7 from '../../assets/Portfolio/08_Packaging/07.jpg';
import package8 from '../../assets/Portfolio/08_Packaging/08.jpg';

// paperprinting

import paper from '../../assets/Portfolio/Cover_Photo/Paper Printing.jpg';
import paper1 from '../../assets/Portfolio/09_Paper_Print/01.jpg';
import paper2 from '../../assets/Portfolio/09_Paper_Print/02.jpg';
import paper3 from '../../assets/Portfolio/09_Paper_Print/03.jpg';
import paper4 from '../../assets/Portfolio/09_Paper_Print/04.jpg';
import paper5 from '../../assets/Portfolio/09_Paper_Print/05.jpg';
import paper6 from '../../assets/Portfolio/09_Paper_Print/06.jpg';
import paper7 from '../../assets/Portfolio/09_Paper_Print/07.jpg';
import paper8 from '../../assets/Portfolio/09_Paper_Print/08.jpg';
import paper9 from '../../assets/Portfolio/09_Paper_Print/09.jpg';
import paper10 from '../../assets/Portfolio/09_Paper_Print/10.jpg';
import paper11 from '../../assets/Portfolio/09_Paper_Print/11.jpg';

const PortfolioSection = () => {
  const data = [
    {
      category: "Videography",
      cover:
        videography,
      works: [
        {
          title: "Brand Film",
          image:
            video1,
        },
        {
          title: "Corporate Video",
          image:
            video2,
        },
        {
          title: "Corporate Video",
          image:
            video3,
        },
      ],
    },
    {
      category: "Photography",
      cover:
        photo10,
      works: [
        {
          title: "Product Shoot",
          image:
            photo1,
        },
        {
          title: "Product Shoot",
          image:
            photo2,
        },
        {
          title: "Product Shoot",
          image:
            photo3,
        },
        {
          title: "Product Shoot",
          image:
            photo4,
        },
        {
          title: "Product Shoot",
          image:
            photo5,
        },
        {
          title: "Product Shoot",
          image:
            photo6,
        },
        {
          title: "Product Shoot",
          image:
            photo7,
        },
        {
          title: "Product Shoot",
          image:
            photo8,
        },
        {
          title: "Product Shoot",
          image:
            photo9,
        },
        {
          title: "Product Shoot",
          image:
            photo10,
        },
        {
          title: "Product Shoot",
          image:
            photo11,
        },
        {
          title: "Product Shoot",
          image:
            photo12,
        },
        {
          title: "Product Shoot",
          image:
            photo13,
        },
        {
          title: "Product Shoot",
          image:
            photo14,
        },
        {
          title: "Product Shoot",
          image:
            photo15,
        },
        {
          title: "Product Shoot",
          image:
            photo16,
        },
      ],
    },
    {
      category: "Logo",
      cover:
        logodesign,
      works: [
        {
          title: "Corporate Logo",
          image:
            logo1,
        },
        {
          title: "Corporate Logo",
          image:
            logo2,
        },
        {
          title: "Corporate Logo",
          image:
            logo3,
        },
        {
          title: "Corporate Logo",
          image:
            logo4,
        },
        {
          title: "Corporate Logo",
          image:
            logo5,
        },
        {
          title: "Corporate Logo",
          image:
            logo6,
        },
        {
          title: "Corporate Logo",
          image:
            logo7,
        },
        {
          title: "Corporate Logo",
          image:
            logo8,
        },

      ],
    },
    {
      category: "Stationery Design",
      cover:
        stationarydesign,
      works: [
        {
          title: "Business Card",
          image:
            stationary1,
        },
        {
          title: "Business Card",
          image:
            stationary2,
        },
        {
          title: "Business Card",
          image:
            stationary3,
        },
        {
          title: "Business Card",
          image:
            stationary4,
        },
        {
          title: "Business Card",
          image:
            stationary5,
        },
        {
          title: "Business Card",
          image:
            stationary6,
        },
      ],
    },
    {
      category: "Brochure Design",
      cover:
        catelogdesign,
      works: [
        {
          title: "Corporate Brochure",
          image:
            borchure1,
        },
        {
          title: "Corporate Brochure",
          image:
            borchure2,
        },
        {
          title: "Corporate Brochure",
          image:
            borchure3,
        },
        {
          title: "Corporate Brochure",
          image:
            borchure4,
        },
        {
          title: "Corporate Brochure",
          image:
            borchure5,
        },
        {
          title: "Corporate Brochure",
          image:
            borchure6,
        },
      ],
    },
    {
      category: "Social Media Branding",
      cover:
        social,
      works: [
        {
          title: "Social Media Post",
          image:
            post1,
        },
        {
          title: "Social Media Post",
          image:
            post2,
        },
        {
          title: "Social Media Post",
          image:
            post3,
        },
        {
          title: "Social Media Post",
          image:
            post4,
        },
        {
          title: "Social Media Post",
          image:
            post5,
        },
        {
          title: "Social Media Post",
          image:
            post6,
        },
        {
          title: "Social Media Post",
          image:
            post7,
        },
        {
          title: "Social Media Post",
          image:
            post8,
        },
        {
          title: "Social Media Post",
          image:
            post9,
        },
        {
          title: "Social Media Post",
          image:
            post10,
        },
        {
          title: "Social Media Post",
          image:
            post11,
        },
        {
          title: "Social Media Post",
          image:
            post12,
        },
      ],
    },
    {
      category: "Outdoor Hoarding Banners",
      cover:
        holding,
      works: [
        {
          title: "Hoarding Design",
          image:
            holding1,
        },
        {
          title: "Hoarding Design",
          image:
            holding2,
        },
        {
          title: "Hoarding Design",
          image:
            holding3,
        },
        {
          title: "Hoarding Design",
          image:
            holding4,
        },
        {
          title: "Hoarding Design",
          image:
            holding5,
        },
        {
          title: "Hoarding Design",
          image:
            holding6,
        },
        {
          title: "Hoarding Design",
          image:
            holding7,
        },
        {
          title: "Hoarding Design",
          image:
            holding8,
        },
      ],
    },
    {
      category: "Packaging Design",
      cover:
        packages,
      works: [
        {
          title: "Product Packaging",
          image:
            package1,
        },
        {
          title: "Product Packaging",
          image:
            package2,
        },
        {
          title: "Product Packaging",
          image:
            package3,
        },
        {
          title: "Product Packaging",
          image:
            package4,
        },
        {
          title: "Product Packaging",
          image:
            package5,
        },
        {
          title: "Product Packaging",
          image:
            package6,
        },
        {
          title: "Product Packaging",
          image:
            package7,
        },
        {
          title: "Product Packaging",
          image:
            package8,
        },
      ],
    },
    {
      category: "Paper Printing",
      cover:
        paper,
      works: [
        {
          title: "Print Media",
          image:
            paper1,
        },
        {
          title: "Print Media",
          image:
            paper2,
        },
        {
          title: "Print Media",
          image:
            paper3,
        },
        {
          title: "Print Media",
          image:
            paper4,
        },
        {
          title: "Print Media",
          image:
            paper5,
        },
        {
          title: "Print Media",
          image:
            paper6,
        },
        {
          title: "Print Media",
          image:
            paper7,
        },
        {
          title: "Print Media",
          image:
            paper8,
        },
        {
          title: "Print Media",
          image:
            paper9,
        },
        {
          title: "Print Media",
          image:
            paper10,
        },
        {
          title: "Print Media",
          image:
            paper11,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="bg-(--dark-black) text-white border-t border-white/5">
      <div className="container mx-auto">

        <div className="w-full flex md:flex-row flex-col justify-between items-center border-b border-white/5 py-14 px-10">
          <div>
            <p className="text-md text-(--first) mb-2">// Portfolio</p>
            <h2 className="text-3xl lg:text-6xl font-semibold leading-tight">
              Our <span className="text-(--first)">Creative Work</span>
            </h2>
          </div>
          <p className="text-gray-400 md:w-xl mt-6 md:mt-0">
            A curated selection of our branding, design, photography, and
            visual storytelling projects — crafted with creativity and purpose.
          </p>
        </div>
        {/* ================= MAIN CATEGORY VIEW ================= */}
        {!activeCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveCategory(item)}
                className="relative cursor-pointer overflow-hidden
                           border border-white/5 
                           transition-all duration-500 p-15"
              >
                {/* Background Image */}
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-110 object-cover hover:scale-105 rounded-3xl duration-1000"
                />

                {/* Dark Overlay */}
                {/* <div className="absolute inset-0 bg-black/20" /> */}

                {/* Content Box */}
                <div className="absolute bottom-20 left-20 right-66
                                bg-black/60 backdrop-blur-md
                                rounded-xl p-6">
                  <p className="text-2xl text-gray-300 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <span className="text-sm text-(--first)">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= INSIDE CATEGORY VIEW ================= */}
        {activeCategory && (
          <>


            <button
              onClick={() => setActiveCategory(null)}
              className="my-10 px-10"
            >
              <RippleButton className="">Back to portfolio</RippleButton>

            </button>



            <div className="grid grid-cols-1 md:grid-cols-2">
              {activeCategory.works.map((work, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(work.image)}
                  className="relative cursor-pointer p-15 overflow-hidden
                             border border-white/5 
                             transition-all"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-100 object-contain rounded-3xl hover:scale-105 duration-1000"
                  />

                  {/* <div className="absolute inset-0 bg-black/50" /> */}

                  {/* <div className="absolute bottom-6 left-6 right-66
                                  bg-black/60 backdrop-blur-md
                                  rounded-xl p-6">
                    <h4 className="text-xl font-semibold">
                      {work.title}
                    </h4>
                      
                  </div> */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ================= FULL SCREEN IMAGE ================= */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white hover:text-(--first)"
          >
            <X size={36} />
          </button>
          <img
            src={activeImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-3xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
