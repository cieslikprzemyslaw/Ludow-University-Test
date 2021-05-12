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
  TextWrapper,
} from "./styles";
import Button from '../../../../components/Button';

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
        <Button
          text={"View student stories"}
          onClick={pushToStories}
          width={294}
        />
      </TextWrapper>
    </Hero>
  );
};

export default PersonSection;
