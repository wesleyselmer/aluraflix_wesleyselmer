import styled from "styled-components"
import deletar from "/imagens/deletar.png"
import editar from "/imagens/editar.png"

const DivCard = styled.div`
    width: 432px;
    height: 320px;
    border: 2px solid #2271d1;
    border-radius: 10px;
    box-shadow: inset 0 5px 20px #2271d1;
    flex: 1 1 auto;
    overflow: hidden;
    

    & img {
       width: 432px;
       height: 260px; 
       object-fit: cover;
    }
`
const DivCardBotoes = styled.div`
    height: 60px; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const DivCardBotao = styled.div`
    display: flex;

    & h2 {
        font-size: 16px;
        color: #FFFFFF;
        font-weight: bolder;
        padding-left: 20px;
    }

    & img {
        height: 28px;
        width: 25px;
    }
`

function Card({ img }) {
    return (
        <DivCard>
            <img src={`/imagens/${img}`} alt={img} />
            <DivCardBotoes>
                <DivCardBotao>
                    <img src={deletar} alt="Deletar" />
                    <h2>Deletar</h2>
                </DivCardBotao>
                <DivCardBotao>
                    <img src={editar} alt="Editar" />
                    <h2>Editar</h2>
                </DivCardBotao>
            </DivCardBotoes>
        </DivCard>
    )
}

export default Card