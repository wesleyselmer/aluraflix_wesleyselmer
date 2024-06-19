import EstilosGlobais from "@/components/EstilosGlobais";
import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`;

const MainContainer = styled.main`

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
        <Footer />
      </DivContainer>
    </>
  );
}

export default Home;
