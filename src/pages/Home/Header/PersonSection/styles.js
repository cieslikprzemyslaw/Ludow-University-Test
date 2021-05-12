// Deps scoped imports.
import styled from 'styled-components';

// Project scoped imports.
import { respondTo } from '../../../../assets/GlobalStyles/respondTo';
import { SupportingCopy } from '../../../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const Hero = styled.section`
    margin: 80px 0;
    order: 2;

    ${respondTo.lg`
        margin: 0;
        order: 0;
        width: 48%;
        text-align: left;
    `};
`;

export const TextWrapper = styled.section`
    text-align: center;

    ${respondTo.lg`
        max-width: 500px;
        text-align: left;
    `};
`;

export const Title = styled.h1`
    margin-bottom: 40px;
`;

export const StudentQuote = styled.h3`
    margin-bottom: 48px;
`;

export const Name = styled.h4`
    margin-bottom: 16px;
`;

export const StudentTitle = styled.p`
    ${SupportingCopy}
    margin-bottom: 64px;
`;

export const ButtonText = styled.h5``;
