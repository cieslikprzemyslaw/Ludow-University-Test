// Deps scoped imports.
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { DarkGrey } from '../../../assets/GlobalStyles/globalStyles';

// Project scoped imports.
// import { respondTo } from "../../common/respondTo";

// Component scoped imports.

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    list-style: none;
    text-decoration: none;
    
    li:nth-last-child(1){
        margin-right: 84px;
    }
`;

export const ListItem = styled.li`
    margin-right: 80px;
    width: max-content;
`;

export const LinkItem = styled(Link)`
    text-decoration: none;
`;

export const Name = styled.h5`
    ${DarkGrey};
`;