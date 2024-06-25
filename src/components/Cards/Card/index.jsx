import styled from "styled-components"
import deletar from "/imagens/deletar.png"
import editar from "/imagens/editar.png"

const DivCard = styled.div`
    width: 30vw;
    height: 22vw;
    border: 2px solid #2271d1;
    border-radius: 10px;
    box-shadow: inset 0 5px 20px #2271d1;
    margin: auto;
    overflow: hidden;
    

    & img {
       width: 100%;
       height: 18vw; 
       object-fit: cover;
    }
`
const DivCardBotoes = styled.div`
    height: 3vw; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const DivCardBotao = styled.div`
    display: flex;
    align-items: center;

    & h2 {
        font-size: 16px;
        color: #FFFFFF;
        font-weight: bolder;
        padding-left: 10px;
    }

    & img {
        height: 2vw;
        width: 2vw;
    }
`

function Card({ img }) {
    return (
        <DivCard className="DivCard">
            <img src={img} alt={img} />
            <DivCardBotoes className="DivCardBotoes">
                <DivCardBotao className="DivCardBotão">
                    <img src={deletar} alt="Deletar" />
                    <h2>Deletar</h2>
                </DivCardBotao>
                <DivCardBotao className="DivCardBotão">
                    <img src={editar} alt="Editar" />
                    <h2>Editar</h2>
                </DivCardBotao>
            </DivCardBotoes>
        </DivCard>
    )
}

export default Card