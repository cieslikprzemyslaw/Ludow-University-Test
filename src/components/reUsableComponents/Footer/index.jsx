// Deps scoped imports.
import React from "react";

// Project scoped imports.

// Component scoped imports.
import {
  Footer,
  SocialSection,
  Image,
  TweetSection,
  Header,
  TweetAuthor,
  SmallLogo,
  Title,
  Subtitle,
  Tweet,
  Post,
  Time,
} from "./styles";
import SocialMedia from "./SocialMedia";

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
      <TweetSection>
        <Header>
          <TweetAuthor>
            <SmallLogo />
            <div>
              <Title>Ludlow University</Title>
              <Subtitle>@ludlowuni</Subtitle>
            </div>
          </TweetAuthor>
          <Tweet />
        </Header>
        <Post></Post>
        <Time></Time>
      </TweetSection>
    </Footer>
  );
};

export default index;
