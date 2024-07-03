import styled from "styled-components";
import deletar from "/imagens/deletar.png";
import editar from "/imagens/editar.png";
import ModalExclusao from "../../ModalExclusao";
import { useModalContext } from "../../../hooks/UseModalContext";
import { useState } from "react";

const DivCard = styled.div`
  min-width: 432px;
  min-height: 320px;
  border: 4px solid #2271d1;
  border-radius: 15px;
  box-shadow: inset 0 0 20px #2271d1;
  margin: 0 0 7px 0;

  @media(max-width: 1024px){
    min-width: 432px;
  }
  
  @media(max-width: 430px){
    min-width: 370px;
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  z-index: -1;
  border-radius: 15px;
`;

const DivCardBotoes = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto 0;
`;

const DivCardBotao = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & h2 {
    font-size: 20px;
    color: #ffffff;
    font-weight: bolder;
    padding-left: 10px;
  }

  & img {
    height: 29px;
    width: 29px;
  }
`;

function Card({ id, img }) {
  const { ehModalAberta, alterarVideoIdModal } = useModalContext();

  const [modalExclusaoAberta, setModalExclusaoAberta] = useState(false);

  return (
    <DivCard className="DivCard">
      <ModalExclusao modalAberta={modalExclusaoAberta} setModalAberta={setModalExclusaoAberta} videoId={id} />
      <ImgCard src={img} alt={img} />
      <DivCardBotoes className="DivCardBotoes">
        <DivCardBotao className="DivCardBotão" onClick={() => {setModalExclusaoAberta(true)}}>
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
