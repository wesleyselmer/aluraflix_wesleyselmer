import styled from "styled-components";
import deletar from "/imagens/deletar.png";
import editar from "/imagens/editar.png";
import { useVideosContext } from "../../../hooks/UseVideosContext";
import { useModalContext } from "../../../hooks/UseModalContext";

const DivCard = styled.div`
  width: 30vw;
  min-width: 432px;
  height: 22vw;
  min-height: 325px;
  border: 0.14vw solid #2271d1;
  border-radius: 0.7vw;
  box-shadow: inset 0 0.35vw 1.39vw #2271d1;
  margin: 0 0.5vw 0.5vw 0;
`;

const ImgCard = styled.img`
  width: 100%;
  height: 18vw;
  min-height: 260px;
  object-fit: cover;
  z-index: -1;
`;

const DivCardBotoes = styled.div`
  height: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const DivCardBotao = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & h2 {
    font-size: 1.11vw;
    color: #ffffff;
    font-weight: bolder;
    padding-left: 0.7vw;
  }

  & img {
    height: 2vw;
    width: 2vw;
  }
`;

function Card({ id, img }) {
  const { removerVideo } = useVideosContext();
  const { ehModalAberta, alterarVideoIdModal } = useModalContext();

  return (
    <DivCard className="DivCard">
      <ImgCard src={img} alt={img} />
      <DivCardBotoes className="DivCardBotoes">
        <DivCardBotao className="DivCardBotão" onClick={() => removerVideo(id)}>
          <img src={deletar} alt="Deletar" />
          <h2>Deletar</h2>
        </DivCardBotao>
        <DivCardBotao
          className="DivCardBotão"
          onClick={() => {
            alterarVideoIdModal(id);
            ehModalAberta(true);
            window.scrollTo(0, 0);
          }}
        >
          <img src={editar} alt="Editar" />
          <h2>Editar</h2>
        </DivCardBotao>
      </DivCardBotoes>
    </DivCard>
  );
}

export default Card;
