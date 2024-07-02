import { createContext, useEffect, useState } from "react";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://wesleyselmer.github.io/aluraflix-api/db.json")
      .then((resposta) => resposta.json())
      .then((dados) => setVideos(dados));
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};
