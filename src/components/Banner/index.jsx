import styled from "styled-components";
import CardBanner from "@/components/Banner/CardBanner";

const DivBanner = styled.div`
  height: 700px;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  background-color: #0B1528;
  z-index: -1;
`;

const ImgCortada = styled.img`
  width: 100%;
  height: 648px;
  object-fit: cover;
  filter: brightness(30%);
  position: relative; 
`;

function Banner() {
  return (
    <DivBanner className="Banner">
      <ImgCortada src="/imagens/banner.png" alt="Banner do site" />
      <CardBanner />
    </DivBanner>
  );
}

export default Banner;
