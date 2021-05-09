// Deps scoped imports.
import styled from "styled-components";

// Project scoped imports.
import { White, WhiteText, DarkGrey, Pink } from '../../../../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const Event = styled.article`
    margin-top: 48px;
    position: relative;
`;

export const DateSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    height: 176px;
    width: 180px;
    ${White}
`;

export const Day = styled.p`
    ${Pink}
    font-family: 'Oswald';
    font-weight: 300;
    font-style: normal;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
`;

export const Month = styled.p`
    ${DarkGrey}
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
`;

export const ImageSection = styled.figure``;

export const Image = styled.img``;

export const ImageTitle = styled.h3`
    position: absolute;
    bottom: 32px;
    left: 16px;
    width: 368px;
    height: 96px;
    ${WhiteText}
`;