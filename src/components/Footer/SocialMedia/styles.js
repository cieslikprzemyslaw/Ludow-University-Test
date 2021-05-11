// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { Pink } from '../../../assets/GlobalStyles/globalStyles'
import { respondTo } from '../../../assets/GlobalStyles/respondTo';

// Component scoped imports.

export const IconsWrapper = styled.section`
    display: flex;
    justify-content: space-between;

    margin: 64px auto;
    width: 144px;

    ${respondTo.lg`
        margin: 0 0 64px 0;
    `}
`;

export const Link = styled.a`
    font-size: 24px;
    ${Pink}
`;