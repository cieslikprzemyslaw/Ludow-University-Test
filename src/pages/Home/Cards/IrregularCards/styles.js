// Deps scoped imports.
import styled from "styled-components";
import { BiRightArrowAlt } from 'react-icons/bi';

// Project scoped imports.
import { respondTo } from '../../../../assets/GlobalStyles/respondTo';
import { Pink, White } from '../../../../assets/GlobalStyles/globalStyles';
import Activities from "../../../../assets/images/cards/activities.png";
import Accommodation from "../../../../assets/images/cards/accommodation.png";

// Component scoped imports.

export const CardSection = styled.section`
    margin-top: 120px;
    margin-bottom: 80px;
    position: relative;

    ${respondTo.lg`
        margin-bottom: 168px;
    `};
`;

export const CardsWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    ${respondTo.xxl`
        justify-content: space-between;
    `}
`;

export const FirstSection = styled.figure``;

export const FirstImage = styled.img.attrs({
    src: Activities,
    alt: 'People on Holi Festival Of Colours',
    loading: 'lazy',
})`
    height: max-content;
    width: 100%;
    object-fit: cover;
    max-width: 510px;

    ${respondTo.xxl`
        max-width: 730px;
    `}
`;

export const SecondImage = styled.img.attrs({
    src: Accommodation,
    alt: 'housing estate',
    loading: 'lazy',
})`
    height: max-content;
    width: 100%;
    object-fit: cover;
`;

export const TextWrapper = styled.figcaption`
    position: absolute;
    bottom: -64px;
    left: 0;
    
    max-width: 400px;
    ${White}
`;

export const Title = styled.h5`
    margin: 32px 0 24px 24px;
    align-self: center;
`;

export const Text = styled.p`
    margin: 0 24px 16px 24px;
`;

export const Arrow = styled(BiRightArrowAlt)`
    margin: 0 16px;
    ${Pink}
`;
