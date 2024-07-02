import { styled } from "styled-components";
import { Formik } from "formik";
import { useModalContext } from "../../hooks/UseModalContext";
import { useVideosContext } from "../../hooks/UseVideosContext";
import * as Yup from "yup";
import InputTexto from "../Form/InputTexto";
import Select from "../Form/Select";
import Textarea from "../Form/Textarea";

const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.76);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const DialogEstilizado = styled.dialog`
  z-index: 2;
  position: absolute;
  top: 50px;
  background: #03122f;
  padding: 0;
  border: 5px solid #6bd1ff;
  border-radius: 15px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #2271d1;
    font-size: 60px;
    font-weight: bolder;
  }
`;

const FormNovoVideo = styled.form`
  width: 100%;
  font-size: 1.39vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5vw;
    width: 80%;
    color: #ffffff;
  }

  input {
    background-color: transparent;
    border: 0.2vw solid #2271d1;
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
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: inset 0 0 1.2vw #2271d1;
  }

  .erro {
    color: #e53935;
  }
`;

const ModalEditar = () => {
  const { modalAberta, videoId, ehModalAberta, alterarVideoIdModal } =
    useModalContext();
  const { videos, adicionarVideo } = useVideosContext();
  const videoModal = videos.find((video) => video.id === videoId);

  return (
    <>
      {videoModal && modalAberta && (
        <>
          <Overlay />
          <DialogEstilizado>
            <h1>EDITAR CARD:</h1>
            <Formik
              initialValues={{
                titulo: videoModal.titulo,
                categoria: videoModal.categoria,
                imagem: videoModal.imagem,
                link: videoModal.link,
                descricao: videoModal.descricao,
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
              onSubmit={(values) => {
                const novoVideo = {
                  id: videoModal.id,
                  titulo: values.titulo,
                  categoria: values.categoria,
                  imagem: values.imagem,
                  link: values.link,
                  descricao: values.descricao,
                };
                adicionarVideo(novoVideo);
                ehModalAberta(false);
              }}
            >
              {(props) => (
                <FormNovoVideo onSubmit={props.handleSubmit}>
                  <InputTexto
                    label="Titulo"
                    name="titulo"
                    id="titulo"
                    type="text"
                  />

                  <Select label="Categoria: " name="categoria" id="categoria">
                    <option value="">Escolha a categoria</option>
                    <option value="1">Front-End</option>
                    <option value="2">Back-End</option>
                    <option value="3">Mobile</option>
                  </Select>

                  <InputTexto
                    label="Imagem"
                    name="imagem"
                    id="imagem"
                    type="text"
                  />

                  <InputTexto label="Link" name="link" id="link" type="text" />

                  <Textarea
                    control="textarea"
                    label="Descricao"
                    name="descricao"
                    id="descricao"
                    rows="7"
                    cols="106"
                  />

                  <div className="botoes">
                    <button type="submit">Guardar</button>
                    <button type="button" onClick={() => ehModalAberta(false)}>
                      Sair
                    </button>
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
