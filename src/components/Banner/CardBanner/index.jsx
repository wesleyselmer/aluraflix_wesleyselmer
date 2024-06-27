import ClassTags from "@/components/ClassTags";
import { useState } from "react";
import styled from "styled-components";

const DivCardBanner = styled.div`
  width: 94vw;
  height: 23vw;
  margin: 0 2.78vw;
  display: flex;
  gap: 1.39vw;
  position: relative;
  top: -35vw;

  align-items: center;
  justify-content: center;

  img {
      width: 45vw;
      height: 23vw;
    }
`;

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 46vw; 
    height: 21vw; 
    color: #F5F5F5;

    h1 {
        font-size: 3.19vw;
        margin: 2.78vw 0 0;
    }

    p {
        font-size: 1.25vw;
        font-weight: lighter;
        margin: 0.7vw 0 0;
    }
`

function CardBanner({ video }) {
  let categoria = '';

  if(video.categoria === "1"){
    categoria = "FRONT END";
  }

  if(video.categoria === "2"){
    categoria = "BACK END";
  }

  if(video.categoria === "3"){
    categoria = "MOBILE";
  }
  
  return (
    <DivCardBanner className="DivClassBanner">
      <DivInfo>
        <ClassTags local='banner'>{categoria}</ClassTags>
        <h1>{video.titulo}</h1>
        <p>
          {video.descricao}
        </p>
      </DivInfo>
      <img src={video.imagem} alt="Banner do Card" />
    </DivCardBanner>
  );
}

export default CardBanner;
