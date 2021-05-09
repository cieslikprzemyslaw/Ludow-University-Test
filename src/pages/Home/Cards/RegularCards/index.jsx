// Deps scoped imports.
import React from 'react';

// Project scoped imports.
import Girl from '../../../../assets/images/cards/girl.png';
import Support from '../../../../assets/images/cards/support.png';
import Bike from '../../../../assets/images/cards/bike.png';

// Component scoped imports.
import {
  ImagesWrapper,
  Image,
  TextWrapper,
  Title,
  Arrow,
  Text,
  CardSection,
} from './styles';

/**
 * Example component.
 * @description Component to render regular Cards.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const CARDS = Object.freeze([
  {
    id: 1,
    imageSrc: `${Girl}`,
    alt: "Girl",
    title: "Chat to a student",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 2,
    imageSrc: `${Support}`,
    alt: "Laptop",
    title: "Support",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    id: 3,
    imageSrc: `${Bike}`,
    alt: "Bike in forest",
    title: "Life in Ludlow",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
]);

const index = () => {
  return (
    <ImagesWrapper>
      {CARDS.map(({ id, imageSrc, alt, title, text }) => {
        return (
          <CardSection key={id}>
            <Image src={imageSrc} alt={alt} loading="lazy" />
            <TextWrapper>
              <Title>
                {title}
                <Arrow />
              </Title>
              <Text>{text}</Text>
            </TextWrapper>
          </CardSection>
        );
      })}
    </ImagesWrapper>
  );
};

export default index;
