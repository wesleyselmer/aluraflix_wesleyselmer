import styled from "styled-components";
import CardBanner from "./CardBanner";

const DivBanner = styled.div`
  height: 90%;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  background-color: #0b1528;
`;

const ImgCortada = styled.img`
  width: 100%;
  height: 45vw;
  object-fit: cover;
  filter: brightness(30%);
  position: relative;
`;

function Banner({ video }) {
  if(video) {
    return (
      <DivBanner className="Banner">
        <ImgCortada src={video.imagem} alt="Banner do site" />
        <CardBanner video={video} />
      </DivBanner>
    )}
  }

export default Banner;

    