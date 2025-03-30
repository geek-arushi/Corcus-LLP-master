import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const ClientFeedback = () => {
  const feedbacks = [
    {
      name: "Dan Gabreil",
      title: "Marketing Head | Coinsafe VPN",
      review:
        "Working with Doodlo was a Game changer for us. They revamped our brand and website with unmatched creativity & precision. Their team's dedication and attention to detail is truly impressive. Highly recommended for design.",
    },
    {
      name: "Charu Jain",
      title: "Marketing Head | Rishabh Industries Pvt Ltd",
      review:
        "Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life in ways we never imagined. Couldn't be more pleased with the outcome!",
    },
    {
      name: "Norman Dental",
      title: "CEO | Wurth Industries",
      review:
        "Doodlo is definitely the right choice for our coffee table project. The team came up with a unique set of ideas that clearly sets us apart. Very constructive and flexible collaboration. Good work!",
    },
    {
      name: "Monika K",
      title: "Founder | K99 Solutions",
      review:
        "You guys nailed it! Their work on our brand and website was absolutely top-notch. Everything exceeded our expectations.",
    },
    {
      name: "Monika K",
      title: "Founder | K99 Solutions",
      review:
        "You guys nailed it! Their work on our brand and website was absolutely top-notch. Everything exceeded our expectations.",
    },
    {
      name: "Monika K",
      title: "Founder | K99 Solutions",
      review:
        "You guys nailed it! Their work on our brand and website was absolutely top-notch. Everything exceeded our expectations.",
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
            fontWeight: 900, // Extra bold
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="card h-100 shadow-sm p-3">
                <div className="card-body">
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
                  <p className="card-text">{feedback.review}</p>
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
