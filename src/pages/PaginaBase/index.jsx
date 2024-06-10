import { Outlet } from "react-router-dom";
import EstilosGlobais from "@/components/EstilosGlobais";
import styled from "styled-components";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function PaginaBase() {
  return (
    <DivContainer className="container">
      <EstilosGlobais />
      <Header />
      <Banner />
      <Outlet />
    </DivContainer>
  );
}

export default PaginaBase;
