/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import Heading2Component from "../Heading2";
import CustomerCard from "../CustomerCard";

function CustomerCardSection() {
  return (
    <div className='mb-5'>
      <Container className='mt-5'>
        <Heading2Component
          heading2Text='Happy'
          heading2Span='Customers!'
          width='250px'
        />
        <Row>
          <CustomerCard
            path='/img/customerOne.png'
            cardBackgroundColor='#def4e5'
            titleText='Sindy & Kitch'
            cardPara='Kitch love to play alot'
            bodyBackgroundColor='#32b44a'
          />
          <CustomerCard
            path='/img/customerTwo.png'
            cardBackgroundColor='#fff1a6'
            titleText='Anna & Tobby'
            cardPara='Love the overall in Tobby'
            bodyBackgroundColor='#e1c52e'
          />
          <CustomerCard
            path='/img/customerThree.png'
            cardBackgroundColor='#eba8bf'
            titleText='Alex & Hena'
            cardPara='I love to eat egg’s of Hena'
            bodyBackgroundColor='#ef568a'
          />
          <CustomerCard
            path='/img/customerFour.png'
            cardBackgroundColor='#ddc7ed'
            titleText='Linda & Tom'
            cardPara='Tom is our home member'
            bodyBackgroundColor='#b86eee'
          />
        </Row>
      </Container>
    </div>
  );
}

export default CustomerCardSection;
