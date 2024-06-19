import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/imagens/logo.png"

const DivFooter = styled.footer`
  max-width: 100vw;
  width: 100%;
  height: 125px;
  background-color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #2271d1;
  box-shadow: 0 5px 20px #2271d1;
`;

function Footer() {
  return (
    <DivFooter>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </DivFooter>
  );
}

export default Footer;
