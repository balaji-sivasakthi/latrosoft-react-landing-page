import React from 'react'
import { Col, Row } from 'reactstrap'


function Home() {
  return (
   <div className='container w-100 shadow-none p-3 mb-5 rounded hero mt-3  ' >
     <Row>
       <Col sm={12} md={6}>
       <h1>Turn Your Ideas into Future.</h1>
       </Col>
       <Col sm={12} md={6} ></Col>
     </Row>
   </div>
  )
}

export default Home