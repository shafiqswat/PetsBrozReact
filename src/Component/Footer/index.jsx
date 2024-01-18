/** @format */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import NavbarButton from "../NavbarButton";
import LineComponent from "../Line";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col sm={6}>
            <img
              src='/img/offerpet-logo.png'
              alt='Logo of PETSBROZ'
            />
            <span className='logoText'>PETSBROZ</span>
          </Col>
          <Col sm={6}>
            <div
              class='float-end'
              id='footer-content'>
              <div className='bntContainer'>
                <NavbarButton
                  navBtnText='Contact Us'
                  fontSize='16px'
                  fontWeight='900'
                  width='170px'
                  border='1px solid #32b44a'
                  borderRadius='10px'
                  color='#32b44a'
                  padding='1.2rem 0'
                />
              </div>
              <p className='mt-1'>Email :Petsbroz0817@gmail.com</p>
              <p className='last-para'>
                <strong class='d-block'>PetsBroz</strong>
                <span className='d-block'>909 Halifax dr</span>
                <span className='d-block'>Kissimmee, FL 34758 </span>
                <span className='d-block'>United States</span>
              </p>
            </div>
          </Col>
        </Row>
        <LineComponent
          width='100%'
          position='relative'
        />
        <div
          class='d-flex justify-content-between mt-4'
          id='copyright'>
          <p className='pets'>© 2021 Petsbroz Inc.</p>
          <div>
            <a href='#'>Terms of Service /</a>
            <a href='#'>Privacy Policys</a>
          </div>
        </div>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled("footer")`
  background-color: #def4e5;
  margin-top: 3rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  .logoText {
    display-inline: block;
    font-size: 34px;
    font-weight: 900;
    color: #32b44a;
    margin-left: 0.5em;
  }
  .bntContainer {
    width: 100%;
    display: flex;
    justify-content: end;
  }
  p {
    color: #8d8d9a;
  }
  .pets {
    font-size: 20px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: #8d8d9a;
  }
`;
