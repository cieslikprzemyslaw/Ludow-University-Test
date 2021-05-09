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

    margin: 0 5vw 0 5vw;
    border-top: 2px solid #F5F5F6;
    min-height: 400px;

    ${respondTo.lg`
        margin: 104px 80px 0 80px;
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
    min-width: 400px;
`;

export const Image = styled.img.attrs({
    src: Logo,
    alt: "logo",
})`
    margin: 65px 0 0 0;
    width: 158px;
    height: 46px;
`;

