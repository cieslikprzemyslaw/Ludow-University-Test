// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import {
  CardSection,
  CardsWrapper,
  FirstImage,
  SecondImage,
  TextWrapper,
  Title,
  Text,
  Arrow,
} from './styles';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const IrregularCards = () => {
  return (
    <CardsWrapper>
      <CardSection>
        <FirstImage />
        <TextWrapper>
          <Title>
            Activities and clubs <Arrow />
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </TextWrapper>
      </CardSection>
      <CardSection>
        <SecondImage />
        <TextWrapper>
          <Title>
            Accommodation <Arrow />
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Text>
        </TextWrapper>
      </CardSection>
    </CardsWrapper>
  );
};

export default IrregularCards;
