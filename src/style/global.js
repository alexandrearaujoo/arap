import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	vertical-align: baseline;
  box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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

body, button, input, textarea, select {
  font-family: var(--fontfamily-poppins);
}

:root {
  --color-primary: #272B55;
  --color-primary-50: #545CB7;
  --color-secondary: #4A5292;
  
  --black: #13191B;
  --white: #F5F5F5;

  --background-menus: #D9E0F5;

  --purple-4: #4C526B;
  --purple-3: #5C5B74;
  --purple-2: #626879;
  --purple-1: #839EAC;

  --fontsize-h1: 2rem;
  --fontsize-h2: calc(var(--fontsize-h1) - 25%);
  --fontsize-h3: calc(var(--fontsize-h2) - 50%);
  --headline: 0.75rem;
  --body: 1rem;

  --fontfamily-poppins: "Poppins", sans-serif;
  
}`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column ? "column" : "row"};
  justify-content: ${(props) => props.column ? "space-evenly" : "space-between"};
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`