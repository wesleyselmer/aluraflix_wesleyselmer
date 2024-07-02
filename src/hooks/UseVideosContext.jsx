import { useContext } from "react";
import { VideosContext } from "../context/VideosContext";

export const useVideosContext = () => {
  const { videos, setVideos } = useContext(VideosContext);

  function adicionarVideo(novoVideo) {
    const videoRepetido = videos.some(
      (item) => item.titulo === novoVideo.titulo && item.link === novoVideo.link
    );

    if (!videoRepetido) {
      setVideos([...videos, novoVideo]);
    } else {
      const novaLista = videos.map((video) => {
        if (video.id === novoVideo.id) {
          return novoVideo;
        } else {
          return video;
        }
      });
      setVideos(novaLista);
    }
  }

  function removerVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
  }

  return { videos, adicionarVideo, removerVideo };
};
