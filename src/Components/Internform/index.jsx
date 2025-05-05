import React, { useEffect } from "react";

const CallToAction = () => {
  useEffect(() => {
    // Dynamically load Poppins font
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Apply Poppins font to the body
    document.body.style.fontFamily = "'Poppins', sans-serif";

    return () => {
      document.body.style.fontFamily = "";
    };
  }, []);

  return (
    <section className="bg-gray-100 rounded-3xl p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="flex-1 max-w-xl">
        <h2 className="text-black text-xl font-semibold mb-3 leading-tight">
          Let’s make things happen
        </h2>
        <p className="text-gray-900 text-sm mb-6 leading-relaxed">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button
          type="button"
          className="bg-gray-900 text-white text-sm rounded-lg px-6 py-3 font-medium hover:bg-gray-800 transition"
        >
          Get your professional career
        </button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="https://storage.googleapis.com/a1aa/image/4b16b886-2299-49bf-28f4-b39ad6b5dd4d.jpg"
          alt="Abstract shapes with character"
          className="max-w-full h-auto"
          width={200}
          height={140}
        />
      </div>
    </section>
  );
};

export default CallToAction;
