// Deps scoped imports.
import React, { useState } from "react";

// Project scoped imports.

// Component scoped imports.
import { CloseMenu, LudowLogo, MobileNavigation, OpenMenu } from "./styles";
import NavList from "./NavList";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <MobileNavigation>
      <LudowLogo />
      {isVisible ? (
        <CloseMenu onClick={handleClick} />
      ) : (
        <OpenMenu onClick={handleClick} />
      )}
      {isVisible && <NavList />}
    </MobileNavigation>
  );
};

export default MobileNav;
