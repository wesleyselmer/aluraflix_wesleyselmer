import ClassTags from "../ClassTags";
import styled from "styled-components";
import Card from "./Card";
import { useVideosContext } from "../../hooks/UseVideosContext";

const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.78vw 2.78vw;
  gap: 2.78vw;

  position: relative;
  top: -2vw;
`;

const DivCard = styled.div`
  width: calc(100vw - 5.56vw);
  display: flex;
  justify-content: space-around;
  margin-bottom: 6.46vw;
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    background: rgba(34, 113, 209, .17);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2271D1;
  }
`;

function Cards() {
  const { videos } = useVideosContext();
  const videosFE = [];
  const videosBE = [];
  const videosMB = [];

  videos.forEach((video) => {
    if (video.categoria === "1") {
      videosFE.push(video);
    }
    if (video.categoria === "2") {
      videosBE.push(video);
    }
    if (video.categoria === "3") {
      videosMB.push(video);
    }
  });

  return (
    <DivCards>
      <ClassTags local="main">FRONT END</ClassTags>
      <DivCard className="FrontEnd">
        {videosFE.length > 0
          ? videosFE.map((videoFE) => (
              <Card key={videoFE.id} id={videoFE.id} img={videoFE.imagem} />
            ))
          : ""}
      </DivCard>
      <ClassTags local="main">BACK END</ClassTags>
      <DivCard className="BackEnd">
        {videosBE.length > 0
          ? videosBE.map((videoBE) => (
              <Card key={videoBE.id} id={videoBE.id} img={videoBE.imagem} />
            ))
          : ""}
      </DivCard>
      <ClassTags local="main">MOBILE</ClassTags>
      <DivCard className="Mobile">
        {videosMB.length > 0
          ? videosMB.map((videoMB) => (
              <Card key={videoMB.id} id={videoMB.id} img={videoMB.imagem} />
            ))
          : ""}
      </DivCard>
    </DivCards>
  );
}

export default Cards;
