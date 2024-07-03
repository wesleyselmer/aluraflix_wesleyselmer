import styled from "styled-components"
import logo from "/imagens/logo.png"
import NavBarLink from "@/components/Header/NavBarLink"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
    max-width: 100vw;
    width: 1443px;
    height: 8vw;
    background-color: #262626;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .14vw solid #2271d1;
    box-shadow: 0 .35vw 1.39vw #2271d1;

    & img {
        width: 12vw;
        height: 3vw;
        margin: 0 3.54vw;
    }

    & nav {
        display: flex;
        gap: 1.74vw;
        margin: 0 3.54vw;
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