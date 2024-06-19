import styled from "styled-components"
import logo from "/imagens/logo.png"
import NavBarLink from "@/components/Header/NavBarLink"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
    max-width: 100vw;
    width: 100%;
    height: 125px;
    background-color: #262626;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #2271d1;
    box-shadow: 0 5px 20px #2271d1;
    position: fixed;
    z-index: 99;

    & img {
        width: 168.45px;
        height: 40px;
        margin: 0 51.15px;
    }

    & nav {
        display: flex;
        gap: 25px;
        margin: 0 51.15px;
    }
`
function Header() {
    return (
        <HeaderEstilizado>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <nav>
                <NavBarLink to="/">Home</NavBarLink>
                <NavBarLink to="/novovideo">Novo Vídeo</NavBarLink>
            </nav>
        </HeaderEstilizado>
    )
}

export default Header