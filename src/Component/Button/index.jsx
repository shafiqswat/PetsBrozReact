/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

function ButtonComponent({
  btnText,
  icon,
  backgroundColor,
  border,
  padding,
  fontWeight,
  borderRadius,
}) {
  const exploreBtn = {
    backgroundColor: backgroundColor,
    border: border,
    padding: padding,
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    fontWeight: fontWeight,
  };
  return (
    <ButtonContainer style={exploreBtn}>
      {btnText}
      <i className={icon}></i>
    </ButtonContainer>
  );
}

export default ButtonComponent;
const ButtonContainer = styled(Button)`
  position: relative;
  // background-color: #32b44a;
  border: none;
  padding: 16px 48px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;

  &:hover {
  }
`;
