// Predefined responses for digital marketing queries
const chatbotResponses = {
  greetings: [
    "Hello! Welcome to Corcus LLP. How can we help you with your digital marketing needs?",
    "Hi there! Looking for digital marketing solutions? We're here to help!",
  ],
  services: {
    general:
      "We offer comprehensive digital marketing services including SEO, Social Media Marketing, PPC Advertising, Content Marketing, and Web Development.",
    seo: "Our SEO services help improve your website's visibility in search results, driving organic traffic and better rankings.",
    social:
      "We create engaging social media strategies across platforms to build your brand presence and connect with your audience.",
    ppc: "Our PPC campaigns are designed to maximize ROI through targeted ads on Google, Facebook, and other platforms.",
    content:
      "We create compelling content that resonates with your audience and drives engagement across all channels.",
  },
  pricing:
    "Our pricing varies based on your specific needs and goals. Would you like to schedule a consultation to discuss a customized package?",
  contact:
    "You can reach us at info@corcus.in or call us at +918789677330. Would you like to schedule a consultation?",
  default:
    "I understand you have a question about digital marketing. Could you please provide more details so I can better assist you?",
};

// Process user message and return appropriate response
export const processMessage = (message) => {
  const lowerMessage = message.toLowerCase();

  // Check for greetings
  if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
    return chatbotResponses.greetings[
      Math.floor(Math.random() * chatbotResponses.greetings.length)
    ];
  }

  // Check for service inquiries
  if (lowerMessage.includes("service")) {
    return chatbotResponses.services.general;
  }
  if (lowerMessage.includes("seo")) {
    return chatbotResponses.services.seo;
  }
  if (
    lowerMessage.includes("social") ||
    lowerMessage.includes("facebook") ||
    lowerMessage.includes("instagram")
  ) {
    return chatbotResponses.services.social;
  }
  if (
    lowerMessage.includes("ppc") ||
    lowerMessage.includes("ads") ||
    lowerMessage.includes("advertising")
  ) {
    return chatbotResponses.services.ppc;
  }
  if (lowerMessage.includes("content")) {
    return chatbotResponses.services.content;
  }

  // Check for pricing inquiries
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("package")
  ) {
    return chatbotResponses.pricing;
  }

  // Check for contact information
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone")
  ) {
    return chatbotResponses.contact;
  }

  // Default response
  return chatbotResponses.default;
};
