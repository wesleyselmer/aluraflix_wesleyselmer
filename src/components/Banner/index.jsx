import styled from "styled-components";
import CardBanner from "@/components/CardBanner";

const DivEstilizada = styled.div`
  height: 700px;
  max-width: 100vw;
  overflow: hidden;
`;

const ImgCortada = styled.img`
  width: 100%;
  object-position: 0 -125px;
  filter: brightness(56%);
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
