import ClassTags from "../ClassTags";
import styled from "styled-components";
import Card from "./Card";
import { useVideosContext } from "../../hooks/UseVideosContext";

const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;
  top: -32px;

  @media(max-width: 1024px){

    align-items: center;
    top: 32px;
  }

  @media(max-width: 430px){
    
  }
`;

const DivCard = styled.div`
  width: 1356px;
  display: flex;
  justify-content: space-around;
  gap: 18px;
  margin: 0 3px 90px;
  overflow-x: auto;

  @media(max-width: 1024px){
    width: 894px;
  }

  @media(max-width: 430px){
    width: 390px;
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
