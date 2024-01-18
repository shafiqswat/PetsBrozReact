/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeroSection } from "../HeroSection";
import styled from "styled-components";
import HeadingComponent from "../Heading";
import AboutHeroImage from "../AboutHeroImage";

function AboutHero() {
  return (
    <div>
      <Container className='mt-2'>
        <HeroSection>
          <AboutContainer>
            <Row>
              <Col lg={6}>
                <img
                  src='/img/orange-paws.png'
                  className='img-fluid d-none d-lg-inline-block'
                />
                <HeadingComponent
                  Heading1Text='About Us'
                  textAlign='center'
                  margin='54px 0 0 0'
                />
                <img
                  src='/img/paws.png'
                  className='orangePa float-end img-fluid'
                />
                <div className='d-none d-lg-block'>
                  <img
                    src='/img/woods.png'
                    className='wood img-fluid float-end mt-5'
                  />
                  <img
                    src='/img/grass.png'
                    className='mt-5 img-fluid'
                    id='grass'
                  />
                </div>
              </Col>
              <AboutHeroImage />
            </Row>
          </AboutContainer>
        </HeroSection>
      </Container>
    </div>
  );
}

export default AboutHero;
const AboutContainer = styled.div`
  padding: 0;
  margin: 0;
  .animalImage {
    display: flex;
    justify-content: flex-end;
  }
  .orangePa {
    position: relative;
    bottom: 23%;
    left: 8%;
  }
  .wood {
    position: relative;
    top: 30px;
    left: -63px;
  }
  #grass {
    position: relative;
    left: -13%;
    transform: translate(1%, 114%);
  }
  @media (max-width: 992px) {
    .animalImage img {
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    .orangePa {
      display: none;
    }
  }
`;
