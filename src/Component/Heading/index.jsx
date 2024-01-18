/** @format */

import React from "react";
import styled from "styled-components";

function HeadingComponent({ Heading1Text, spanText, margin, textAlign }) {
  const heading1Style = {
    margin: margin,
    textAlign: textAlign,
  };
  return (
    <Heading1 style={heading1Style}>
      {Heading1Text} <span className='d-block'>{spanText}</span>
    </Heading1>
  );
}

export default HeadingComponent;
const Heading1 = styled("h1")`
  font-family: "Pompiere", cursive;
  font-size: 70px;
  color: #32b44a;
  @media (max-width: 768px) {
    font-size: 35px;
    text-align: center;
  }
  @media (max-width: 515px) {
    font-size: 24px;
    // text-align: center;
  }
  span {
    display: block;
  }
`;
