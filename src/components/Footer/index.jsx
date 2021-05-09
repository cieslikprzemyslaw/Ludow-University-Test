// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import {
  Footer,
  SocialSection,
  Image,
} from './styles';
import SocialMedia from './SocialMedia';
import Twett from './Twett';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const index = () => {
  return (
    <Footer>
      <SocialSection>
        <Image />
        <SocialMedia />
      </SocialSection>
      <Twett />
    </Footer>
  );
};

export default index;
