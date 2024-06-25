import ClassTags from "@/components/ClassTags";
import styled from "styled-components";

const DivCardBanner = styled.div`
  width: 94vw;
  height: 23vw;
  margin: 0 2.78vw;
  display: flex;
  gap: 1.39vw;
  position: relative;
  top: -35vw;

  align-items: center;
  justify-content: center;

  img {
      width: 45vw;
      height: 23vw;
    }
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 46vw; 
    height: 21vw; 
    color: #F5F5F5;

    h1 {
        font-size: 3.19vw;
        margin: 2.78vw 0 0;
    }

    p {
        font-size: 1.25vw;
        font-weight: lighter;
        margin: 0.7vw 0 0;
    }
`

function CardBanner() {
  return (
    <DivCardBanner className="DivClassBanner">
      <DivInfo>
        <ClassTags local='banner'>FRONT END</ClassTags>
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
