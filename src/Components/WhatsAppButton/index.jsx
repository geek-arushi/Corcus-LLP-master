import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling 100px
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Replace this number with your WhatsApp business number
    const phoneNumber = "918789677330";
    const message = "Hello! I would like to know more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`whatsapp-button ${isVisible ? "visible" : ""}`}
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.8})`,
      }}
    >
      <i
        className="bi bi-whatsapp"
        style={{
          color: "#FFFFFF",
          fontSize: "32px",
        }}
      />
    </div>
  );
};

export default WhatsAppButton;
