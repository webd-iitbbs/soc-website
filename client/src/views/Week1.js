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
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/public/anzin2c9" style={{color:'#00cdb3'}}>Web</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>Version control using Git</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/git-and-git-hub-9l6lumy9" style={{color:'#00cdb3'}}>GitHub</a></li>
                      </ul>

                    <br/>

                    <li style={{color:'black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right" aria-hidden="true" ></i>HTML</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/html-9xekegmy" style={{color:'#00cdb3'}}>HTML</a></li>
                      </ul>
                    <br/>

                  </ul>
                  <ul class="fa-ul pl-4">
                    <li style={{color:'Black',fontSize:'20px'}}><i class="fa-li fa fa-caret-right " aria-hidden="true" ></i>CSS</li>
                      <ul >
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/introducion-diu9ysqu" style={{color:'#00cdb3'}}>Introduction</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/types-of-css-3dblvpti" style={{color:'#00cdb3'}}>Types of CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/css-background-elements-oba4gxx5" style={{color:'#00cdb3'}}>CSS Background elements</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/css-borders-s6i22c1b" style={{color:'#00cdb3'}}>CSS Borders</a></li>                        
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/css-text-styling-and-formatting-h1df4fda" style={{color:'#00cdb3'}}>CSS text styling and formatting</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/google-fonts-abhcgqm3" style={{color:'#00cdb3'}}>Google Fonts</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/margin-and-padding-in-css-jb2h7us2" style={{color:'#00cdb3'}}>Margin and Padding in CSS</a></li>
                        <li style={{color:'#00cdb3',fontSize:'18px'}}><a href="https://webdiitbbs.slab.com/posts/color-combination-5osaat58" style={{color:'#00cdb3'}}>Color Combination</a></li>
                      </ul>
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
  

