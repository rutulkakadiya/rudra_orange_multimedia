import React, { useEffect, useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import logodesign from '../../assets/ServicesImg/logodesign.jpg';
import photography from '../../assets/ServicesImg/photography.jpg';
import videography from '../../assets/ServicesImg/videography.jpg';
import catelogdesign from '../../assets/ServicesImg/catelogdesign.jpg';
import stationarydesign from '../../assets/ServicesImg/stationarydesign.jpg';
import socialmediapost from '../../assets/ServicesImg/sosicalmedia post.jpg';
import packagingdesign from '../../assets/ServicesImg/pacakgingdesign.jpg';
import RippleButton from "../CommonComponents/RippleButton";

// logodesign
import logo1 from '../../assets/Logo/logo (1).jpg';
import logo2 from '../../assets/Logo/logo (2).jpg';
import logo3 from '../../assets/Logo/logo (3).jpg';
import logo4 from '../../assets/Logo/logo (4).jpg';
import logo5 from '../../assets/Logo/logo (5).jpg';
import logo6 from '../../assets/Logo/logo (6).jpg';
import logo7 from '../../assets/Logo/logo (7).jpg';
import logo8 from '../../assets/Logo/logo (8).jpg';

// videography

import video1 from '../../assets/Videography/video (1).png';
import video2 from '../../assets/Videography/video (2).png';
import video3 from '../../assets/Videography/video (3).png';

// photography

import photo1 from '../../assets/Photography/p (1).jpg';
import photo2 from '../../assets/Photography/p (2).jpg';
import photo3 from '../../assets/Photography/p (3).jpg';
import photo4 from '../../assets/Photography/p (4).jpg';
import photo5 from '../../assets/Photography/p (5).jpg';
import photo6 from '../../assets/Photography/p (6).jpg';
import photo7 from '../../assets/Photography/p (7).jpg';
import photo8 from '../../assets/Photography/p (8).jpg';
import photo9 from '../../assets/Photography/photography (1).jpg';
import photo10 from '../../assets/Photography/photography (3).jpg';

// stationarydesign

import stationary1 from '../../assets/StationeryDesign/stationary (1).jpg';
import stationary2 from '../../assets/StationeryDesign/stationary (2).jpg';
import stationary3 from '../../assets/StationeryDesign/stationary (3).jpg';
import stationary4 from '../../assets/StationeryDesign/stationary (4).jpg';
import stationary5 from '../../assets/StationeryDesign/stationary (5).jpg';
import stationary6 from '../../assets/StationeryDesign/stationary (6).jpg';
import stationary7 from '../../assets/StationeryDesign/stationary (7).jpg';
import stationary8 from '../../assets/StationeryDesign/stationry (8).jpg';

// catelogdesign

import borchure1 from '../../assets/BrochureDesign/brochure (1).jpg';
import borchure2 from '../../assets/BrochureDesign/brochure (2).jpg';
import borchure3 from '../../assets/BrochureDesign/brochure (3).jpg';
import borchure4 from '../../assets/BrochureDesign/brochure (4).jpg';

// socialmediapost

import post1 from '../../assets/SocialMediaBranding/post (1).jpg';
import post2 from '../../assets/SocialMediaBranding/post (2).jpg';
import post3 from '../../assets/SocialMediaBranding/post (3).jpg';
import post4 from '../../assets/SocialMediaBranding/post (4).jpg';
import post5 from '../../assets/SocialMediaBranding/post (5).jpg';
import post6 from '../../assets/SocialMediaBranding/post (6).jpg';
import post7 from '../../assets/SocialMediaBranding/post (7).jpg';
import social from '../../assets/SocialMediaBranding/social.jpg';

// outdoorhoarding

import holding1 from '../../assets/OutdoorHoardingBanners/holding (1).jpg';
import holding2 from '../../assets/OutdoorHoardingBanners/holding (2).jpg';
import holding3 from '../../assets/OutdoorHoardingBanners/holding (3).jpg';
import holding4 from '../../assets/OutdoorHoardingBanners/holding (4).jpg';
import holding5 from '../../assets/OutdoorHoardingBanners/holding (5).jpg';
import holding6 from '../../assets/OutdoorHoardingBanners/holding (6).jpg';
import holding7 from '../../assets/OutdoorHoardingBanners/holding (7).jpg';
import holding8 from '../../assets/OutdoorHoardingBanners/holding (8).jpg';

//  packagingdesign

import package1 from '../../assets/PackagingDesing/packaging (1).jpg';
import package2 from '../../assets/PackagingDesing/packaging (2).jpg';
import package3 from '../../assets/PackagingDesing/packaging (3).jpg';
import package4 from '../../assets/PackagingDesing/packaging (4).jpg';
import package5 from '../../assets/PackagingDesing/packaging (5).jpg';
import package6 from '../../assets/PackagingDesing/packaging (6).jpg';
import package7 from '../../assets/PackagingDesing/packaging (7).jpg';
import package8 from '../../assets/PackagingDesing/packaging (8).jpg';

// paperprinting

import paper1 from '../../assets/PaperPrinting/paper (1).jpg';
import paper2 from '../../assets/PaperPrinting/paper (2).jpg';
import paper3 from '../../assets/PaperPrinting/paper (3).jpg';
import paper4 from '../../assets/PaperPrinting/paper (4).jpg';
import paper5 from '../../assets/PaperPrinting/paper (5).jpg';
import paper6 from '../../assets/PaperPrinting/paper (6).jpg';
import paper7 from '../../assets/PaperPrinting/paper (7).jpg';
import paper8 from '../../assets/PaperPrinting/paper (8).jpg';
import paper9 from '../../assets/PaperPrinting/paper (9).jpg';
import paper10 from '../../assets/PaperPrinting/paper (10).jpg';

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
      ],
    },
    {
      category: "Logo",
      cover:
        logo8,
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
        {
          title: "Business Card",
          image:
           stationary7,
        },
        {
          title: "Business Card",
          image:
           stationary8,
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
      ],
    },
    {
      category: "Social Media Branding",
      cover:
        social,
      works: [
        {
          title: "Instagram Campaign",
          image:
           post1,
        },
        {
          title: "Instagram Campaign",
          image:
           post2,
        },
        {
          title: "Instagram Campaign",
          image:
           post3,
        },
        {
          title: "Instagram Campaign",
          image:
           post4,
        },
        {
          title: "Instagram Campaign",
          image:
           post5,
        },
        {
          title: "Instagram Campaign",
          image:
           post6,
        },
        {
          title: "Instagram Campaign",
          image:
           post7,
        },
      ],
    },
    {
      category: "Outdoor Hoarding Banners",
      cover:
        holding1,
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
        package4,
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
        paper6,
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
