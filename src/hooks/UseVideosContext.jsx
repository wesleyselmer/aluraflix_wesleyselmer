import { useContext } from "react";
import { VideosContext } from "../context/VideosContext";

export const useVideosContext = () => {
  const { videos, setVideos } = useContext(VideosContext);

  function adicionarVideo(novoVideo) {
    const videoRepetido = videos.some((item) => item.titulo === novoVideo.titulo && item.link === novoVideo.link);
    let novaLista = [...videos];

    if (!videoRepetido) {
      novaLista.push(novoVideo);
      return setVideos(novaLista);
    }

    novaLista = videos.map((video) => {
      if (video.id === novoVideo.id) {
        video = novoVideo;
      }
      return setVideos(novaLista);
    });
  }

  function removerVideo(id) {
    const novaLista = videos.filter((video) => video.id !== id);

    return setVideos(novaLista);
  }

  function atualizarVideo(id, videoAlterado) {
    videos.map((video) => {
      if (video.id === id) {
        return videoAlterado;
      }
      return video;
    });
  }

  return { videos, adicionarVideo, atualizarVideo, removerVideo };
};
