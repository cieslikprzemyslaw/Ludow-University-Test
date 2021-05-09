// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { respondTo } from '../../../../assets/GlobalStyles/respondTo';
import Image from '../../../../assets/images/person.png';
import LogoIcon from '../../../../assets/images/logoIcon.png';

// Component scoped imports.

export const ImageSection = styled.section`
    position: relative;
    order: 1;
    width: 100%;
    height: 100%;

    ${respondTo.lg`
        order: 0;
        width: 48%;
    `};
`;

export const PersonImage = styled.img.attrs(props => ({
    src: props.Img || Image,
    alt: 'Women',
}))`
    height: max-content;
    width: 100%;
    object-fit: cover;
`;

export const Logo = styled.img.attrs(props => ({
    src: props.Img || LogoIcon,
    alt: 'Women',
}))`
    position: absolute;
    z-index: 1;
    top: 20px;
    left: 30px;

    height: 15vh;

    ${respondTo.lg`
        height: 80px;
    `};
`;
