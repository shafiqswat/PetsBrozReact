/** @format */

import React from "react";
import styled from "styled-components";

function HeroImagesComponent() {
  return (
    <HeroImagesContainer className=''>
      <img
        src='/img/orange-paws.png'
        alt='Paws image'
        className='pawImage img-fluid'
      />
      <img
        src='/img/cat.png'
        alt='cat image'
        className='catImage img-fluid'
      />
      <div className='parrotBg'>
        <div className='d-flex'>
          <img
            src='/img/parrot.png'
            alt='Parrot Picture'
            className='img-fluid parrotImage'
          />
          <img
            src='/img/smallbirds.png'
            id='smallBird'
            className='img-fluid'
          />
          <img
            src='/img/pigin.png'
            id='pgBird'
            className='img-fluid'
          />
        </div>
        <img
          src='/img/paws.png'
          className='paw'
        />
        <img
          src='/img/Dog.png'
          className='dog'
        />
      </div>
      <img
        src='/img/fish.png'
        alt='Fish-picture'
        className='fishImage'
      />
    </HeroImagesContainer>
  );
}

export default HeroImagesComponent;
const HeroImagesContainer = styled.div`
  position: relative;
  .pawImage {
    position: absolute;
    left: -16%;
    top: -5%;
  }
  .catImage {
    position: absolute;
    top: 1%;
    left: -127px;
    width: 15%;
  }
  .parrotBg {
    background-image: url(/img/parrot-bg.250c146f.png);
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    height: 477px;
    width: 95%;
    top: 49px;
  }
  .parrotImage {
    position: relative;
    left: 50%;
    transform: translate(-51%, -11%);
    border-bottom-right-radius: 49%;
  }
  #smallBird {
    position: relative;
    max-height: 94px;
    left: -24%;
    transform: translate(-51%, -4%);
  }
  #pgBird {
    position: relative;
    max-height: 153px;
    left: -17%;
    transform: translate(-51%, -5%);
  }
  .paw {
    position: absolute;
    bottom: 41px;
    right: -20px;
  }
  .dog {
    position: absolute;
    right: 0;
    bottom: -73px;
  }
  .fishImage {
    position: relative;
    left: -24%;
    transform: translate(-69%, -40%);
  }
  @media (min-width: 1200px) {
    .parrotImage {
      left: 50%;
      transform: translate(-51%, -8%);
    }
    #smallBird {
      max-height: 120px;
      left: -23%;
      transform: translate(-16%, 2%);
    }
  }
  @media (min-width: 1400px) {
    .parrotImage {
      left: 43%;
      transform: translate(-53%, -7%);
    }
  }
  @media (max-width: 768px) {
    #pgBird {
      left: -23%;
      max-height: 100px;
      transform: translate(-51%, -21%);
    }
    #smallBird {
      max-height: 59px;
    }
  }
`;
