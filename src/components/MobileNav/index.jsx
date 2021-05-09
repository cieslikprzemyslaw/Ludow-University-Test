// Deps scoped imports.
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Project scoped imports.

// Component scoped imports.
import { LudowLogo, MobileNavigation, OpenMenu, CloseMenu } from "./styles";
import NavList from "./NavList";

/**
 * Mobile navigation component
 * @description This component is displayed on mobile devices. Sits at top of the layout, above the hero section.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */
const MobileNav = () => {
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const pushHomePage = () => {
    history.push("/");
  };

  return (
    <>
      <MobileNavigation>
        <LudowLogo onClick={pushHomePage} />
        {isMenuOpen ? (
          <CloseMenu onClick={handleClick} />
        ) : (
          <OpenMenu onClick={handleClick} />
        )}
        {isMenuOpen && <NavList />}
      </MobileNavigation>
    </>
  );
};

export default MobileNav;
