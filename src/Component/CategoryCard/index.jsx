/** @format */

import React from "react";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";
function CategoryCard({ cardText, imagePath, backgroundColor, border }) {
  const cardStyle = {
    backgroundColor: backgroundColor,
    border: border,
  };
  return (
    <Col
      lg={2}
      md={4}
      sm={6}>
      <CardContainer style={cardStyle}>
        <Card.Body>
          <img
            src={imagePath}
            class='card-img img-fluid'
          />
          <Card.Text className='mt-2'>{cardText}</Card.Text>
        </Card.Body>
      </CardContainer>
    </Col>
  );
}

export default CategoryCard;
const CardContainer = styled(Card)`
  margin-bottom: 3rem;
  margin-top: 1rem;
  img {
    width: 120px;
    height: 100px;
  }
`;
