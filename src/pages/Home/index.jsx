import EstilosGlobais from "@/components/EstilosGlobais";
import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`;

const MainContainer = styled.main`
  position: absolute;
  top: 825px;
`;

function Home() {
  return (
    <>
      <EstilosGlobais />
      <DivContainer className="container">
        <Header />
        <Banner />
        <MainContainer>
          <Cards tipo="FRONT END" quantidade="3" />
        </MainContainer>
      </DivContainer>
    </>
  );
}

export default Home;
