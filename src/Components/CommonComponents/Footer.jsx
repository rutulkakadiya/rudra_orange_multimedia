// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
// import logo from '../../assets/HomeImg/Orange Logo 2.png'

// export default function Footer() {
//   return (
//     <footer className="text-white border border-white/5">
//       {/* Logo and Quick Links Row */}
//       <div className="border-b border-white/5 px-8 py-8">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="text-3xl font-bold"><img src={logo} className='w-60' alt="" /></div>
//           <nav className="flex gap-8 text-lg">
//             <a to="#" className="hover:text-(--first) duration-500 cursor-pointer transition">Home</a>
//             <a to="#" className="hover:text-(--first) duration-500 cursor-pointer transition">About</a>
//             <a to="#" className="hover:text-(--first) duration-500 cursor-pointer transition">Services</a>
//             <a to="#" className="hover:text-(--first) duration-500 cursor-pointer transition">Portfolio</a>
//             <a to="#" className="hover:text-(--first) duration-500 cursor-pointer transition">Contact</a>
//           </nav>
//         </div>
//       </div>

//       {/* 4 Info Cards Grid */}
//       <div className="border-b border-white/5 px-8 md:px-0  ">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {/* Address Card */}
//           <div className="h-80 border border-white/5  transition flex justify-center items-center">
//             <div className="flex items-center justify-center gap-4 mb-4">
//               <div className='flex flex-col justify-center items-center'>
//           <div className='w-15 h-15 rounded-full bg-(--first) flex justify-center items-center'>
//                 <MapPin className="w-7 h-7 shrink-0 mt-1" />
//           </div>
//                 <h3 className="font-semibold text-lg py-4">ADDRESS</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed text-center">
//                   123 Business Street,<br />
//                   New York, NY 10001<br />
//                   United States
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Card */}
//           <div className="h-80 border border-white/5 transition flex justify-center items-center">
//             <div className="flex items-start gap-4 mb-4">
//               <div className='flex flex-col justify-center items-center'>
//                 <div className='w-15 h-15 rounded-full bg-(--first) flex justify-center items-center'>
//                   <Phone className="w-7 h-7 shrink-0 mt-1" />
//                 </div>
//                 <h3 className="font-semibold text-lg py-4">CONTACT</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed text-center">
//                   Phone: +1 234 567 8900<br />
//                   Email: info@company.com<br />
//                   Fax: +1 234 567 8901
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Working Hours Card */}
//           <div className="h-80 border border-white/5 transition flex justify-center items-center">
//             <div className="flex items-start gap-4 mb-4">
//               <div className='flex flex-col justify-center items-center'>
//              <div className='w-15 h-15 rounded-full bg-(--first) flex justify-center items-center'>
//                  <Clock className="w-7 h-7 shrink-0 mt-1" />
//              </div>
//                 <h3 className="font-semibold text-lg my-4">WORKING HOURS</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed text-center">
//                   Mon - Fri: 9:00 - 18:00<br />
//                   Saturday: 10:00 - 16:00<br />
//                   Sunday: Closed
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Social Media Card */}
//           <div className="h-80 border border-white/5 transition flex justify-center items-center">
//             <div className="flex items-start gap-4 mb-4">
             
//               <div className="w-full flex flex-col justify-center items-center">
//                 <div className='w-15 h-15 rounded-full bg-(--first) flex justify-center items-center'>
//                       <Mail className="w-7 h-7 shrink-0 mt-1" />
//                 </div>
               
//                 <h3 className="font-semibold text-lg py-4">SOCIAL MEDIA</h3>
//                 <div className="text-center flex flex-col text-gray-400">
//                   <a to="#" className="hover:text-gray-400 transition">
//                     Facebook
//                   </a>
                
//                   <a to="#" className="hover:text-gray-400 transition">
//                    Instagram
//                   </a>
//                     <a to="#" className="hover:text-gray-400 transition">
//                    Linkdin
//                   </a>
               
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Large Text Section */}
//       <div className="border-b border-white/5 px-8 h-40 overflow-hidden">
//         <div className=" container mx-auto">
//           <h2 className="text-6xl md:text-7xl lg:text-9xl translate-y-13 font-bold leading-none tracking-tight text-center">
//           <span className='text-(--first)'> ORANGE</span> MULTIMEDIA
//           </h2>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="px-8 py-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
//           <p>© 2025 Orange Multimedia. All rights reserved.</p>
//           {/* <div className="flex gap-6">
//             <a to="#" className="hover:text-white transition">Privacy Policy</a>
//             <a to="#" className="hover:text-white transition">Terms of Service</a>
//             <a to="#" className="hover:text-white transition">Cookie Policy</a>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../../assets/HomeImg/Orange Logo 2.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-white border border-white/5">
      {/* Logo and Quick Links Row */}
      <div className="border-b border-white/5 px-4 sm:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-2xl sm:text-3xl font-bold">
          <img src={logo} className='w-60' alt="" />
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg text-gray-400">
            <Link to="/" className="hover:text-(--first) duration-500 cursor-pointer transition">Home</Link>
            <Link to="/about" className="hover:text-(--first) duration-500 cursor-pointer transition">About</Link>
            <Link to="/services" className="hover:text-(--first) duration-500 cursor-pointer transition">Services</Link>
            <Link to="/portfolio" className="hover:text-(--first) duration-500 cursor-pointer transition">Portfolio</Link>
            <Link to="/contact" className="hover:text-(--first) duration-500 cursor-pointer transition">Contact</Link>
          </nav>
        </div>
      </div>

      {/* 4 Info Cards Grid */}
      <div className="border-b border-white/5 px-4 sm:px-8 md:px-0">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address Card */}
          <div className="h-80 border border-white/5 transition flex justify-center items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-(--first) transition-all duration-1300 ease-out group-hover:w-[200%] group-hover:h-[200%] group-hover:translate-x-1/2 group-hover:-translate-y-1/2"></div>
            <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
              <div className='flex flex-col justify-center items-center'>
                <div className='w-15 h-15 rounded-full bg-(--first) group-hover:bg-black duration-1300 flex justify-center items-center'>
                  <MapPin className="w-7 h-7 shrink-0 mt-1" />
                </div>
                <h3 className="font-semibold text-lg py-4">LOCATION</h3>
                <p className="text-gray-400 group-hover:text-white duration-1300 text-sm leading-relaxed text-center">
                 211, Alpha One, Opp.<br />
                 Kruti Onella, 150ft.<br />
                 Ring Road, Rajkot
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="h-80 border border-white/5 transition flex justify-center items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-(--first) transition-all duration-1300 ease-out group-hover:w-[200%] group-hover:h-[200%] group-hover:translate-x-1/2 group-hover:-translate-y-1/2"></div>
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className='flex flex-col justify-center items-center'>
                <div className='w-15 h-15 rounded-full bg-(--first) group-hover:bg-black duration-1300 flex justify-center items-center'>
                  <Phone className="w-7 h-7 shrink-0 mt-1" />
                </div>
                <h3 className="font-semibold text-lg py-4">CONTACT</h3>
                <p className="text-gray-400 group-hover:text-white duration-700 text-sm leading-relaxed text-center">
                  Phone: + 91 97123 77811<br />
                  Phone: + 91 80000 77811 <br />
                  Email: theorangemultimedia <br />@gmail.com<br />
                  
                </p>
              </div>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="h-80 border border-white/5 transition flex justify-center items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-(--first) transition-all duration-1300 ease-out group-hover:w-[200%] group-hover:h-[200%] group-hover:translate-x-1/2 group-hover:-translate-y-1/2"></div>
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className='flex flex-col justify-center items-center'>
                <div className='w-15 h-15 rounded-full bg-(--first) group-hover:bg-black duration-1300 flex justify-center items-center'>
                  <Clock className="w-7 h-7 shrink-0 mt-1" />
                </div>
                <h3 className="font-semibold text-lg my-4">WORKING HOURS</h3>
                <p className="text-gray-400 group-hover:text-white duration-700 text-sm leading-relaxed text-center">
                  Mon - Sat: 9:00 - 19:00<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="h-80 border border-white/5 transition flex justify-center items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-(--first) transition-all duration-1300 ease-out group-hover:w-[200%] group-hover:h-[200%] group-hover:translate-x-1/2 group-hover:-translate-y-1/2"></div>
            <div className="flex items-start gap-4 mb-4 relative z-10">
              <div className="w-full flex flex-col justify-center items-center">
                <div className='w-15 h-15 rounded-full bg-(--first) group-hover:bg-black duration-1300 flex justify-center items-center'>
                  <Mail className="w-7 h-7 shrink-0 mt-1" />
                </div>
                <h3 className="font-semibold text-lg py-4">TALK US</h3>
                <div className="text-center flex flex-col text-gray-400">
                  <a to="#" className="hover:text-black group-hover:text-white duration-700 transition">
                    Facebook
                  </a>
                  <a to="#" className="hover:text-black group-hover:text-white duration-700 transition">
                    Instagram
                  </a>
                  <a to="#" className="hover:text-black group-hover:text-white duration-700 transition">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text Section */}  
      <div className="border-b border-white/5 px-4 sm:px-8 py-8 sm:py-8 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl translate-y-10 md:translate-y-13 font-bold leading-none tracking-tight text-center">
            <span className='text-(--first)'>ORANGE</span> MULTIMEDIA
          </h2>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="px-4 sm:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
          <p className="text-center">© 2025 Orange Multimedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 