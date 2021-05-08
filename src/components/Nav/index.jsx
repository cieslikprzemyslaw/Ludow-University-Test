// Deps scoped imports.
import React from "react";

// Project scoped imports.

// Component scoped imports.
import { LudowLogo, Nav, Search, Wrapper } from "./styles";
import NavList from "./NavList";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const index = () => {
  return (
    <Nav>
      <LudowLogo />
      <Wrapper>
        <NavList />
        <Search/>
      </Wrapper>
    </Nav>
  );
};

export default index;
