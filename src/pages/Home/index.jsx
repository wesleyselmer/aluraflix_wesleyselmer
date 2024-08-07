import styled from "styled-components";
import Cards from "../../components/Cards";
import Slider from "../../components/Slider";
import ModalEditar from "../../components/ModalEditar";


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
