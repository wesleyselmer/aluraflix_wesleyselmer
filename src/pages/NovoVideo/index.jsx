import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, useField } from "formik";
import { useVideosContext } from "../../hooks/UseVideosContext";

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
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 2.08vw;
    margin-bottom: 4.17vw;
    width: 100%;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5vw;
    width: calc(50% - 2.08vw);
  }

  input {
    background-color: transparent;
    border: 0.2vw solid #262626;
    border-radius: 0.7vw;
    padding: 1.04vw 0 1.04vw 1vw;
    width: 100%;
    font-size: 1.39vw;
    color: #a5a5a5;
    box-sizing: border-box;
  }

  textarea {
    background-color: transparent;
    border: 0.2vw solid #262626;
    border-radius: 0.7vw;
    padding: 1.04vw 0.35vw;
    font-size: 1.39vw;
    color: #a5a5a5;
  }

  .botoes {
    margin-bottom: 4.17vw;
  }

  button {
    background-color: transparent;
    border: 0.2vw solid #ffffff;
    border-radius: 0.7vw;
    padding: 1.04vw;
    width: 12.51vw;
    height: 3.75vw;
    color: #ffffff;
    margin-right: 2.08vw;
  }

  button:hover {
    border-color: #2271d1;
  }

  .erro {
    color: #e53935;
  }
`;

const MeuInputTexto = ({ label, ...props }) => {
  const [campo, meta] = useField(props);
  return (
    <div className="item">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...campo} {...props} />
      {meta.touched && meta.error ? (
        <div className="erro">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MeuSelect = ({ label, ...props }) => {
  const [campo, meta] = useField(props);
  return (
    <div className="item">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...campo} {...props} />
      {meta.touched && meta.error ? (
        <div className="erro">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MeuTextarea = ({ label, ...props }) => {
  const [campo, meta] = useField(props);
  return (
    <div className="item">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...campo} {...props} />
    </div>
  );
};

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
        validationSchema={Yup.object({
          titulo: Yup.string()
            .min(4, "No mínimo 4 caracteres")
            .max(50, "No máximo 50 caracteres")
            .required("Obrigatório"),
          categoria: Yup.string()
            .oneOf(["1", "2", "3"], "Tipo inválido")
            .required("Obrigatório"),
          imagem: Yup.string().required("Obrigatório"),
          link: Yup.string().required("Obrigatório"),
          descricao: Yup.string().max(143, "Máximo de 143 caracteres"),
        })}
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
        {props => (
        <FormNovoVideo onSubmit={props.handleSubmit}>
          <div className="linha">
            <MeuInputTexto
              label="Titulo"
              name="titulo"
              id="titulo"
              type="text"
              placeholder="Informe o título"
            />

            <MeuSelect label="Categoria: " name="categoria" id="categoria">
              <option value="">Escolha a categoria</option>
              <option value="1">Front-End</option>
              <option value="2">Back-End</option>
              <option value="3">Mobile</option>
            </MeuSelect>
          </div>
          <div className="linha">
            <MeuInputTexto
              label="Imagem"
              name="imagem"
              id="imagem"
              type="text"
              placeholder="Informe a imagem"
            />

            <MeuInputTexto
              label="Link"
              name="link"
              id="link"
              type="text"
              placeholder="Informe o link do vídeo"
            />
          </div>
          <div className="linha">
            <MeuTextarea
              label="Descricao"
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
