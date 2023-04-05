import { createGlobalStyle } from 'styled-components';
import './font.css';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  html {
    height: 100%;
  } 

  body {
    font-family: 'DX', Pretendard, 'Apple SD Gothic Neo', Roboto,'Helvetica Neue', 'Segoe UI', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', -apple-system,
      BlinkMacSystemFont, system-ui, sans-serif, Gotham;
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#141414;

   @media (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
   }

   &::-webkit-scrollbar {
    width: 8px;
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background-color: gray;
  }

  }

  
  #root {
    margin: 0 auto;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
    cursor: pointer;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }

  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }

  img{
    object-fit: cover;
  }

`;

export default GlobalStyle;
