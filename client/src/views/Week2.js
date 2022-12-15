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
    componentDidMount(){
      alert('Proceed to Part 2 only if you have completed Part 1');
    }
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
                      
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/public/2p8k9146" style={{color:'#00cdb3'}}>Advanced CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/public/su10tnve" style={{color:'#00cdb3'}}>Mobile Responsiveness</a></li>
                      </ul>

                      <li style={{color:'Black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>JavaScript</li>
                      <ul >
                      
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/public/cpqrndgp" style={{color:'#00cdb3'}}>Introduction to JavaScript</a></li>
                      </ul>
                  </ul>

                  <br/>

                  <p style={{color:'black',fontSize:'20px'}}>Check your understanding!</p>
                  <a href='/admin/Form2'><button type="button" class="btn btn-outline-info ">Assessment 2</button></a>
                </div>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      CSS, JS
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
  
