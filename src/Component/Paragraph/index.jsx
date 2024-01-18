/** @format */

import React from "react";
import styled from "styled-components";

function Paragraph({ paraText, spanParaText }) {
  return (
    <Para>
      {paraText}
      <span>{spanParaText}</span>
    </Para>
  );
}

export default Paragraph;
const Para = styled("p")`
  font-size: 20px;
  color: rgb(141, 141, 141) !important;
  span {
    display: block;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 515px) {
    font-size: 13px;
  }
`;
