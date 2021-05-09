// Deps scoped imports.
import styled from 'styled-components';
import { GrMenu, GrFormClose } from 'react-icons/gr';

// Project scoped imports.
import { respondTo } from '../../assets/GlobalStyles/respondTo';
import logoSrc from '../../assets/images/logo.png';
import { White } from '../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const MobileNavigation = styled.nav`
    position: fixed;
    top:0;
    left:0;
    z-index: 4;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    height: 88px;
    ${White};

    ${respondTo.lg`
        display: none;
    `};
`;

export const LudowLogo = styled.img.attrs(props => ({
    src: props.Img || logoSrc,
    alt: 'Ludow University Logo',
}))`
    margin: 20px 5vw;
    width: min-content;

    cursor: pointer;
`;

export const OpenMenu = styled(GrMenu)`
    position: absolute;
    top: 31px;
    right: 5vw;
    z-index: 6;

    font-size: 25px;

    cursor: pointer;
`;

export const CloseMenu = styled(GrFormClose)`
    position: absolute;
    top: 31px;
    right:5vw;
    z-index: 7;
    cursor: pointer;
    
    font-size: 25px;
`;
