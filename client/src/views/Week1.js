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
  
  
  class Week1 extends React.Component {
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
                    <li style={{color:'black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>Intro to Web Development</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>Web</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>Version control using Git</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>GitHub</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>HTML</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="#" style={{color:'#00cdb3'}}>HTML</a></li>
                      </ul>
                    <br/>

                  </ul>
                  <br/>
                  <p style={{color:'black',fontSize:'20px'}}>Check your understanding!</p>
                  <a href="/admin/Form1"><button type="button" class="btn btn-outline-info" >Weekly Assessment</button></a>
                </div>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      WEB, GITHUB, HTML
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
  
  export default Week1;
  

