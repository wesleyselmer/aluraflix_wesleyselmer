import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useVideosContext } from "../../hooks/UseVideosContext";
import Banner from "../Banner";
import "./styles.css";

export default function Slider() {
  const { videos } = useVideosContext();

  if (videos.length > 0) {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        className="MeuSwiper"
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
      >
        {videos.map((video) => (
          <SwiperSlide className="MeuSwiperSlide" key={video.id}>
            <Banner video={video} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}
