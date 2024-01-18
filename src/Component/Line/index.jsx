/** @format */

import React from "react";
import styled from "styled-components";

function LineComponent({ width, position, right }) {
  const LineStyle = {
    width: width,
    position: position,
    right: right,
  };
  return <LineContainer style={LineStyle}></LineContainer>;
}

export default LineComponent;
const LineContainer = styled.div`
  position: absolute;
  right: 0;
  width: 840px;
  height: 1px;
  background-color: #c7c7c7;
`;
