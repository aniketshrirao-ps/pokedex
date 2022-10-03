import { createGlobalStyle } from 'styled-components';
import theme from '.';

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
  background-color: ${theme.colors.BACKGROUND_COLOR};
  font-family: 'Roboto';
    font-style: normal;
  }
  ol, ul {
  list-style: none;
  }
  blockquote, q {
  quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  ul, li {
    list-style-type: none;
  }

	a {
		text-decoration: none;
		color: inherit;
		&:hover {
			color: inherit; 
		}
	}

    /* custom stylings  */
    .overflow-hide { overflow:hidden; }
    .hide { display: none; }

    .searchContainerCustomModal {
      width: 100%;
      height: 100%;
      margin: 0 auto !important;
    }

    .customOverlay {
      background-color: ${theme.colors.BACKDROP_COLOR};
    }

    .react-responsive-modal-closeButton {
        top: 40px;
        right: 45px;
    }

    .customPokeReadMore {
      max-width: 500px;
      margin:0 auto;
      
      p {
        padding:30px 2%;
        opacity: 0.7;
        color: ${theme.colors.WHITE};
      }

      & > div {
        background-color: ${theme.colors.PRIMARY_COLOR};
      }
      .react-responsive-modal-closeButton {
        top: 12px;
        right: 25px;
         svg {
          path {
            stroke: ${theme.colors.WHITE};
          }
         }
      }
    }

    @media screen and (min-width: 769px) {
      .poke-name {
        position: absolute;
        text-transform: capitalize;
        left: 36%;
      }
      .poke-number {
        position: absolute;
        margin-top: 25px !important;
        left: 65%;
        padding:0 3%;
        border-left: 1px solid  ${theme.colors.SEPERATOR};
        border-right: 1px solid ${theme.colors.SEPERATOR};
      }
  
      .poke-desc {
        margin-top: 80px !important;
        width: 60% !important;
      }
    }

    .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      top: 225px !important;
      max-height: 40% !important;
    }

    ::-webkit-scrollbar-track {
      border-radius: 50px;
      background: ${theme.colors.SCROLLBAR_TRACK};
      box-shadow: inset 0 0 6px  ${theme.colors.SCROLLBAR_BOX_SHADOW};
      -webkit-box-shadow: inset 0 0 6px  ${theme.colors.SCROLLBAR_BOX_SHADOW};
    }

    ::-webkit-scrollbar {
      width: 5px;
      background-color: ${theme.colors.SCROLLBAR_BG};
    }

    ::-webkit-scrollbar-thumb {
      min-height: 50px;
      border-radius: 50px;
      box-shadow: inset 0 0 6px  ${theme.colors.SCROLLBAR_BOX_SHADOW};
      -webkit-box-shadow: inset 0 0 6px  ${theme.colors.SCROLLBAR_BOX_SHADOW};
      background:  ${theme.colors.SCROLLBAR_THUMB_BG};
    }
`;

export default GlobalStyle;
