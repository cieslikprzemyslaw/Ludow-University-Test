// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import { CardSection } from './styles';
import RegularCards from './RegularCards';
import IrregularCards from './IrregularCards';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */
const Cards = () => {
  return (
    <CardSection>
      <IrregularCards />
      <RegularCards />
    </CardSection>
  );
};

export default Cards;
