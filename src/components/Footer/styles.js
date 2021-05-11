// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { respondTo } from '../../assets/GlobalStyles/respondTo';
import Logo from '../../assets/images/logo.png';
import BackgroundLogo from '../../assets/images/backgroundLogo.png';


// Component scoped imports.

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    min-height: 400px;
    border-top: 2px solid #F5F5F6;

    ${respondTo.lg`
        justify-content: space-between;
    `}
`;

export const SocialSection = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: url(${BackgroundLogo});
    background-repeat: no-repeat;
    background-position: center;

    margin: 0 auto;
    min-height: 250px;
    min-width: 400px;

    ${respondTo.lg`
        margin: 0 0 0 80px;
    `}
`;

export const Image = styled.img.attrs({
    src: Logo,
    alt: "logo",
})`

    width: 158px;
    height: 46px;

    margin: 64px auto;

    ${respondTo.lg`
        margin: 64px 0 0 0;
    `}
`;

