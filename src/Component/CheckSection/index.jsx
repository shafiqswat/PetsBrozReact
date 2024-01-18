/** @format */

import React from "react";
import BrowseImage from "../BrowseImage";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import HeadingComponent from "../Heading";
import Paragraph from "../Paragraph";
import LineComponent from "../Line";

function CheckComponent() {
  return (
    <Check>
      <Container>
        <Row>
          <BrowseImage path='/img/catadvertisement.png' />
          <Col
            md={6}
            className='mt-5'>
            <HeadingComponent
              Heading1Text='Check out the'
              spanText='pet’s profiles'
            />
            <Paragraph paraText='“There’s a saying. If you want someone to love you forever, buy a dog, feed it and keep it around.”' />
            <h4>
              <strong className='dick'>Dick Dale, American Musician</strong>
            </h4>
          </Col>
        </Row>
        <div className='LineContainer'>
          <LineComponent
            position='absolute'
            width='845px'
            right='0'
          />
        </div>
      </Container>
    </Check>
  );
}

export default CheckComponent;
const Check = styled.div`
  .dick {
    color: #8d8d8d;
    font-weight: 500;
  }
  .LineContainer {
    position: relative;
  }
`;
