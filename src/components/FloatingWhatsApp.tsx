import whatsappIcon from "@/assets/whatsapp.png";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917875799111?text=Hello!%20I%20want%20to%20know%20more%20about%20Ekatvam%20Cowork.", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-xl hover:shadow-2xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp"
        className="w-14 h-14 rounded-full"
      />
    </button>
  );
};

export default FloatingWhatsApp;
