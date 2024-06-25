import styled from "styled-components";
import Banner from "../../components/Banner";
import Cards from "../../components/Cards";


const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  margin: auto;
`;

const MainContainer = styled.main``;

function Home() {
  return (
    <>
      <DivContainer className="container">
        <Banner />
        <MainContainer>
          <Cards />
        </MainContainer>
      </DivContainer>
    </>
  );
}

export default Home;
