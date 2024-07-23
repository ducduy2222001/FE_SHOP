import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import CardItem from "../card";

import styles from "./swiperreview.module.scss";

interface CardItemProps {
  id: number;
  size: boolean;
  badge: boolean;
  image: string;
}

interface SwiperReviewProps {
  CARDITEM_SWIPER: CardItemProps[];
}

const SwiperReview = ({ CARDITEM_SWIPER }: SwiperReviewProps) => {
  return (
    <div style={{ width: "800px" }}>
      <Swiper
        width={1192}
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
        {CARDITEM_SWIPER.map((item) => {
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
