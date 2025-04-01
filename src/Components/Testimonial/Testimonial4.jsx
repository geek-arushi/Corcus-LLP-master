import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const ClientFeedback = () => {
  const feedbacks = [
    {
      name: "Anamika Anand",
      title: "Paidavaar (CEO & Founder)",
      review:
        "Corcus completely reimagined our brand with a fresh and strong identity that truly connects with our audience. The creative touch they brought, especially with the 'Gayani Thai' character, helped us build a deeper bond with the farming community. The results speak for themselves - we've seen a huge boost in engagement, reach, and trust. It's been a transformative experience!",
    },
    {
      name: "Nand Kumar Patil",
      title: "Fresh O Need (CEO)",
      review:
        "Corcus took our digital presence to new heights with their seamless marketing strategies. They optimized our website, created amazing content, and ran ads that really resonated with our audience. Sales and engagement skyrocketed, and thanks to their expertise, we've been able to expand globally. They've truly been an essential part of our journey.",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
    {
      name: "Abinash",
      title: "Fresh Super Mall",
      review:
        "Working with Corcus was a game changer for our franchise lead generation. Their targeted ads, SEO, and automation strategies took things to the next level. We saw a 300% increase in leads, and our brand visibility grew massively. Their creative content and smart approach really made a difference. Couldn't recommend them more!",
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container text-left mb-5">
        <h1
          className="display-4 font-weight-bold"
          style={{
            WebkitTextStroke: "2px black",
            color: "transparent",
            fontWeight: 900,
          }}
        >
          CLIENT
        </h1>
        <h2 className="display-3 font-weight-bold" style={{ fontWeight: 900 }}>
          FEEDBACK
        </h2>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index} className="h-100">
              <div className="card h-100 shadow-sm p-3 d-flex flex-column">
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title font-weight-bold">
                      {feedback.name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {feedback.title}
                    </h6>
                    <div className="text-warning mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                  </div>
                  <p className="card-text mt-auto">{feedback.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientFeedback;
