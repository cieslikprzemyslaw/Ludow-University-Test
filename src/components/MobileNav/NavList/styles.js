// Deps scoped imports.
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

// Project scoped imports.
// import { respondTo } from "../../common/respondTo";
import { Pink, DarkGrey, White } from '../../../assets/GlobalStyles/globalStyles';

// Component scoped imports.


export const Menu = styled.aside`
    position: fixed;
    top:0;
    left:0;
    z-index: 5;

    display: flex;
    align-items: center;

    width: 100%;
    height: 100vh;
    ${White}
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 50%;
`;

export const MenuList = styled.ul`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;

    list-style: none;
    text-decoration: none;
    text-align: center;
`;

export const ListItem = styled.li`
    margin-bottom: 40px;
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
`;

export const Name = styled.h5`
    font-size: 30px;
    ${DarkGrey};
`;

export const Search = styled(BiSearch)`
    font-size: 30px;
    ${Pink};
`;

export const CloseMenu = styled(GrFormClose)`
    position: absolute;
    top: 31px;
    right:5vw;
    z-index: 7;
    cursor: pointer;
    
    font-size: 25px;
`;