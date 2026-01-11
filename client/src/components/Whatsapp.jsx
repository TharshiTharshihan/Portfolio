import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+94758443025"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-10 bottom-10 z-[1000] flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#29e042] shadow-md animate-[whatsapp-blink_1s_infinite_alternate] transition duration-200 hover:shadow-xl hover:scale-110"
    >
      <FaWhatsapp
        className="w-[38px] h-[38px] block text-white"
      />
    </a>
  );
};

export default WhatsAppButton;
