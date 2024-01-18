/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import Heading2Component from "../Heading2";
import CategoryCard from "../CategoryCard";
import LineComponent from "../Line";
import styled from "styled-components";

function CategoriesComponent() {
  return (
    <CategoryContainer>
      <Container className='mt-5 text-center'>
        <Heading2Component
          heading2Text='Categories'
          width='153px'
        />
        <Row>
          <CategoryCard
            cardText='Birds'
            imagePath='/img/card-img-1.png'
            border='1px solid #32b44a'
          />
          <CategoryCard
            cardText='Fish'
            imagePath='/img/card-img-2.png'
            backgroundColor='#fffae5'
            border='1px solid #fff2bc'
          />
          <CategoryCard
            cardText='Mammals'
            imagePath='/img/card-img-3.png'
            border='1px solid #32b44a'
          />
          <CategoryCard
            cardText='Reptiles'
            imagePath='/img/card-img-4.png'
            backgroundColor='#fffae5'
            border='1px solid #fff2bc'
          />
          <CategoryCard
            cardText='Amphibians'
            imagePath='/img/card-img-5.png'
            border='1px solid #32b44a'
          />
          <CategoryCard
            cardText='Invertebrates'
            imagePath='/img/card-img-6.png'
            backgroundColor='#fffae5'
            border='1px solid #fff2bc'
          />
        </Row>
        <div className='lineContainer'>
          <LineComponent
            width='840px'
            position='absolute'
            right='0'
          />
        </div>
      </Container>
    </CategoryContainer>
  );
}

export default CategoriesComponent;
const CategoryContainer = styled.div`
  .lineContainer {
    position: relative;
  }
`;
