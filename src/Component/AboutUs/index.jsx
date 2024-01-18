/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import HeadingComponent from "../Heading";

function AboutUs({
  aboutUsPara,
  aboutUsPath,
  Heading1Text,
  heading4Text,
  items,
}) {
  return (
    <CustomContainer>
      <div className='mb-5 text-center'>
        <HeadingComponent Heading1Text={Heading1Text} />
        <img
          src='/img/greenPaw.png'
          class='img-fluid'
        />
      </div>
      <Row>
        <Col lg={6}>
          <p className='basedPara'>{aboutUsPara}</p>
          <h4 className='heading4'>{heading4Text}</h4>
          <ol>
            {items &&
              items.map((item) => <li key={item.id}>{item.paragraph}</li>)}
          </ol>
        </Col>
        <Col lg={6}>
          <img
            src={aboutUsPath}
            class='img-fluid py-5'
          />
        </Col>
      </Row>
    </CustomContainer>
  );
}

export default AboutUs;
const CustomContainer = styled(Container)`
  .basedPara,
  ol {
    font-family: "Poppins", sans-serif;
    line-height: 40px;
    font-size: 20px;
    color: #8d8d8d;
    text-align: justify;
  }
  .heading4 {
    color: rgb(141, 141, 141);
  }
  ol {
    padding: 0;
    list-style: none;
  }
`;
