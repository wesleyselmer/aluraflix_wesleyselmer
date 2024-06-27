import styled from "styled-components";
import Cards from "../../components/Cards";
import Slider from "../../components/Slider";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  margin: auto;
`;

const MainContainer = styled.main`
`;

function Home() {
  return (
    <>
      <DivContainer className="container">
        <Slider />
        <MainContainer>
          <Cards />
        </MainContainer>
      </DivContainer>
    </>
  );
}

export default Home;
