import styled from "styled-components";

const DivNovoVideo = styled.div`
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 81.39vw;
  margin: auto;

  h1 {
    font-size: 4.17vw;
    font-weight: bolder;
    margin: 4.86vw 0 0.7vw 0;
  }

  p {
    font-size: 1.4vw;
    margin-bottom: 3.26vw;
  }

  div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  h2 {
    width: 100%;
    font-size: 2.5vw;
    font-weight: bold;
    border-top: 0.2vw solid #262626;
    border-bottom: 0.2vw solid #262626;
    margin: 0 0 4.17vw 0;
    padding: 1.67vw 0;
  }
`;

const FormNovoVideo = styled.form`
  width: 100%;
  font-size: 1.39vw;

  .linha {
    display: flex;
    flex-direction: row;
    align-items: normal;
    flex-wrap: nowrap;
    margin-bottom: 4.17vw;
  }

  .item {
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: transparent;
    border: 0.2vw solid #262626;
    border-radius: 0.7vw;
    padding: 1.04vw 0.35vw;
    width: 80%;
    font-size: 1.39vw;
    color: #a5a5a5;
  }

  textarea {
    background-color: transparent;
    border: 0.2vw solid #262626;
    border-radius: 0.7vw;
    padding: 1.04vw 0.35vw;
    font-size: 1.39vw;
    color: #a5a5a5;
  }

  button{
    background-color: transparent;
    border: 0.2vw solid #FFFFFF;
    border-radius: 0.7vw;
    padding: 1.04vw;
    width: 12.51vw;
    height: 3.75vw;
    color: #FFFFFF;
    margin-right: 2.08vw;
  }

  button:hover{
    border-color: #2271d1;
  }
`;

function NovoVideo() {
  function adicionarVideo() {}

  return (
    <DivNovoVideo>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <div>
        <h2>Criar Card</h2>
      </div>
      <FormNovoVideo>
        <div className="linha">
          <div className="item">
            <label>Título</label>
            <input placeholder="Informe um título" />
          </div>
          <div className="item">
            <label>Categoria</label>
            <input placeholder="Selecione uma categoria" />
          </div>
        </div>
        <div className="linha">
          <div className="item">
            <label>imagem</label>
            <input placeholder="Informe o caminho da imagem" />
          </div>
          <div className="item">
            <label>Video</label>
            <input placeholder="Link do vídeo no YouTube" />
          </div>
        </div>
        <div className="linha">
          <div className="item">
            <label>Descrição</label>
            <textarea
              placeholder="Sobre o que é esse vídeo?"
              rows="6"
              cols="97"
            ></textarea>
          </div>
        </div>
        <div className="linha">
          <button type="submit" onClick={() => adicionarVideo()}>
            Guardar
          </button>
          <button>Limpar</button>
        </div>
      </FormNovoVideo>
    </DivNovoVideo>
  );
}

export default NovoVideo;
