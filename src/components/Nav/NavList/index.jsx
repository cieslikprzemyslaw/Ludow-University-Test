// Deps scoped imports.
import React from "react";
import { LinkItem, ListItem, MenuList, Name } from "./styles";

// Project scoped imports.

// Component scoped imports.

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const index = () => {
  const listOfItems = [
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
  ];

  return (
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
  );
};

export default index;
