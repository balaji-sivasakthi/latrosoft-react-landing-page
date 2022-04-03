import React from "react";
import { Col, Row } from "reactstrap";

function Footer() {
  return (
    <div className="container-fluid  bg-primary w-100 r text-white pt-3 px-3">
      <Row>
        <Col sm={6}>
          <h5>PRODUCT</h5>
          <ul class="list-group">
            <li class="">Product</li>
            <li class="">Product</li>
            <li class="">Product</li>
           
          </ul>
        </Col>
        <Col sm={6}>
          <h5>PRODUCT</h5>
          <ul class="list-group">
            <li class="">Product</li>
            <li class="">Product</li>
            <li class="">Product</li>
           
          </ul>
        </Col>
      </Row>
      <Row>
        <p className="text-center mt-5">Latrosoft © Copyright 2021 | All Rights Reserved</p>
      </Row>
    </div>
  );
}

export default Footer;
