
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = '+919712377811'; // Replace with your WhatsApp number

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <div
            className={`fixed bottom-7 right-7 flex justify-center items-center z-100 hover:scale-110 cursor-pointer rounded-full bg-green-600 text-white shadow-lg 
               w-13 h-13 overflow-hidden transition-all duration-300 ease-out`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <div className="">
                <FaWhatsapp size={25} />
            </div>
           
        </div>
    );
};

export default WhatsAppButton;
