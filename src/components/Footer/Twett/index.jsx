// Deps scoped imports.
import React from 'react';

// Project scoped imports.

// Component scoped imports.
import {
  TwettSection,
  Header,
  TwettAuthor,
  SmallLogo,
  Title,
  Subtitle,
  TwettLogo,
  Post,
  Time,
  Author,
} from './styles';


/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Twett = () => {
    return (
      <TwettSection>
        <Header>
          <TwettAuthor>
            <SmallLogo />
            <Author>
              <Title>Ludlow University</Title>
              <Subtitle>@ludlowuni</Subtitle>
            </Author>
          </TwettAuthor>
          <TwettLogo />
        </Header>
        <Post>
          Ludlow university students enjoying a selfie after the 2019
          #campuspaintrun. A total of £4913.14 was raised for multiple
          charities. #runformoney.
        </Post>
        <Time>11:44 AM · Jul 10, 2019</Time>
      </TwettSection>
    );
};

export default Twett;