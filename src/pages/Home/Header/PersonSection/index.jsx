// Deps scoped imports.
import React from "react";
import { useHistory } from "react-router";

// Project scoped imports.

// Component scoped imports.
import {
  Name,
  StudentQuote,
  Hero,
  Title,
  StudentTitle,
  Button,
  ButtonText,
  TextWrapper,
} from "./styles";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const PersonSection = () => {
  const history = useHistory();

  const pushToStories = () => history.push("/stories");

  return (
    <Hero>
      <TextWrapper>
        <Title>student life</Title>
        <StudentQuote>
          There is so much going on at Ludlow University, both on and off
          campus.
        </StudentQuote>
        <Name>Lisa Smith</Name>
        <StudentTitle>Student, BSc (Hons) Computer Games Design </StudentTitle>
        <Button onClick={pushToStories}>
          <ButtonText>View student stories</ButtonText>
        </Button>
      </TextWrapper>
    </Hero>
  );
};

export default PersonSection;