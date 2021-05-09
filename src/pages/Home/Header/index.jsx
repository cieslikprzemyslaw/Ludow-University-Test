// Deps scoped imports.
import React from 'react';
import { HeaderSection, PageInformation } from './styles';

// Project scoped imports.

// Component scoped imports.
import PersonSection from './PersonSection';
import Image from './Image';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Header = () => {
  return (
    <HeaderSection>
      <PageInformation>Home</PageInformation>
      <PersonSection />
      <Image />
    </HeaderSection>
  );
};

export default Header;
