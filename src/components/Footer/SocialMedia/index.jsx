// Deps scoped imports.
import React from 'react';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import { TiSocialLinkedin, TiSocialFacebook } from 'react-icons/ti';

// Project scoped imports.

// Component scoped imports.
import { IconsWrapper, Link } from './styles';

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const ICONS = Object.freeze([
  {
    id: 1,
    href: "/#",
    icon: AiOutlineTwitter,
  },
  {
    id: 2,
    href: "/#",
    icon: TiSocialLinkedin,
  },
  {
    id: 3,
    href: "/#",
    icon: AiOutlineGoogle,
  },
  {
    id: 4,
    href: "/#",
    icon: TiSocialFacebook,
  },
]);

const SocialMedia = () => {
  return (
    <IconsWrapper>
      {ICONS.map(({ id, href, icon: Icon }) => {
        return (
          <Link href={href} key={id}>
            <Icon />
          </Link>
        );
      })}
    </IconsWrapper>
  );
};

export default SocialMedia;
