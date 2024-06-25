import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/imagens/logo.png";

const DivFooter = styled.footer`
  max-width: 100vw;
  width: 100%;
  height: 8vw;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: .14vw solid #2271d1;
  box-shadow: 0 .35vw 1.39vw #2271d1;
`;

const ImgFooter = styled.img`
  width: 12vw;
  height: 3vw;
`;

function Footer() {
  return (
    <DivFooter>
      <Link to="/">
        <ImgFooter src={logo} alt="" />
      </Link>
    </DivFooter>
  );
}

export default Footer;
