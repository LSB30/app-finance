import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background-color: #f2f2f2;
}

:root {
  font-size: 62.5%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
}
`;

export default Global;
