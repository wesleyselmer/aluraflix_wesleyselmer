import styled from "styled-components";
import CardBanner from "@/components/CardBanner";

const DivEstilizada = styled.div`
  height: 700px;
  max-width: 100%;
  overflow: hidden;
  background-color: #0B1528;
  position: relative;
  z-index: 1;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
`;

const ImgCortada = styled.img`
  width: 100%;
  height: 648px;
  object-fit: cover;
  filter: brightness(30%);
  position: relative;
  z-index: 2;
`;

function Banner() {
  return (
    <DivEstilizada className="Banner">
      <ImgCortada src="/imagens/banner.png" alt="Banner do site" />
      <CardBanner />
    </DivEstilizada>
  );
}

export default Banner;
