// Deps scoped imports.
import React from "react";
import { useHistory } from "react-router-dom";
// Project scoped imports.

// Component scoped imports.
import { LudowLogo, NavComponent, Search, Wrapper } from "./styles";
import NavList from "./NavList";

/**
 * Example component.
 * @description This component is displayed on desktop devices. Sits at top of the layout, above the hero section.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Nav = () => {
  const history = useHistory();

  const pushHomePage = () => {
    history.push("/");
  };
  return (
    <NavComponent>
      <LudowLogo onClick={pushHomePage} />
      <Wrapper>
        <NavList />
        <Search />
      </Wrapper>
    </NavComponent>
  );
};

export default Nav;
