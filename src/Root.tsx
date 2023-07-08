import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Coins from "./screens/Coins";

const GlobalStyles=createGlobalStyle`
@import url('https://fonts.googeapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+3:wght@300;400&display=swap');

/***
    The new CSS reset - version 1.9 (last updated 19.6.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
***/

/*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
 */
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}
body{
  font-family: 'Source Sans 3', sans-serif;
  background-color: ${(props)=>props.theme.bgColor};
  color: ${(props)=>props.theme.textColor};
}

/* Preferred box-sizing value */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reapply the pointer cursor for anchor tags */
a, button {
    cursor: revert;
}
a{
  text-decoration: none;
  color:inherit;
}
/* Remove list styles (bullets/numbers) */
ol, ul, menu {
    list-style: none;
}

/* For images to not be able to exceed their container */
img {
    max-inline-size: 100%;
    max-block-size: 100%;
}

/* removes spacing between cells in tables */
table {
    border-collapse: collapse;
}

/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
input, textarea {
    -webkit-user-select: auto;
}

/* revert the 'white-space' property for textarea elements on Safari */
textarea {
    white-space: revert;
}

/* minimum style to allow to style meter element */
meter {
    -webkit-appearance: revert;
    appearance: revert;
}

/* preformatted text - use only for this feature */
:where(pre) {
    all: revert;
}

/* reset default text opacity of input placeholder */
::placeholder {
    color: unset;
}

/* remove default dot (•) sign */
::marker {
    content: initial;
}

/* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
:where([hidden]) {
    display: none;
}

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

/* apply back the draggable feature - exist only in Chromium and Safari */
:where([draggable="true"]) {
    -webkit-user-drag: element;
}

/* Revert Modal native behavior */
:where(dialog:modal) {
    all: revert;
}
  
`


function Root() {
  return <>
  <GlobalStyles/>
   <Coins/>
    {/* <Outlet/> */}
    </>
}

export default Root;
