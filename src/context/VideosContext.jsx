import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export default function VideosProvider ({ children }) {
  const [videos, setVideos] = useState([]);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export function useVideoContext() {
    const { videos, setVideos } = useContext(VideosContext);

    function adicionarVideo(novoVideo) {
        const videoRepetido = videos.some(item => item.id === novoVideo.id)

        let novaLista = [...videos];

        if(!videoRepetido) {
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
        const novaLista = videos.filter(video => video.id !== id);

        return setVideos(novaLista);
    }

    return { videos, adicionarVideo, removerVideo }
}