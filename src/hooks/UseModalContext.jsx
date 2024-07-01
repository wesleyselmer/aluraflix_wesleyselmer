import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModalContext = () => {
    const { modalAberta, setModalAberta } = useContext(ModalContext);
    const { videoId, setVideoId } = useContext(ModalContext);

    function ehModalAberta(valor){
        setModalAberta(valor);
    }

    function alterarVideoIdModal(id){
        setVideoId(id);
    }

    return { modalAberta, videoId, ehModalAberta, alterarVideoIdModal }
}