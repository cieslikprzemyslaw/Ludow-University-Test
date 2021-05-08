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

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const NavList = () => {
  const listOfItems = [
    {
      id: 1,
      name: "Study",
      link: "/#",
    },
    {
      id: 2,
      name: "Resarch",
      link: "/#",
    },
    {
      id: 3,
      name: "About Us",
      link: "/#",
    },
  ];

  return (
    <Menu>
      <Wrapper>
        <MenuList>
          {listOfItems.map((item) => {
            const { id, name, link } = item;
            return (
              <ListItem key={id}>
                <LinkItem to={link}>
                  <Name>{name}</Name>
                </LinkItem>
              </ListItem>
            );
          })}
        </MenuList>
        <Search />
      </Wrapper>
    </Menu>
  );
};

export default NavList;
