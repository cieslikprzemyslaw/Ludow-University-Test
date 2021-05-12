// Deps scoped imports.
import React from "react";

// Project scoped imports.

// Component scoped imports.
import { SingleButton, ButtonText } from "./styles";

/**
 * Example component.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Przemyslaw Cieslik <cprzemek91@hotmail.com>
 */

const Button = ({ text, onClick, width, color }) => {
  return (
    <SingleButton onClick={onClick} style={{ style: `${width}px` }}>
      <ButtonText style={{color: `${color}`}}>{text}</ButtonText>
    </SingleButton>
  );
};

export default Button;
