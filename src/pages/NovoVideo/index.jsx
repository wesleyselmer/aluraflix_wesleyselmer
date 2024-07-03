import React from "react";
import styled from "styled-components";
import ValidationSchema from "../../components/Form/ValidationSchema";
import InputTexto from "../../components/Form/InputTexto";
import Select from "../../components/Form/Select";
import Textarea from "../../components/Form/Textarea";
import { Formik } from "formik";
import { useVideosContext } from "../../hooks/UseVideosContext";

const DivNovoVideo = styled.div`
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1360px;
  margin: auto;

  h1 {
    font-size: 60px;
    font-weight: bolder;
    margin: 40px 0 6px 0;
  }

  p {
    font-size: 20px;
    margin-bottom: 27px;
  }

  div {
    width: 100%;
  }

  h2 {
    width: 100%;
    font-size: 36px;
    font-weight: bold;
    border-top: 2px solid #262626;
    border-bottom: 2px solid #262626;
    margin-bottom: 30px;
    padding: 14px 0;
  }

  @media(max-width: 1024px){
    width: 924px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 15px;
    }
  }

  @media(max-width: 430px){
    width: 330px;
  }
`;

const FormNovoVideo = styled.form`
  width: 100%;
  font-size: 20px;

  .linha {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 60px;
    margin-bottom: 30px;
    width: 100%;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 50%;
  }

  input, select, textarea {
    background-color: transparent;
    border: 2px solid #262626;
    border-radius: 15px;
    padding: 15px 0 15px 15px;
    width: 100%;
    font-size: 20px;
    color: #a5a5a5;
    box-sizing: border-box;
  }

  select{
    appearance: none;
    background-image: url('/imagens/arrow-down.png');
    background-size: 12%;
    background-position: right 0px top 50%;
    background-repeat: no-repeat;
  }

  .botoes {
    margin-bottom: 60px;
    display: flex;
    gap: 20px;
  }

  button {
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 10px;
    width: 180px;
    height: 54px;
    color: #ffffff;
  }

  button:hover {
    border-color: #2271d1;
  }

  .erro {
    color: #e53935;
  }

  @media(max-width: 1024px){
   .linha {
    gap: 10px;
   } 
  }

  @media(max-width: 430px){
    .linha {
      flex-direction: column;
    }

    .item {
      width: 100%;
    }
  }
`;

const NovoVideo = () => {
  const { videos, adicionarVideo } = useVideosContext();

  return (
    <DivNovoVideo>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <div>
        <h2>Criar Card</h2>
      </div>
      <Formik
        initialValues={{
          titulo: "",
          categoria: "",
          imagem: "",
          link: "",
          descricao: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, actions) => {
          const novoVideo = {
            id: String(videos.length + 1),
            categoria: values.categoria,
            titulo: values.titulo,
            imagem: values.imagem,
            link: values.link,
            descricao: values.descricao,
          };
          setTimeout(() => {
            adicionarVideo(novoVideo);
            actions.setSubmitting(false);
          }, 1000);
          console.log(videos);
        }}
      >
        {(props) => (
          <FormNovoVideo onSubmit={props.handleSubmit}>
            <div className="linha">
              <InputTexto
                label="Título:"
                name="titulo"
                id="titulo"
                type="text"
                placeholder="Informe o título do card"
              />

              <Select label="Categoria: " name="categoria" id="categoria">
                <option value="">Escolha a categoria</option>
                <option value="1">Front-End</option>
                <option value="2">Back-End</option>
                <option value="3">Mobile</option>
              </Select>
            </div>
            <div className="linha">
              <InputTexto
                label="Imagem:"
                name="imagem"
                id="imagem"
                type="text"
                placeholder="Informe o link da imagem"
              />

              <InputTexto
                label="Link:"
                name="link"
                id="link"
                type="text"
                placeholder="Informe o link do vídeo"
              />
            </div>
            <div className="linha">
              <Textarea
                label="Descrição:"
                name="descricao"
                id="descricao"
                placeholder="Sobre o que é esse vídeo?"
                rows="7"
                cols="106"
              />
            </div>
            <div className="botoes">
              <button type="submit">Guardar</button>
              <button>Limpar</button>
            </div>
          </FormNovoVideo>
        )}
      </Formik>
    </DivNovoVideo>
  );
};

export default NovoVideo;
