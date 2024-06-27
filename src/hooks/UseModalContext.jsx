import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModalContext = () => {
    const { modalAberta, setModalAberta } = useContext(ModalContext);
    const { videoId, setVideoId } = useContext(ModalContext);

    function alterarModal(valor){
        setModalAberta(valor);
    }

    function alterarVideoId(id){
        setVideoId(id);
    }

    return { modalAberta, videoId, alterarModal, alterarVideoId }
}