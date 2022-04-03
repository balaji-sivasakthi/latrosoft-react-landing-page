import React from "react";
import { Button, Col, Row } from "reactstrap";
import hero from "../assets/img/hero-right.png";
import client from '../assets/img/phone-lap.png'
function Home() {
  return (
    <>
      <section className="container p-3 mb-5 hero px-5">
        <Row className="d-flex justify-content-between flex-wrap-reverse">
          <Col
            className="d-flex flex-column justify-content-center hero-title "
            lg={5}
          >
            <h1>
              Turn Your Ideas into <span className="text-primary">Future.</span>
            </h1>
            <p>
              Your Future Starts Today not Tomorrow so Grow up Your Ideas.
              Quickly have a look at Latrosoft
            </p>
            <Button sm={12} color="primary" outline className="rounded-0">
              Get a Proposal
            </Button>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={5}
          >
            <img style={{ width: "100%", height: "100%" }} src={hero}></img>
          </Col>
        </Row>
        <Row>
        <h1 className="text-center">Pleasure To Work With Talented Clients</h1>
        <p className="text-center">
          You are unique with your bright ideas. You are worth to take risk and
          say what you think. Our ultimate aim is to turn up ideas into reality.
        </p>
        </Row>
        <Row>
          <img src={client}></img>
        </Row>
        <Row>
          <Col lg={6}>
          <h4 className="text-center" >
          Powering Your Digital Dreams. Taking Your Business Ahead
          </h4>
          <p  className="text-center">Your idea of yesterday! Today's innovation of Latrosoft! Tomorrow's our future implementation! There are things that money can't buy. We think it is our digital relationship of believing one another.</p>
          </Col >
          <Col lg={6}><h4  className="text-center">Dream Up Great Ideas. Work With it Until it's Realized</h4>
         <p  className="text-center">Everything begins with an idea. Let your ideas give us an inspiration. We work for your dream project until it's realized. You will have a pleasure working with us.</p>
           </Col>
        </Row>
        <Row>
        <h1 className="text-center">Finest Work For Our Clients!</h1>
        <p  className="text-center">Our team is specifically designed to develop software to the fullest of our clients wish. We succeed only if our customers and their businesses succeed.</p>
        </Row>
      </section>
      
    </>
  );
}

export default Home;
