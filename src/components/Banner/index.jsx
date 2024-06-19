import styled from "styled-components";
import CardBanner from "@/components/Banner/CardBanner";

const DivEstilizada = styled.div`
  height: 700px;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  background-color: #0B1528;
  position: absolute;
  top: 100px;
`;

const ImgCortada = styled.img`
  width: 100%;
  height: 648px;
  object-fit: cover;
  filter: brightness(30%);
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
