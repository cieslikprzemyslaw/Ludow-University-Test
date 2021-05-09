// Deps scoped imports.
import styled from "styled-components";

// Project scoped imports.
import { respondTo } from '../../../assets/GlobalStyles/respondTo';
import LogoIcon from '../../../assets/images/logoColoured.png';
import Logo from '../../../assets/images/logo.png';
import BackgroundLogo from '../../../assets/images/backgroundLogo.png';

// Component scoped imports.

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;

    margin: 0 5vw 0 5vw;
    border-top: 2px solid #F5F5F6;
    min-height: 400px;

    ${respondTo.lg`
        104px 80px 120px 80px;
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

export const TweetSection = styled.section`
    width: 400px;
    margin: 88px 80px 0 0;
`;

export const Header = styled.header``;

export const TweetAuthor = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 40%;
`;

export const SmallLogo = styled.img.attrs({
    src: LogoIcon,
    alt: "University logo"
})`

`;

export const Title = styled.p``;

export const Subtitle = styled.p``;

export const Tweet = styled.img``;

export const Post = styled.p``;

export const Time = styled.p``;
