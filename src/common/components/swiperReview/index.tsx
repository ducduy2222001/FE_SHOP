import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CardItem from "../card";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./swiperreview.module.scss";

const DATA_CARDITEM = [
  {
    id: 1,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 2,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 3,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 4,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 5,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 6,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 7,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 8,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 9,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
];

const SwiperReview = () => {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.swiper}
      >
        {DATA_CARDITEM.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardItem
                size={item.size}
                badge={item.badge}
                image={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperReview;
