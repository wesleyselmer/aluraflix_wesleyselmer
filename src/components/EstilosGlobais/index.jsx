import { createGlobalStyle } from "styled-components";

import MontserratRegular from "./fontes/Montserrat-Regular.ttf";
import MontserratMedium from "./fontes/Montserrat-Medium.ttf";
import MontserratSemiBold from "./fontes/Montserrat-SemiBold.ttf";
import MontserratBold from "./fontes/Montserrat-Bold.ttf";

const EstilosGlobais = createGlobalStyle`
    @font-face {
      font-family: 'MontserratRegular';
      src: local('Montserrat Regular'), local('MontserratRegular'), url(${MontserratRegular});
    }
    @font-face {
      font-family: 'MontserratMedium';
      src: local('Montserrat Medium'), local('MontserratMedium'), url(${MontserratMedium});
    }
    @font-face {
      font-family: 'MontserratSemiBold';
      src: local('Montserrat Semi Bold'), local('MontserratSemiBold'), url(${MontserratSemiBold});
    }
    @font-face {
      font-family: 'MontserratBold';
      src: local('Montserrat Bold'), local('MontserratBold'), url(${MontserratBold});
    }

    html {
      line-height: 1.15; 
      -webkit-text-size-adjust: 100%; 
      font-family: MontserratRegular;
      width: 100vw;
      background-color: #191919;
      overflow: scroll;
    }
    body {
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box; 
      height: 0; 
      overflow: visible; 
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none; 
      text-decoration: underline; 
      text-decoration: underline dotted; 
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace; 
      font-size: 1em; 
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; 
      font-size: 100%; 
      line-height: 1.15; 
      margin: 0; 
    }
    button,
    input { 
      overflow: visible;
    }
    button,
    select { 
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box; 
      color: inherit; 
      display: table; 
      max-width: 100%; 
      padding: 0; 
      white-space: normal; 
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; 
      padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    [type="search"] {
      outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button; 
      font: inherit; 
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    template {
      display: none;
    }
    [hidden] {
      display: none;
    }
  `;

export default EstilosGlobais;
