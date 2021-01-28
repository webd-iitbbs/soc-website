import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";
  // core components
  
  
  class Week2 extends React.Component {
    render() {
      return (
        <>
          <div className="content">
       
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">TOPICS</CardTitle>
                  
                  </CardHeader>
                  <CardBody>
                  <div>
                
                  <ul class="fa-ul pl-4">
                    <li style={{color:'Black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>CSS</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Introduction</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Types of CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>CSS Background elements</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>CSS Borders</a></li>                        
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>CSS text styling and formatting</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Google Fonts</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Margin and Padding in CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Color Combination</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Advanced CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Mobile Responsiveness</a></li>
                      </ul>
                  </ul>

                  <br/>

                  <p style={{color:'black',fontSize:'20px'}}>Check your understanding!</p>
                  <button type="button" class="btn btn-outline-info ">Weekly Assessment</button>
                </div>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      CSS
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
           
          </div>
        </>
      );
    }
  }
  
  export default Week2;
  