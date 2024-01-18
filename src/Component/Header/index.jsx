/** @format */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import NavbarButton from "../NavbarButton";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <NavbarContainer>
      <Navbar expand='lg'>
        <Container>
          <Link
            to='/'
            className='navbarBrand'>
            <img
              src='/img/offerpet-logo.png'
              alt='Logo of PETSBROZ'
            />
            <span className='logoText d-none d-lg-block'>PETSBROZ</span>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' text-center ms-auto '>
              <NavbarButton
                navBtnText='BUY/SELL'
                color='#32b44a'
                borderRadius='10px'
                border='1px solid #32b44a'
                fontWeight='bold'
                to='/buysell'
              />
              <NavbarButton
                navBtnText='ABOUT US'
                color='black'
                to='/about'
              />
              <NavbarButton
                navBtnText='CONTACT'
                color='black'
                to='/contact'
              />
              <NavbarButton
                navBtnText='REGISTER'
                color=' #32b44a'
                backgroundColor='#bcffc8'
                borderRadius='10px'
                order='order-lg-2'
              />
              <NavbarButton
                navBtnText='Sign In'
                color='white'
                backgroundColor='#32b44a'
                borderRadius='10px'
                border='1px solid #32b44a'
                order='order-lg-1'
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
}

export default HeaderComponent;
export const NavbarContainer = styled.div`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  .navbarBrand {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    .logoText {
      font-size: 34px;
      font-weight: 900;
      color: #32b44a;
      margin-left: 0.5em;
    }
  }
`;
