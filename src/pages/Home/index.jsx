import styled from "styled-components";
import Cards from "../../components/Cards";
import Slider from "../../components/Slider";
import ModalEditar from "../../components/ModalEditar";
import { useVideosContext } from "../../hooks/UseVideosContext";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  margin: auto;
`;

const MainContainer = styled.main`
z-index: 1;
`;

function Home() {
  const novoVideo = {
    id: "1",
    categoria: "1",
    titulo: "O que faz uma desenvolvedora Front-End",
    imagem: "https://i.ytimg.com/vi/ZY3-MFxVdEw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
    descricao: "O que é Front-end?"
  }
  
  const {adicionarVideo} = useVideosContext();
  return (
    <>
      <DivContainer className="container">
        <ModalEditar />
        <Slider />
        <MainContainer>
          <Cards />
        </MainContainer>
      </DivContainer>
    </>
  );
}

export default Home;
