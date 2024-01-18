/** @format */

import React from "react";
import { Col } from "react-bootstrap";

function BrowseImage({ path }) {
  return (
    <Col
      md={6}
      className='mt-4'>
      <div>
        <a
          href='/mammals.html'
          target='_blank'>
          <img
            src={path}
            id='animal'
            class='img-fluid'
          />
        </a>
      </div>
    </Col>
  );
}

export default BrowseImage;
