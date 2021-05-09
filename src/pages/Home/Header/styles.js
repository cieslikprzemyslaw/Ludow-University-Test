// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { respondTo } from '../../../assets/GlobalStyles/respondTo';
import { LinkTextSmall } from '../../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const HeaderSection = styled.header`
    display:flex;
    flex-wrap: wrap;
    margin: 0 5vw;

    ${respondTo.lg`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 80px;
    `};
`;

export const PageInformation = styled.p`
    ${LinkTextSmall}
    margin: 24px 0 80px 5vw;
    width: 100%;
    order: 0;

    ${respondTo.lg`
        order: 0;
        margin: 24px 0 80px 0;
    `};
`;
