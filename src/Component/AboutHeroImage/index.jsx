/** @format */

import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

function AboutHeroImage() {
  return (
    <Col lg={6}>
      <Animal>
        <img src='/img/aboutUs.png' />
      </Animal>
    </Col>
  );
}

export default AboutHeroImage;
const Animal = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 992px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
