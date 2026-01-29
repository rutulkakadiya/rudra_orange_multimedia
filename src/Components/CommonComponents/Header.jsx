// import React from "react";
// import { NavLink } from "react-router-dom";
// import logo from '../../assets/HomeImg/Orange Logo 2.png'

// const Header = () => {
//   const navClass =
//     "relative px-4 py-2 text-white font-medium transition duration-300 group";

//   const underline =
//     "absolute left-0 bottom-0 h-[2px] w-0 bg-(--first) transition-all duration-300 group-hover:w-full";

//   return (
//     <>
//       <header className="w-full bg-(--dark-black) border-b border-white/10 z-0">
//         <nav className="max-w-screen-xl md:w-full mx-auto flex items-center justify-between py-6 px-6">

//           {/* LEFT NAV */}
//           <ul className="flex items-center gap-6 text-lg">
//             <li>
//               <NavLink
//                 to="/services"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 Services
//                 <span className={`${underline}`}></span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/portfolio"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 Portfolio
//                 <span className={underline}></span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/pricing"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 Pricing
//                 <span className={underline}></span>
//               </NavLink>
//             </li>
//           </ul>

//           {/* LOGO CENTER */}
//           <div className="">
//             <img src={logo} className="w-60" alt="" />
//           </div>

//           {/* RIGHT NAV */}
//           <ul className="flex items-center gap-6 text-lg">
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 About
//                 <span className={underline}></span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/blog"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 Blog
//                 <span className={underline}></span>
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   `${navClass} ${isActive ? "text-(--first)" : ""}`
//                 }
//               >
//                 Contact
//                 <span className={underline}></span>
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { MapPin, Mail, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/HomeImg/Orange Logo 2.png';
import LanguageSelector from './LanguageSelector';
// import LanguageSelector from './LanguageSelector';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // To detect current path

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'fun4rajkot', path: '/fun4rajkot' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact Us', path: '/contact' },
    ];

    // Determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <header className="outfit w-full bg-(--dark-black) text-white">
            {/* Top Bar */}
            <div className="border-b border-white/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hidden md:flex flex-wrap items-center justify-between py-3 text-sm">
                        {/* Left Side - Contact Info */}
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2 hover:text-(--first) transition-colors duration-300">
                                <Mail size={16} />
                                <a href="mailto:themesflat@gmail.com">theorangemultimedia@gmail.com</a>
                            </div>
                            <span>|</span>
                            <div className="flex items-center gap-2 hover:text-(--first) transition-colors duration-300">
                                <Phone size={16} />
                                <a href="">+ 91 97123 77811</a>
                            </div>
                        </div>

                        {/* Right Side - Address */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 ml-2">
                                211, Alpha One, Opp. Kruti Onella, 150ft. Ring Road, Rajkot
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-(--dark-black) border-b border-white/5">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center">
                            {/* Logo */}
                            <div className="md:border-r md:border-white/5 flex items-center gap-2 md:px-30 py-3">
                                <div className="w-40 md:w-50 h-12 rounded flex items-center justify-center">
                                    <Link to="/">
                                        <img src={logo} alt="Livingspace Logo" className="h-full w-auto" />
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center px-12 py-4 gap-12">
                                {navLinks.map((link, index) => {
                                    const active = isActive(link.path);

                                    // Highlight Fun4Rajkot
                                    if (link.name === 'Fun4Rajkot') {
                                        return (
                                            <div key={index} className="relative group">
                                                <Link
                                                    to={link.path}
                                                    className={`flex items-center text-lg gap-1 px-6 py-2 font-bold transition-all duration-300 rounded-md shadow-lg transform hover:-translate-y-1 ${active
                                                            ? 'bg-(--first) text-white ring-2 ring-white/20'
                                                            : 'bg-(--first) text-white hover:opacity-90'
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {link.name}
                                                    {/* Optional: Add an icon or glowing effect if needed, but keeping it simple as per request 'ek hi box me' */}
                                                </Link>
                                            </div>
                                        );
                                    }

                                    return (
                                        <div key={index} className="relative group">
                                            <Link
                                                to={link.path}
                                                className={`flex items-center text-lg gap-1 py-2 font-medium transition-all duration-300 relative ${active
                                                        ? 'text-(--first)'
                                                        : 'text-white hover:text-(--first)'
                                                    }`}
                                                onClick={() => setIsMenuOpen(false)} // Close mobile menu if open
                                            >
                                                {link.name}

                                                {/* Underline Animation */}
                                                <span
                                                    className={`absolute -bottom-4 left-0 h-0.5 bg-(--first) transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                                                        }`}
                                                ></span>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Right Side - Language Selector */}
                        <div className="hidden lg:flex items-center gap-4 px-4">
                            <LanguageSelector />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 hover:bg-white/5 rounded transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="pb-4 space-y-2">
                            {navLinks.map((link, index) => {
                                const active = isActive(link.path);

                                return (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className={`block px-4 py-3 rounded transition-all duration-300 ${active
                                                ? 'text-(--first) bg-white/5 font-semibold'
                                                : 'text-white hover:bg-white/10'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;