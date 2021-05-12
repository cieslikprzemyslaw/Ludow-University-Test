// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { respondTo } from '../../../assets/GlobalStyles/respondTo';

// Component scoped imports.

export const Events = styled.section`
    margin: 104px 5vw 120px 5vw;
    max-width: 1600px;

    ${respondTo.lg`
        104px 80px 120px 80px;
    `}

    ${respondTo.xxxl`
        margin: 80px auto;
    `};
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${respondTo.sm`
        justify-content: space-between;
    `}
`;

export const Title = styled.h3`
    margin: 20px auto;

    ${respondTo.sm`
        margin: 0;
    `}
`;

export const EventsSection = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    ${respondTo.xxl`
        justify-content: space-between;
    `}
`;
