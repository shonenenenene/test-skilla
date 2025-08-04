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
			color: black;
			background-color: ${COLORS.gray2};
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
  	min-height: 105vh; // чтобы при навигации между роутами ебаный скролл не дергал контент 
    max-width: 100vw;
    background-color: ${COLORS.axe_main};
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

export const SectionPaddings = css`
  padding: 0 40px;
`;

export const SectionStyles = css`
  height: 100%;
  margin: 0 auto;
  width: 100%;
  position: relative;
  ${SectionPaddings};
`;

export const SectionWr = styled.section`
  ${SectionStyles}
`;

export const ErrorBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
`;

export default GlobalStyles;
