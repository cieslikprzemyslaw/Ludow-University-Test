// Deps scoped imports.
import React from "react";
import {
  LinkItem,
  ListItem,
  MenuList,
  Name,
  Search,
  Wrapper,
  Menu,
} from "./styles";

// Project scoped imports.

// Component scoped imports.

const NAV_MENU_ITEMS = Object.freeze([
  {
    id: 1,
    name: "Study",
    link: "/study",
  },
  {
    id: 2,
    name: "Resarch",
    link: "/research",
  },
  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
]);

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */
const NavList = () => {
  return (
    <Menu>
      <Wrapper>
        <MenuList>
          {NAV_MENU_ITEMS.map(({ id, name, link }) => (
            <ListItem key={id}>
              <LinkItem to={link}>
                <Name>{name}</Name>
              </LinkItem>
            </ListItem>
          ))}
        </MenuList>
        <Search />
      </Wrapper>
    </Menu>
  );
};

export default NavList;
