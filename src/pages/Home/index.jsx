import styled from "styled-components";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import { useEffect } from "react";
import { useVideoContext } from "../../context/VideosContext";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`;

const MainContainer = styled.main``;

function Home() {
  const adicionarVideo = useVideoContext(adicionarVideo);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        dados.forEach((dado) => adicionarVideo(dado));
      });
  }, []);

  return (
    <>
      <DivContainer className="container">
        <Banner />
        <MainContainer>
          <Cards tipo="FRONT END" />
        </MainContainer>
      </DivContainer>
    </>
  );
}

export default Home;
