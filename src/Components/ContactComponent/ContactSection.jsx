import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import RippleButton from "../CommonComponents/RippleButton";
import RealBookPDFViewer from "../PortfolioComponent/RealBookPDFViewer";


const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const phoneNumber = "919712377811";

    const message = encodeURIComponent(
      `Hello Orange Multimedia Team,

I am interested in your digital services.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Looking forward to your response.
Thank you.`
    );

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappURL = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <section className="bg-(--dark-black) text-white border-t border-white/5">
      <div className="container mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/5">

          {/* LEFT – FORM */}
          <div className="lg:col-span-6 p-15 border-r border-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-(--first) mb-4">
              Contact Us
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold mb-8">
              Let’s <span className="text-(--first)">Connect</span> & Create
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition resize-none"
              />

              {/* <button
                type="submit"
                className="px-10 py-4 bg-white text-black font-semibold
                           hover:bg-(--first) transition-all duration-300"
              >
                Send Message
              </button> */}

              <div className="">
                <RippleButton onClick={handleClick} className="text-sm">Send Message</RippleButton>
              </div>
            </form>
          </div>

          {/* RIGHT – IMAGE + INFO */}
          <div className="lg:col-span-6">

            {/* IMAGE */}
            <div className="relative h-[47vw] overflow-hidden border-b border-white/5 p-20">
              <img
                src="https://i.pinimg.com/736x/da/1d/97/da1d976764661f89bb7d773e2b0c8e60.jpg"
                alt="Contact"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* <div className="absolute inset-0 bg-black/30" /> */}
            </div>


          </div>
        </div>

        <div className="">

          {/* ================= BROCHURE ================= */}
          <div className="w-full text-center py-20 border-t border-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-(--first) mb-4">
              Our Brochure
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold mb-12">
              View Our <span className="text-(--first)">Brochure</span>
            </h2>
            <RealBookPDFViewer />
          </div>
        </div>


        {/* ================= MAP ================= */}
        <div className="w-full h-130 p-15 border-t border-white/5">
          <iframe
            title="Orange Multimedia - Rajkot"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.563394984935!2d70.786662!3d22.2539615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb346b4482a1%3A0x998e98c9bfe1e1df!2sOrange%20Multimedia%20-%20Rajkot!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>

        </div>
      </div>

      {/* ============ HOVER EFFECT CSS ============ */}
      <style jsx>{`
        .contact-card {
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 50px;
          height: 40px;
          background: var(--first);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.6s ease-in-out;
          z-index: 0;
        }

        .contact-card:hover::before {
          transform: scale(25);
        }

        .contact-card * {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .contact-card:hover h4,
        .contact-card:hover p,
        .contact-card:hover svg {
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
