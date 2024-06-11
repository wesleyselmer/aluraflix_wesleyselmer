import ClassTags from "@/components/ClassTags";
import styled from "styled-components";

const DivCardBanner = styled.div`
  width: 1361.89px;
  max-width: 100%;
  height: 333.58px;
  margin: auto;
  display: flex;
  gap: 20px;
  position: relative;
  z-index: 3;
  top: -450px;


  align-items: center;
  justify-content: center;

  img {
      width: 646px;
      height: 333.58px;
    }
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 665.84px; 
    height: 305px; 
    color: #F5F5F5;

    h1 {
        font-size: 46px;
        margin: 40px 0 0;
    }

    p {
        font-size: 18px;
        font-weight: lighter;
        margin: 10px 0 0;
    }
`

function CardBanner() {
  return (
    <DivCardBanner className="DivClassBanner">
      <DivInfo>
        <ClassTags>FRONT END</ClassTags>
        <h1>SEO con React</h1>
        <p>
          Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar
          uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas
          dicas sobre performance e de quebra conhecer uma plataforma
          sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse
          vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
        </p>
      </DivInfo>
      <img src="/imagens/banner.png" alt="Banner do Card" />
    </DivCardBanner>
  );
}

export default CardBanner;
