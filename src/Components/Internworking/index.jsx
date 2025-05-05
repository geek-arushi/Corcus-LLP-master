import React, { useEffect, useState } from "react";

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Poppins', sans-serif";

    return () => {
      document.body.style.fontFamily = "";
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      bgColor: "bg-[#f9b700]",
      textColor: "text-black",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "Our team conducts in-depth market research and competitor analysis to craft a tailored strategy. We define measurable goals and action plans that align with your brand’s objectives.",
      bgColor: "bg-[#f3f3f3]",
      textColor: "text-black",
    },
  ];

  const toggleStep = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-10">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="inline-block bg-[#f9b700] rounded-md px-3 py-1 text-black font-semibold text-lg sm:text-xl leading-tight">
          Our Working Process
        </h1>
        <p className="text-black text-[12px] leading-tight mt-3 sm:mt-0">
          Step-by-Step Guide to Achieving
          <br />
          Your Business Goals
        </p>
      </header>

      {steps.map((step) => (
        <section
          key={step.id}
          className={`${step.bgColor} ${step.textColor} rounded-2xl border border-black border-opacity-30 p-6 mb-6 transition-all duration-300 relative`}
          style={{
            boxShadow: "0 5px 0 0 rgba(0, 0, 0, 0.9)",
          }}
        >
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleStep(step.id)}>
            <div className="flex items-center space-x-4">
              <span className="font-extrabold text-[28px] leading-none">
                {step.id.toString().padStart(2, "0")}
              </span>
              <h2 className="font-semibold text-[15px] leading-tight">{step.title}</h2>
            </div>
            <button
              aria-label="Toggle"
              className="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center text-black text-xl leading-none"
            >
              <i className={`fas ${openIndex === step.id ? "fa-minus" : "fa-plus"}`}></i>
            </button>
          </div>

          {openIndex === step.id && (
            <>
              <hr className="border-black border-opacity-30 my-4" />
              <p className="text-sm leading-snug">{step.description}</p>
            </>
          )}
        </section>
      ))}
    </div>
  );
};

export default WorkingProcess;
