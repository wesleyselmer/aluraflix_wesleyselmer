import { styled } from "styled-components";
import { Formik, useField } from "formik";
import {useModalContext} from "../../hooks/UseModalContext";
import { useVideosContext } from "../../hooks/UseVideosContext";
import * as Yup from "yup";


const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.76);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1100px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }

    h1 {
      color: #2271d1;
      font-size: 60px;
      font-weight: bold;
    }
  }
`;

const FormNovoVideo = styled.form`
  width: 100%;
  font-size: 1.39vw;

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

const ModalEditar = ({ videoId }) => {
  const { modalAberta } = useModalContext();
  const { videos } = useVideosContext();
  const video = videos && videoId ? videos.find(videoId) : null;
  return (
    <>
      {video && modalAberta && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <h1>EDITAR CARD:</h1>
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
              {(props) => (
                <FormNovoVideo onSubmit={props.handleSubmit}>
                 
                    <MeuInputTexto
                      label="Titulo"
                      name="titulo"
                      id="titulo"
                      type="text"
                      placeholder="Informe o título"
                    />

                    <MeuSelect
                      label="Categoria: "
                      name="categoria"
                      id="categoria"
                    >
                      <option value="">Escolha a categoria</option>
                      <option value="1">Front-End</option>
                      <option value="2">Back-End</option>
                      <option value="3">Mobile</option>
                    </MeuSelect>
                 
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
                 
                    <MeuTextarea
                      label="Descricao"
                      name="descricao"
                      id="descricao"
                      placeholder="Sobre o que é esse vídeo?"
                      rows="7"
                      cols="106"
                    />
                 
                  <div className="botoes">
                    <button type="submit">Guardar</button>
                    <button>Limpar</button>
                  </div>
                </FormNovoVideo>
              )}
            </Formik>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalEditar;
