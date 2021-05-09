// Deps scoped imports.
import styled from 'styled-components';
import { BiRightArrowAlt } from 'react-icons/bi';

// Project scoped imports.
import { respondTo } from '../../../../assets/GlobalStyles/respondTo';
import { Pink } from '../../../../assets/GlobalStyles/globalStyles';

// Component scoped imports.

export const CardSection = styled.section`
    margin-top: 120px;
`;

export const ImagesWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    ${respondTo.xxl`
        justify-content: space-between;
    `}
`;

export const ImageWrapper = styled.figure``;

export const Image = styled.img``;

export const TextWrapper = styled.figcaption`
    max-width: 400px;
`;

export const Title = styled.h5`
    margin: 32px 0 24px 24px;
    align-self: center;
`;

export const Text = styled.p`
    margin: 0 24px 16px 24px;
`;

export const Arrow = styled(BiRightArrowAlt)`
    margin: 0 16px;
    ${Pink}
`;