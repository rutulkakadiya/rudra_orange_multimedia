// import React from 'react';

// const PartnerScroll = () => {
//   // Partner logos data - you can replace these with actual logo URLs
//   const partners = [
//     { name: 'Microsoft', color: '#00A4EF' },
//     { name: 'Google', color: '#4285F4' },
//     { name: 'Amazon', color: '#FF9900' },
//     { name: 'IBM', color: '#0530AD' },
//     { name: 'Oracle', color: '#F80000' },
//     { name: 'SAP', color: '#0FAAFF' },
//     { name: 'Salesforce', color: '#00A1E0' },
//     { name: 'Adobe', color: '#FF0000' },
//     { name: 'Intel', color: '#0071C5' },
//     { name: 'Cisco', color: '#049FD9' },
//     { name: 'Dell', color: '#007DB8' },
//     { name: 'HP', color: '#0096D6' }
//   ];

//   // Duplicate the array for seamless loop
//   const duplicatedPartners = [...partners, ...partners];

//   return (
//     <div className="py-20 px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       

//         {/* Right Side - Scrolling Logos (70%) */}
//         <div className="lg:w-[70%] w-full relative">
//           <div className="overflow-hidden">
//             {/* First Row - Scroll Left to Right */}
//             <div className="flex mb-8 animate-scroll-right">
//               {duplicatedPartners.map((partner, index) => (
//                 <div
//                   key={`row1-${index}`}
//                   className="flex-shrink-0 mx-6 rounded-xl p-8 w-48 h-32 flex items-center justify-center border border-gray-800 hover:border-orange-500 transition-all duration-300 group"
//                 >
//                   <div className="text-center">
//                     <div
//                       className="w-16 h-16 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform"
                     
//                     >
//                       {partner.name.charAt(0)}
//                     </div>
//                     <p className="text-white font-semibold text-sm">
//                       {partner.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Second Row - Scroll Right to Left */}
//             <div className="flex animate-scroll-left">
//               {duplicatedPartners.map((partner, index) => (
//                 <div
//                   key={`row2-${index}`}
//                   className="flex-shrink-0 mx-6 bg-gray-900 rounded-xl p-8 w-48 h-32 flex items-center justify-center border border-gray-800 hover:border-orange-500 transition-all duration-300 group"
//                 >
//                   <div className="text-center">
//                     <div
//                       className="w-16 h-16 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform"
//                       style={{ backgroundColor: partner.color }}
//                     >
//                       {partner.name.charAt(0)}
//                     </div>
//                     <p className="text-white font-semibold text-sm">
//                       {partner.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//          {/* Left Side - Title (30%) */}
//         <div className="lg:w-[30%] w-full">
//           <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
//             Our <br />
//             <span className="text-orange-500">Partners</span>
//           </h2>
//           <p className="text-gray-400 mt-6 text-lg">
//             Trusted by leading technology companies worldwide
//           </p>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll-left {
//           animation: scroll-left 30s linear infinite;
//           display: flex;
//           width: fit-content;
//         }

//         .animate-scroll-right {
//           animation: scroll-right 30s linear infinite;
//           display: flex;
//           width: fit-content;
//         }

//         .animate-scroll-left:hover,
//         .animate-scroll-right:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PartnerScroll;

import React from 'react';
import l1 from '../../assets/OurClient/01.png'
import l2 from '../../assets/OurClient/02.png'
import l3 from '../../assets/OurClient/03.png'
import l4 from '../../assets/OurClient/04.png'
import l5 from '../../assets/OurClient/05.png'
import l6 from '../../assets/OurClient/06.png'
import l7 from '../../assets/OurClient/07.png'
import l8 from '../../assets/OurClient/10.png'
import l9 from '../../assets/OurClient/11.png'
import l10 from '../../assets/OurClient/13.png'
import l12 from '../../assets/OurClient/14.png'
import l11 from '../../assets/OurClient/15.png'
import l13 from '../../assets/OurClient/17.png'
import l14 from '../../assets/OurClient/18.png'
import l15 from '../../assets/OurClient/19.png'
import l16 from '../../assets/OurClient/20.png'
import l17 from '../../assets/OurClient/21.png'
import l18 from '../../assets/OurClient/22.png'
import l19 from '../../assets/OurClient/23.png'
import l20 from '../../assets/OurClient/24.png'
import l21 from '../../assets/OurClient/25.png'
import l22 from '../../assets/OurClient/26.png'
import l23 from '../../assets/OurClient/27.png'
import l24 from '../../assets/OurClient/28.png'
import l25 from '../../assets/OurClient/29.png'
import l26 from '../../assets/OurClient/30.png'

const PartnerScroll = () => {
  // Partner logos (replace with your own logos anytime)
  const partners = [
    { logo: l1 },
    { logo: l2 },
    { logo: l3 },
    { logo: l4 },
    { logo: l5 },
    { logo: l6 },
    { logo: l7 },
    { logo: l8 },
    { logo: l9 },
    { logo: l10 },
    { logo: l11 },
    { logo: l12 },
    { logo: l13 },
    { logo: l14 },
    { logo: l15 },
    { logo: l16 },
    { logo: l17 },
    { logo: l18 },
    { logo: l19 },
    { logo: l20 },
    { logo: l21 },
    { logo: l22 },
    { logo: l23 },
    { logo: l24 },
    { logo: l25 },
    { logo: l26 },
  ];

  // Duplicate array for infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="container border border-white/5 mx-auto py-20 px-5 md:px-0 overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Right Side - Scrolling Logos */}
        <div className="lg:w-[70%] w-full relative">
          <div className="overflow-hidden">

            {/* First Row */}
            <div className="flex mb-8 animate-scroll-right border border-white/5">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="shrink-0 p-8 w-48 h-32 flex items-center justify-center border-r border-white/5  transition-all duration-300 group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain cursor-pointer hover:scale-110 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex animate-scroll-left border border-white/5">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="shrink-0  p-8 w-48 h-32 flex items-center justify-center border-r border-white/5 transition-all duration-300 group"
                >
                  <img
                    src={partner.logo}
                    alt=""
                    className="w-24 h-24 object-contain cursor-pointer hover:scale-110 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Side */}
        <div className="lg:w-[30%] w-full text-white">
         <div>
          <p className="text-md text-(--first) mb-2">// Partners</p>

          <h2 className="text-2xl lg:text-6xl font-semibold leading-tight mb-5 md:w-xl">
           
          Our <span className="text-(--first)">Partners </span> 
              
          </h2>
          <p className="text-gray-400 leading-7 mb-6 md:w-sm">
           Every number you see below is a testament to our commitment, hard work, and trust earned over the years.
          </p>
          <div className="h-1 w-20 bg-(--first)"></div>
        </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
          display: flex;
          width: fit-content;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnerScroll;
