import { css } from 'styled-components';
import { respondTo } from './respondTo';

export const h1 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    line-height: 114%;
    text-transform: uppercase;

    ${respondTo.lg`
       font-size: 56px; 
    `}
`;

export const h3 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    line-height: 120%;

    ${respondTo.lg`
       font-size: 40px; 
    `}
`;

export const h4 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    line-height: 100%;

    ${respondTo.lg`
       font-size: 40px; 
    `}
`;

export const h5 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;

    ${respondTo.lg`
       font-size: 20px; 
    `}
`;

export const p = () => css`
    font-family: 'Fira Sans';
    font-size: 16px;
    line-height: 150%;
`;

export const White = () => css`
    background-color: #FFF;
`;

export const DarkGrey = () => css`
    color: #333333;
`;

export const Pink = () => css`
    color: #FF227F;
`;

export const HotFrost = () => css`
    background: linear-gradient(98.01deg, #00C2FF 14.16%, #FF27C3 79.91%);
`;

export const Slate = () => css`
    background: #3C444D;
`;