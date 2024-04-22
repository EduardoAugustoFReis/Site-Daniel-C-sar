import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    font-family: "Poppins", sans-serif;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }

  button:hover{
    filter: brightness(0.9);
  }
  
`;

export default GlobalStyles;