// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import { ImageSection, PersonImage, Logo } from './styles';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Image = () => {
  return (
    <ImageSection>
      <PersonImage loading="lazy"/>
      <Logo />
    </ImageSection>
  );
};

export default Image;
