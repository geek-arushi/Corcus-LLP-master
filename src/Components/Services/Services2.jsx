import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const Services2 = () => {
  const chooseContent = [
    {
      img: "/assets/img/service/01.gif",
      title: "Performance Marketing",
      subtitle:
        "Data-driven campaigns to optimize ROI and generate high-quality leads.",
    },
    {
      img: "/assets/img/service/05.gif",
      title: "Social Media Marketing",
      subtitle:
        "Strategic content creation and management across platforms to engage your audience.",
    },
    {
      img: "/assets/img/service/06.gif",
      title: "Search Engine Optimization (SEO)",
      subtitle:
        "Improve your website's visibility and ranking on search engines.",
    },
    {
      img: "/assets/img/service/09.gif",
      title: "Content Marketing",
      subtitle:
        "Engaging and informative content that builds brand authority and attracts customers.",
    },
    {
      img: "/assets/img/service/07.gif",
      title: "Brand Strategy & Consulting",
      subtitle:
        "Customized marketing strategies that align with your business goals.",
    },
    {
      img: "/assets/img/service/08.gif",
      title: "Creative Design",
      subtitle:
        "Visually appealing creatives that resonate with your target audience.",
    },
    {
      img: "/assets/img/service/08.gif",
      title: "E-commerce Marketing",
      subtitle:
        "Comprehensive solutions to boost your online store's sales and visibility.",
    },
    {
      img: "/assets/img/service/08.gif",
      title: "Analytics & Reporting",
      subtitle:
        "In-depth performance analysis to refine and optimize your campaigns.",
    },
  ];

  return (
    <section className="service-section py-40 bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <div className="section-title text-center mb-8">
          <h1
            style={{
              WebkitTextStroke: "2px #000",
              color: "transparent",
              fontSize: "40px",
            }}
            className="font-bold mb-4 sm:mb-8"
          >
            The Service We Provide For You
          </h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 },
          }}
          className="service-slider"
        >
          {chooseContent.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="service-card shadow-2xl drop-shadow-lg rounded-2xl p-4 sm:p-6 w-full sm:w-[300px] h-auto sm:h-[900px] mx-auto flex flex-col items-center justify-between border border-gray-300 bg-white/10 backdrop-blur-md transition-shadow duration-300 hover:shadow-yellow-400/40">
                <div className="service-thumb mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-36 h-36 sm:w-52 sm:h-52 object-cover rounded-lg"
                  />
                </div>
                <div className="content text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                    <Link
                      to="/service"
                      className="hover:text-yellow-500 text-[14px]"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-300 text-[10px] mb-4">
                    {item.subtitle}
                  </p>
                  <Link
                    to="/service"
                    className="service-btn text-sm sm:text-base font-medium bg-black text-white px-6 py-2 rounded-md inline-block transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                  >
                    Know More <i className="bi bi-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services2;
