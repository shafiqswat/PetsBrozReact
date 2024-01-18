/** @format */

import React from "react";
import styled from "styled-components";
import HeadingComponent from "../Heading";
import { Col, Container, Row } from "react-bootstrap";
import Paragraph from "../Paragraph";
// import NavbarButton from "../NavbarButton";
import ButtonComponent from "../Button";
import HeroImagesComponent from "../HeroImages";

function HeroSectionComponent() {
  return (
    <div>
      <Container className='mt-2'>
        <HeroSection>
          <Row>
            <Col xs={6}>
              <HeadingComponent
                Heading1Text='Taking care'
                spanText='for your Smart Pets!'
              />
              <Paragraph
                paraText='Human-canine bonding is the relationship'
                spanParaText='between pets and humans.'
              />
              <BtnContainer className='btnContainer'>
                <ButtonComponent
                  btnText='EXPLORE MORE'
                  icon='fa-solid fa-chevron-right text-white ms-2'
                  backgroundColor='#32b44a'
                  border='none;'
                />
                <div className='grass'>
                  <img
                    src='/img/grass.png'
                    alt='grass-image'
                  />
                </div>
              </BtnContainer>
            </Col>
            <Col xs={6}>
              <HeroImagesComponent />
            </Col>
          </Row>
        </HeroSection>
      </Container>
    </div>
  );
}

export default HeroSectionComponent;
export const HeroSection = styled.div`
  background-image: url(/img/hero-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
  padding-top: 70px;
  padding-left: 100px;

  @media (max-width: 768px) {
    background-position: inherit;
    background-size: inherit;
    padding-bottom: 0;
    padding-top: 10px;
    padding-left: 30px;
  }
`;
const BtnContainer = styled.div`
  margin-top: 5rem;
  position: relative;
  .grass {
    position: absolute;
    bottom: -40px;
    left: 180px;
  }
`;
