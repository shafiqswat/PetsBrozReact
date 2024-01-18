/** @format */

import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import RatingComponent from "../Rating";
import styled from "styled-components";
function CustomerCard({
  path,
  cardBackgroundColor,
  bodyBackgroundColor,
  titleText,
  cardPara,
}) {
  const cardStyle = {
    backgroundColor: cardBackgroundColor,
  };
  const cardBody = {
    backgroundColor: bodyBackgroundColor,
  };
  return (
    <Col
      lg={3}
      md={6}>
      <CustomCard style={cardStyle}>
        <Card.Img
          className='img-fluid'
          variant='top'
          src={path}
        />
        <Card.Body style={cardBody}>
          <CardTitle>{titleText}</CardTitle>
          <CardText>{cardPara}</CardText>
          <div className='rateContainer'>
            <RatingComponent />
            <span className='spanPara'>5.5/6</span>
          </div>
        </Card.Body>
      </CustomCard>
    </Col>
  );
}

export default CustomerCard;
const CustomCard = styled(Card)`
  color: white;
  margin-top: 2rem;
  text-align: center;
  border: none;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  .rateContainer {
    display: flex;
    justify-content: space-around;
  }
  img {
    margin-top: -1rem;
    width: 250px !important;
    height: 309px !important;
  }
  .spanPara {
    font-size: 10px;
    margin-left: -1rem;
  }
`;
const CardTitle = styled("h2")``;
const CardText = styled("p")`
  font-size: 9px;
`;
