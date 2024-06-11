import EstilosGlobais from "@/components/EstilosGlobais";
import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191919;
`;

function Home() {
    return (
        <DivContainer className="container">
      <EstilosGlobais />
      <Header />
      <Banner />
      <main>
            <h1>Home!</h1>
        </main>
    </DivContainer>
        
    )
}

export default Home