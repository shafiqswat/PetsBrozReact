/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import BrowseImage from "../BrowseImage";
import HeadingComponent from "../Heading";
import Heading2Component from "../Heading2";
import Paragraph from "../Paragraph";
import LineComponent from "../Line";

function BrowseSection() {
  return (
    <Browse>
      <Container>
        <Row>
          <BrowseImage path='/img/animals.png' />
          <Col className='mt-4'>
            <HeadingComponent
              Heading1Text='Browse deals on tons of'
              spanText='great pets nearby'
            />
            <Paragraph paraText='like dogs, cats, and birds — and buy from your neighbors.' />
            <a>
              <Heading2Component
                heading2Text='Browse'
                width='65px'
                fontSize='20px'
              />
            </a>
          </Col>
        </Row>
        <div className='lineContainer'>
          <LineComponent
            width='100%'
            position='relative'
          />
        </div>
      </Container>
    </Browse>
  );
}

export default BrowseSection;
const Browse = styled("section")`
  margin-top: 2rem 0;
  a {
    text-decoration: none;
  }
  .lineContainer {
    margin-top: 1.5rem;
  }
`;
