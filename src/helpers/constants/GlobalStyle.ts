import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *,
  *::before,
  *::after {
  box-sizing: border-box;
}

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #8A92A6;
    background-color: #E5E5E5;
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0px; 
    margin-bottom: 0px
}

  img {
    display: inline-block; 
    max-width: 100%; 
    height: auto
}

  input, textarea {
    display: block; 
    outline: transparent
}

  ol, ul {
    padding: 0; 
    margin: 0; 
    list-style: none
}

  a {
    text-decoration: none; 
    color: currentColor;
}

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

.my-node-appear {
  opacity: 0;
}

.my-node-appear-active {
  opacity: 1;
  transition: opacity 1200ms;
}

.appear {
  opacity: 0;
}

.appear-active {
  opacity: 1;
  transition: opacity 1200ms;
}

`;

export { GlobalStyle };
