import { createGlobalStyle } from 'styled-components';
import './index.css';
import { DarkGrey, h1, h3, h4, h5, p } from './globalStyles';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-size: 62.5%; /* 1 rem = 10px, 10px/16p = 62.5% */
}
body {
  font-family: 'Oswald', sans-serif;
  font-size: 1.6rem ;
  background-color: #fff;
  ${DarkGrey}
  font-weight: 300 ;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;   
}
h1{
  ${h1}
}
h3{
  ${h3}
}
h4{
  ${h4}
}
h5{
  ${h5}
}
p{
  ${p}
}
img {
    max-width: 100%;
    height: auto;
}
video {
  width: 100%;
  height: auto;
}
`;
