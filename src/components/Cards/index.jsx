import ClassTags from "../ClassTags";
import styled from "styled-components";
import Card from "./Card";
import { useVideoContext } from "../../hooks/UseVideosContext";

const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 40px;
  gap: 40px;

  position: relative;
  top: -2vw;
`;

const DivCard = styled.div`
  width: calc(100vw - 80px);
  display: flex;
  gap: 30px;
  margin-bottom: 93px;
`;

function Cards() {
  const { videos } = useVideoContext();
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
              <Card key={videoFE.id} img={videoFE.imagem} />
            ))
          : ""}
      </DivCard>
      <ClassTags local="main">BACK END</ClassTags>
      <DivCard className="BackEnd">
        {videosBE.length > 0
          ? videosBE.map((videoBE) => (
              <Card key={videoBE.id} img={videoBE.imagem} />
            ))
          : ""}
      </DivCard>
      <ClassTags local="main">MOBILE</ClassTags>
      <DivCard className="Mobile">
        {videosMB.length > 0
          ? videosMB.map((videoMB) => (
              <Card key={videoMB.id} img={videoMB.imagem} />
            ))
          : ""}
      </DivCard>
    </DivCards>
  );
}

export default Cards;
