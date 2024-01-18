/** @format */

import React from "react";
import HeaderComponent from "../../Component/Header";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import Input from "../../Component/Input";

function Contact() {
  return (
    <div>
      <HeaderComponent />
      <div className='p-4'>
        <ContactContainer>
          <Row>
            <Col lg={5}>
              <Form>
                <Input
                  name='full Name'
                  placeholder='Full Name'
                  type='text'
                />
                <Input
                  name='email'
                  placeholder='Your Email'
                  type='email'
                />
                <Input
                  name='Subject'
                  placeholder='Subject'
                  type='text'
                />
              </Form>
            </Col>
            <Col lg={7}></Col>
          </Row>
        </ContactContainer>
      </div>
    </div>
  );
}

export default Contact;
const ContactContainer = styled(Container)`
  padding: 1.5rem;
  margin: auto;
  max-width: 66%;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, 0.9);
`;
