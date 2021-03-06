import { css } from 'styled-components';
import { respondTo } from './respondTo';

export const h1 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    line-height: 114%;
    text-transform: uppercase;

    ${respondTo.lg`
       font-size: 56px; 
    `}
`;

export const h3 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;

    ${respondTo.lg`
       font-size: 40px; 
    `}
`;

export const h4 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 100%;

    ${respondTo.lg`
       font-size: 40px; 
    `}
`;

export const h5 = () => css`
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;

    ${respondTo.lg`
       font-size: 20px; 
    `}
`;

export const p = () => css`
    font-family: 'Fira Sans';
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
`;

export const LinkTextSmall = () => css`
    font-family: 'Fira Sans';
    font-size: 14px;
    font-weight: normal;
    line-height: 150%;
    text-decoration: underline;
`;

export const SupportingCopy = () => css`
    font-family: 'Fira Sans';
    font-size: 14px;
    font-weight: normal;
    line-height: 150%;
`;

export const White = () => css`
    background-color: #FFF;
`;

export const WhiteText = () => css`
    color: #FFF;
`;

export const DarkGrey = () => css`
    color: #333333;
`;

export const Pink = () => css`
    color: #FF227F;
`;

export const HotFrost = () => css`
    background: rgb(0,194,255);
    background: linear-gradient(98deg, rgba(0,194,255,1) 0%, rgba(255,39,195,1) 79%);
`;

export const Slate = () => css`
    background: #3C444D;
`;
