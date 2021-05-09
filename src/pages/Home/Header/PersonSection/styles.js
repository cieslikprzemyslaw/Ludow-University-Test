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

export const Button = styled.button`
    width: 290px;
    height: 64px;
    background-color: rgb(255 255 255);
    border-image-source: linear-gradient(98.01deg, #00C2FF 14.16%, #FF27C3 79.91%);
    border-width: 1px;
    border-image-slice: 1;

    cursor: pointer;
`;

export const ButtonText = styled.h5``;
