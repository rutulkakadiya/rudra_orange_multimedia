import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import RippleButton from "../CommonComponents/RippleButton";

const ContactSection = () => {
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
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border border-white/10 px-5 py-4
                           focus:border-(--first) outline-none transition"
              />
              <textarea
                rows="5"
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
                          <RippleButton className="text-sm">Send Message</RippleButton>
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

        {/* <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="contact-card border-r border-white/5 p-10 flex flex-col items-center py-15">
                <Phone className="mb-4 text-(--first)" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-sm text-gray-400">
                  + 91 97123 77811
                </p>
                <p className="text-sm text-gray-400">
                  + 91 80000 77811
                </p>
              </div>

              <div className="contact-card border-r border-b border-white/5 p-10 flex flex-col items-center py-15">
                <Mail className="mb-4 text-(--first)" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-md text-gray-400">
                theorangemultimedia@gmail.com
                </p>
              </div>

              <div className="contact-card border-b border-white/5 p-10 flex flex-col items-center py-15">
                <MapPin className="mb-4 text-(--first)" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm text-gray-400">
                  Rajkot, Gujarat, India
                </p>
              </div>
            </div>
        </div> */}

         

        {/* ================= MAP ================= */}
        <div className="w-full h-130 p-15 border-t border-white/5">
          <iframe
            title="Google Map"
            className="w-full h-full grayscale invert border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Rajkot,Gujarat,India&output=embed"
          />
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
