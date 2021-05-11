// Deps scoped imports.
import styled from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

// Project scoped imports.
import { respondTo } from '../../../assets/GlobalStyles/respondTo';
import LogoIcon from '../../../assets/images/logoColoured.png';

// Component scoped imports.

export const TweetSection = styled.section`
    width: 400px;
    margin: 88px 5vw;

    ${respondTo.lg`
        margin: 88px 80px 0 0;
    `}
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-self: center;
`;

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

export const Title = styled.p`
    font-family: Helvetica;
    font-size: 16px;
    line-height: 150%;
`;

export const Subtitle = styled.p`
    font-family: Helvetica;
    font-size: 14px;
    color: #8595A5;
    line-height: 114%;
`;

export const TwettLogo = styled(AiOutlineTwitter)`
    align-self: center;

    font-size: 24px;
    color: #31B5DF;
`;

export const Post = styled.p`
    margin: 16px 0 32px 0;

    font-family: Helvetica;
    font-size: 16px;
    line-height: 150%;
`;

export const Time = styled.p`
    font-family: Helvetica;
    font-size: 14px;
    color: #8595A5;
    line-height: 16px;
`;

export const Author = styled.section``;
