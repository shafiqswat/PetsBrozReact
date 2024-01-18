/** @format */

import React from "react";
import styled from "styled-components";

function Heading2Component({ heading2Text, heading2Span, width, fontSize }) {
  const heading2Style = {
    width: width,
    fontSize: fontSize,
  };
  return (
    <Heading2 style={heading2Style}>
      {heading2Text}
      <span>{heading2Span}</span>
    </Heading2>
  );
}

export default Heading2Component;
const Heading2 = styled("h2")`
  font-weight: 400;
  color: #32b44a;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid #32b44a;
  span {
    display: block;
  }
`;
