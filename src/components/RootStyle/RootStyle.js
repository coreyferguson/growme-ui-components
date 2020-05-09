import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../../styles/theme';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    font-family: ${theme.styles.font_family};
    letter-spacing: ${theme.styles.letter_spacing};

    // desktop
    @media (min-width: 800px) {
      font-size: 24px;
    }

    // mobile
    @media (max-width: 799px) {
      font-size: 14px;
    }
  }
`;

export default styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.background};
  color: ${theme.colors.foreground};
  font-family: ${theme.styles.font_family};
  letter-spacing: ${theme.styles.letter_spacing};

  // desktop
  @media (min-width: 800px) {
    font-size: 24px;
  }

  // mobile
  @media (max-width: 799px) {
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 0;
  }

  h1 {
    // desktop
    @media (min-width: 800px) {
      font-size: 3em;
    }

    // mobile
    @media (max-width: 799px) {
      font-size: 2em;
    }
  }

  h2 {
    // desktop
    @media (min-width: 800px) {
      font-size: 1.5em;
    }

    // mobile
    @media (max-width: 799px) {
      font-size: 1em;
    }

  }

  textarea {
    background-color: ${theme.colors.background_lighten_1};
    color: ${theme.colors.foreground_lighten_1};
    border: 0px;
    border-bottom: 1px solid ${theme.colors.foreground_lighten_1};
    resize: none;
    font-size: 1em;
    padding: ${theme.sizes.padding_cozy};
  }
  textarea:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.primary};
  }

  input[type=file] {
    outline: none;
    padding-bottom: ${theme.sizes.padding_cozy};
    cursor: pointer;
  }
  input[type=file]:focus {
    border-bottom: 1px solid ${theme.colors.primary};
  }


  input[type=text] {
    background-color: ${theme.colors.background_lighten_1};
    color: ${theme.colors.foreground_lighten_1};
    border: 0px;
    border-bottom: 1px solid ${theme.colors.foreground_lighten_1};
    resize: none;
    font-size: 100%;
    padding: 5px;
  }
  input[type=text]:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.actionable_unvisited};
  }

  a:visited {
    color: ${theme.colors.actionable_visited};
  }

  figure {
    margin: 0;
  }

  p {
    box-sizing: border-box;
    padding-top: ${theme.sizes.padding_spacious};
    padding-bottom: ${theme.sizes.padding_spacious};
    margin: 0;
  }

  .no-select {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .pop {
    color: ${theme.colors.primary};
  }
`;