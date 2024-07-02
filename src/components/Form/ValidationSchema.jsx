import * as Yup from "yup";

const ValidationSchema = Yup.object({
  titulo: Yup.string()
    .min(4, "No mínimo 4 caracteres")
    .max(50, "No máximo 50 caracteres")
    .required("Obrigatório"),
  categoria: Yup.string()
    .oneOf(["1", "2", "3"], "Tipo inválido")
    .required("Obrigatório"),
  imagem: Yup.string()
  .url('O endereço da imagem precisa ser uma URL válida')
  .transform((currentValue) => {
    const doesNotStartWithHttp =
      currentValue &&
      !(
        currentValue.startsWith('http://') ||
        currentValue.startsWith('https://')
      );

    if (doesNotStartWithHttp) {
      return `http://${currentValue}`;
    }
    return currentValue;
  })
  .required("Obrigatório"),
  link: Yup.string()
  .url('O link do vídeo precisa ser uma URL válida')
  .transform((currentValue) => {
    const doesNotStartWithHttp =
      currentValue &&
      !(
        currentValue.startsWith('http://') ||
        currentValue.startsWith('https://')
      );

    if (doesNotStartWithHttp) {
      return `http://${currentValue}`;
    }
    return currentValue;
  })
  .required("Obrigatório"),
  descricao: Yup.string().max(143, "Máximo de 143 caracteres"),
});

export default ValidationSchema;