import styled from "styled-components";

const DivTags = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$cor};
  color: #f5f5f5;
  font-size: ${(props) => props.$fontSize};
  font-weight: bolder;
  line-height: auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.39vw;

  @media(max-width: 430px){
    width: 286px;
    height: 70px;
    font-size: 24px;
  }
`;

function ClassTags({ children, local }) {
  function defineCorTag() {
    switch (children) {
      case "BACK END":
        return "#00C86F";
      case "FRONT END":
        return "#6BD1FF";
      case "MOBILE":
        return "#FFBA05";
    }
  }
  const widthBanner = "20vw";
  const heightBanner = "6vw";
  const fontSizeBanner = "2.5vw";

  const widthMain = "27vw";
  const heightMain = "4.86vw";
  const fontSizeMain = "2.22vw";

  let width = "";
  let height = "";
  let fontSize = "";

  if (local === "banner") {
    width = widthBanner;
    height = heightBanner;
    fontSize = fontSizeBanner;
  } else {
    width = widthMain;
    height = heightMain;
    fontSize = fontSizeMain;
  }

  return (
    <DivTags
      $cor={defineCorTag()}
      $width={width}
      $height={height}
      $fontSize={fontSize}
    >
      {children}
    </DivTags>
  );
}

export default ClassTags;
