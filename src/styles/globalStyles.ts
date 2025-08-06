import styled, { createGlobalStyle, css } from 'styled-components';
import { COLORS } from './variables';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'SF Pro Display';
    src: url('/fonts/SFProDisplay-Regular.otf') format('opentype');
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-sf-sans), sans-serif; 
    font-size: 50px;
    font-weight: normal;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		//border: 1px pink solid;
    //outline: 1px pink solid;
    ::selection {
			color: ${COLORS.text};
			background-color: ${COLORS.ui_icon};
		}
  }

  html {
    scroll-behavior: smooth;
    scroll-padding: 0;

    /* overflow-y: scroll; */
  }

  body {
    width: 100%;
    overflow-x: hidden;
  	min-height: 105vh; 
    max-width: 100vw;
    background-color: ${COLORS.border};
    color: inherit;
  }
  
  main {
    overflow: hidden;
    max-width: 100vw;
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: inherit;
    border: none;
  }

  button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {
			
    }

    &:disabled {
			
    }
  }
	
	header {
		position: relative;
		z-index: 99;
	}

  a {
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
`;

export default GlobalStyles;
