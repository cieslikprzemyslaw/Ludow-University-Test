// Deps scoped imports.
import styled from "styled-components";

// Project scoped imports.
import { respondTo } from '../../../../assets/GlobalStyles/respondTo';
import Banner from '../../../../assets/images/banner-image.png';
import { HotFrost, WhiteText } from '../../../../assets/GlobalStyles/globalStyles'

// Component scoped imports.

export const BannerImage = styled.section`
    min-height: 528px;
    width: 100%;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${respondTo.md`
        background-size: 100% 100%;
    `}
`;

export const Strap = styled.section`
    margin-bottom: 14px;
    height: 2px;
    width: 80px;
    ${HotFrost}
`;

export const Title = styled.h3`
    margin: 0 5vw 24px 5vw ;
    max-width: 842px;
    ${WhiteText}
    text-align: center;
`;

export const Button = styled.button`
    width: 290px;
    height: 64px;
    ${WhiteText}
    background-color: rgba(255, 255, 255, 0);
    border-image-source: linear-gradient(98.01deg, #00C2FF 14.16%, #FF27C3 79.91%);
    border-width: 1px;
    border-image-slice: 1;
    opacity: 0.8;
`;

export const ButtonText = styled.h5``;