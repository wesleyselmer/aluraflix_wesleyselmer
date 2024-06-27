import { useVideosContext } from "../../hooks/UseVideosContext";
import Banner from "../Banner";
import "./styles.css";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register Swiper web component
register();

export default function Slider() {
  const { videos } = useVideosContext();

  if (videos.length > 0) {
    return (
      <swiper-container>
        {videos.map((video) => (
          <swiper-slide key={video.id}>
            <Banner  video={video} />
          </swiper-slide>
        ))}
       </swiper-container>
    );
  }
}
