import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const phoneNumber = "+91-87896 77330"; // Replace with your WhatsApp number
  const message = "Hello! I need assistance."; // Default message

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}',
      "_blank"
    );
  };

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-5 bg-white shadow-lg p-4 rounded-lg w-64 border border-gray-300">
          <div className="text-sm font-semibold mb-2">WhatsApp Chat</div>
          <div className="text-xs text-gray-500 mb-4">Hi! How can we help you?</div>
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white py-1 px-3 rounded text-sm hover:bg-green-600 transition"
          >
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingWhatsApp;
