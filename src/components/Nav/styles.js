// Deps scoped imports.
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";

// Project scoped imports.
import { respondTo } from '../../assets/GlobalStyles/respondTo';
import logoSrc from '../../assets/images/logo.png';
import { Pink } from '../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const Nav = styled.nav`
    display: none;
    
    width: 100%;
    height: 88px;

    ${respondTo.lg`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `};
`;

export const LudowLogo = styled.img.attrs(props => ({
    src: props.Img || logoSrc,
    alt: 'Ludow University Logo',
}))`
    margin: 20px 80px;
    width: min-content;
`;

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 80px;
    width: min-content;
`;

export const Search = styled(BiSearch)`
    font-size: 23px;
    ${Pink};
`;

