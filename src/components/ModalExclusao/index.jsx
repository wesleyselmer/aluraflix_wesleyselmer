import { styled } from "styled-components";
import { useVideosContext } from "../../hooks/UseVideosContext";

const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const DialogEstilizado = styled.dialog`
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #03122f;
  border: 5px solid #6bd1ff;
  border-radius: 15px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #2271d1;
    font-size: 20px;
    font-weight: bolder;
  }

  div>button{
    background-color: transparent;
    border: 0.2vw solid #ffffff;
    border-radius: 0.7vw;
    padding: 1.04vw;
    width: 12.51vw;
    height: 3.75vw;
    color: #ffffff;
    margin-right: 2.08vw;
  }
`;

const ModalExclusao = ({modalAberta, setModalAberta, videoId}) => {
  const { removerVideo } = useVideosContext();

  if (!modalAberta) return null;

  return (
    <>
      <Overlay>
        <DialogEstilizado>
          <h1>Deseja mesmo excluir esse item?</h1>
          <div>
          <button onClick={() => {removerVideo(videoId)}}>Sim</button>
          <button onClick={() => {setModalAberta(false)}}>Não</button>
          </div>
        </DialogEstilizado>
      </Overlay>
    </>
  );
};

export default ModalExclusao;
