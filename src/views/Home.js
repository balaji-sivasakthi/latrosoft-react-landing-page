import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import hero from '../assets/img/hero-right.png'

function Home() {
  return (
   <div className='container w-100 shadow-none p-3 mb-5 rounded hero   px-5  ' >
     <Row className='d-flex justify-content-between flex-wrap-reverse'>
       <Col className='d-flex flex-column justify-content-center hero-title ' lg={5}>
       <h1>Turn Your Ideas into <span className='text-primary'>Future.</span></h1>
       <p>Your Future Starts Today not Tomorrow so Grow up Your Ideas. Quickly have a look at Latrosoft</p>
       <Button sm={12}  color='primary' outline className='rounded-0' >Get a Proposal</Button>
       </Col>
       <Col className='d-flex justify-content-center align-items-center'  lg={5} >
        <img style={{width:"100%",height:"100%"}} src={hero} ></img>
       </Col>
     </Row>
   </div>
  )
}

export default Home