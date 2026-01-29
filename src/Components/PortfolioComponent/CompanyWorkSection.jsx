// import React, { useState } from "react";
// import { X, ArrowLeft } from "lucide-react";
// import photography from '../../assets/ServicesImg/photography.jpg';
// import videography from '../../assets/ServicesImg/videography.jpg';
// import catelogdesign from '../../assets/ServicesImg/catelogdesign.jpg';
// import stationarydesign from '../../assets/ServicesImg/stationarydesign.jpg';
// import socialmediapost from '../../assets/ServicesImg/sosicalmedia post.jpg';
// import packagingdesign from '../../assets/ServicesImg/pacakgingdesign.jpg';
// import logodesign from '../../assets/ServicesImg/logodesign.jpg';


// const CompanyWorkSection = () => {
//   /* ================= DATA ================= */

//   const companies = [
//     {
//       name: "company 1",
//       cover:
//        packagingdesign,
//       works: [
//         {
//           title: "Company Logo Design",
//           image:
//             logodesign,
//         },
//         {
//           title: "Corporate Brochure",
//           image:
//             catelogdesign,
//         },
//         {
//           title: "Visiting Card Design",
//           image:
//             stationarydesign,
//         },
//       ],
//     },
//     {
//       name: "company 2",
//       cover:
//        photography,
//       works: [
//         {
//           title: "Brand Identity System",
//           image:
//             logodesign,
//         },
//         {
//           title: "Corporate Profile Design",
//           image:
//             videography,
//         },
//       ],
//     },
//     {
//       name: "company 3",
//       cover:
//         stationarydesign,
//       works: [
//         {
//           title: "Product Packaging",
//           image:
//             packagingdesign,
//         },
//         {
//           title: "Social Media Creatives",
//           image:
//             socialmediapost,
//         },
//         {
//           title: "Catalog Design",
//           image:
//             catelogdesign,
//         },
//       ],
//     },
//     {
//       name: "company 4",
//       cover:
//        socialmediapost,
//       works: [
//         {
//           title: "Industrial Branding",
//           image:
//             photography,
//         },
//         {
//           title: "Product Brochure",
//           image:
//            stationarydesign,
//         },
//       ],
//     },
//   ];

//   /* ================= STATE ================= */

//   const [activeCompany, setActiveCompany] = useState(null);
//   const [activeImage, setActiveImage] = useState(null);

//   return (
//     <section className="bg-(--dark-black) text-white border-t border-white/5">
//       <div className="container mx-auto">

//         {/* ================= HEADING ================= */}
//           <div className="w-full flex md:flex-row flex-col justify-between items-center border-b border-white/5 py-14 px-10">
//           <div>
//             <p className="text-md text-(--first) mb-2">// Case Studies</p>
//              <h2 className="text-3xl lg:text-6xl font-semibold leading-tight">
//             Brand <span className="text-(--first)">Stories</span> We’ve <br /> Built
//           </h2>
//           </div>
//          <p className="text-gray-400 max-w-2xl mt-4">
//             Explore complete brand journeys — from identity creation to
//             marketing collaterals — crafted for diverse industries.
//           </p>
//         </div>
    

//         {/* ================= COMPANY LIST ================= */}
//         {!activeCompany && (
//           <div className="grid grid-cols-1 md:grid-cols-2 ">
//             {companies.map((company, i) => (
//               <div
//                 key={i}
//                 onClick={() => setActiveCompany(company)}
//                 className="relative cursor-pointer overflow-hidden
//                            border border-white/5 
//                            transition-all duration-500 p-15"
//               >
//                 <img
//                   src={company.cover}
//                   alt={company.name}
//                   className="w-full h-110 object-cover rounded-3xl hover:scale-105 transition-transform duration-1000"
//                 />


//                 <div className="absolute bottom-20 left-20 right-66
//                                 bg-black/60 backdrop-blur-md
//                                 rounded-xl p-6">
//                   <p className="text-sm text-gray-300 mb-1">
//                     Complete Brand Work
//                   </p>
//                   <h3 className="text-2xl mb-2">
//                     {company.name}
//                   </h3>
//                   <span className="text-sm text-(--first)">
//                     View Case Study →
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ================= COMPANY WORKS ================= */}
//         {activeCompany && (
//           <>
//           <div className="px-10 flex justify-between items-center py-10">
//             <button
//               onClick={() => setActiveCompany(null)}
//               className="flex items-center gap-2 text-(--first)"
//             >
//               <ArrowLeft size={18} /> Back to Companies
//             </button>

//             <h3 className="text-2xl lg:text-4xl font-semibold">
//               {activeCompany.name} – Brand Deliverables
//             </h3>

//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {activeCompany.works.map((work, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setActiveImage(work.image)}
//                   className="relative cursor-pointer overflow-hidden
//                              border border-white/5 p-15
//                              transition-all duration-500"
//                 >
//                   <img
//                     src={work.image}
//                     alt={work.title}
//                     className="w-full h-100 object-cover rounded-3xl hover:scale-105 transition-transform duration-1000"
//                   />


//                   <div className="absolute bottom-20 left-20 right-66
//                                   bg-black/60 backdrop-blur-md
//                                   rounded-xl p-6">
//                     <h4 className="text-xl font-semibold">
//                       {work.title}
//                     </h4>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* ================= FULL SCREEN IMAGE ================= */}
//       {activeImage && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
//           <button
//             onClick={() => setActiveImage(null)}
//             className="absolute top-6 right-6 text-white hover:text-(--first)"
//           >
//             <X size={36} />
//           </button>

//           <img
//             src={activeImage}
//             alt="Preview"
//             className="max-w-[90%] max-h-[90%] rounded-3xl object-contain"
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default CompanyWorkSection;



import React, { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

import photography from "../../assets/ServicesImg/photography.jpg";
import videography from "../../assets/ServicesImg/videography.jpg";
import catelogdesign from "../../assets/ServicesImg/catelogdesign.jpg";
import stationarydesign from "../../assets/ServicesImg/stationarydesign.jpg";
import socialmediapost from "../../assets/ServicesImg/sosicalmedia post.jpg";
import packagingdesign from "../../assets/ServicesImg/pacakgingdesign.jpg";
import logodesign from "../../assets/ServicesImg/logodesign.jpg";

const CompanyWorkSection = ({ activeCompany, onToggle }) => {
  /* ================= DATA ================= */

  const companies = [
    {
      name: "Company 1",
      cover: packagingdesign,
      works: [
        { title: "Logo Design", image: logodesign },
        { title: "Brochure Design", image: catelogdesign },
        { title: "Stationery Design", image: stationarydesign },
      ],
    },
    {
      name: "Company 2",
      cover: photography,
      works: [
        { title: "Brand Identity", image: logodesign },
        { title: "Corporate Video", image: videography },
      ],
    },
    {
      name: "Company 3",
      cover: stationarydesign,
      works: [
        { title: "Packaging Design", image: packagingdesign },
        { title: "Social Media Creatives", image: socialmediapost },
        { title: "Catalog Design", image: catelogdesign },
      ],
    },
    {
      name: "Company 4",
      cover: socialmediapost,
      works: [
        { title: "Photography", image: photography },
        { title: "Product Brochure", image: stationarydesign },
      ],
    },
  ];

  /* ================= LOCAL STATE ================= */

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-(--dark-black) text-white border-t border-white/5">
      <div className="container mx-auto">

        {/* ================= HEADING (ONLY WHEN LIST VIEW) ================= */}
        {!activeCompany && (
          <div className="w-full flex md:flex-row flex-col justify-between items-center border-b border-white/5 py-14 px-10">
            <div>
              <p className="text-md text-(--first) mb-2">// Case Studies</p>
              <h2 className="text-3xl lg:text-6xl font-semibold leading-tight">
                Brand <span className="text-(--first)">Stories</span> We’ve <br /> Built
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mt-4">
              Explore complete brand journeys — from identity creation to
              marketing collaterals — crafted for diverse industries.
            </p>
          </div>
        )}

        {/* ================= COMPANY LIST ================= */}
        {!activeCompany && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {companies.map((company, i) => (
              <div
                key={i}
                onClick={() => onToggle(company)}
                className="relative cursor-pointer overflow-hidden
                           border border-white/5 p-15"
              >
                <img
                  src={company.cover}
                  alt={company.name}
                  className="w-full h-110 object-cover rounded-3xl
                             hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute bottom-20 left-20 right-66
                                bg-black/60 backdrop-blur-md
                                rounded-xl p-6">
                  <p className="text-sm text-gray-300 mb-1">
                    Complete Brand Work
                  </p>
                  <h3 className="text-2xl mb-2">
                    {company.name}
                  </h3>
                  <span className="text-sm text-(--first)">
                    View Case Study →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= COMPANY DETAIL VIEW ================= */}
        {activeCompany && (
          <>
            <div className="px-10 flex justify-between items-center py-10">
              <button
                onClick={() => onToggle(null)}
                className="flex items-center gap-2 text-(--first)"
              >
                <ArrowLeft size={18} /> Back to Companies
              </button>

              <h3 className="text-2xl lg:text-4xl font-semibold">
                {activeCompany.name} – Brand Deliverables
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {activeCompany.works.map((work, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(work.image)}
                  className="relative cursor-pointer overflow-hidden
                             border border-white/5 p-15"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-100 object-cover rounded-3xl
                               hover:scale-105 transition-transform duration-1000"
                  />

                  <div className="absolute bottom-20 left-20 right-66
                                  bg-black/60 backdrop-blur-md
                                  rounded-xl p-6">
                    <h4 className="text-xl font-semibold">
                      {work.title}
                    </h4>
                  </div>
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

export default CompanyWorkSection;
