import axios from "axios";
import React, {Component} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";


class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        qone: '',
        qtwo:'',
        qthree : '',
        qfour : '',
        qfive : '',
        qsix : '',
        qseven:'',
        qeight:'',
        qnine: '',
        qten:'',
        qeleven:'',
        qtwelve:'',
        qthirteen:'',
        qfourteen:'',
        qfifteen:'',
        qsixteen:'',
        qseventeen:'',
        qeighteen:'',
        qnineteen:'',
        qtwenty:''
      };
  
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
      console.log('Change detected. State updated' + name + ' = ' + value);
    }
  
    
    handleSubmit(event) {
      event.preventDefault();
      var bodyFormData = new FormData();
      bodyFormData.set('qone', this.state.qone);
      bodyFormData.set('qtwo', this.state.qtwo);
      bodyFormData.set('qthree', this.state.qthree);
      bodyFormData.set('qfour', this.state.qfour);
      bodyFormData.set('qfive', this.state.qfive);
      bodyFormData.set('qsix', this.state.qsix);
      bodyFormData.set('qseven', this.state.qseven);
      bodyFormData.set('qeight', this.state.qeight);
      bodyFormData.set('qnine', this.state.qnine);
      bodyFormData.set('qten', this.state.qten);
      bodyFormData.set('qeleven', this.state.qeleven);
      bodyFormData.set('qtwelve', this.state.qtwelve);
      bodyFormData.set('qthirteen', this.state.qthirteen);
      bodyFormData.set('qfourteen', this.state.qfourteen);
      bodyFormData.set('qfifteen', this.state.qfifteen);
      bodyFormData.set('qsixteen', this.state.qsixteen);
      bodyFormData.set('qseventeen', this.state.qseventeen);
      bodyFormData.set('qeighteen', this.state.qeighteen);
      bodyFormData.set('qnineteen', this.state.qnineteen);
      bodyFormData.set('qtwenty', this.state.qtwenty);


      console.log(this.state)
      axios({
        method: 'post',
        url: '/submit1',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            console.log(response);
            alert('Submitted successfully.');
            this.setState('')
        })
        .catch(function (response) {
            console.log(response);
        })
    }
  componentDidMount(){
    alert('Make sure you have logged in before attempting the assessment');
  }
  
    render() {
      return (
        <>
        <div className="content">
     
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">FORM1</CardTitle>
                
                </CardHeader>
                <CardBody>
                {/* <p className="card-category">Yet to be released</p> */}
                
                <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="qone">Question 1</label>
              <h6>A frontend cum backend developer using a common platform across the entire stack is known as</h6>
              <input type="text" name="qone" value={this.state.qone} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 2</label>
              <h6>What is the difference between HTTP and HTTPs?</h6>
              <input type="text" name="qtwo" value={this.state.qtwo} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 3</label>
              <h6>HTML,CSS,Bootstrap are part of which component of a website:</h6>
              <input type="text" name="qthree" value={this.state.three} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 4</label>
              <h6>Websites that can adjust according to screen size are called:</h6>
              <input type="text" name="qfour" value={this.state.qfour} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 5</label>
              <h6>How is Github different from Git</h6>
              <input type="text" name="qfive" value={this.state.qfive} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 6</label>
              <h6>The main branch that hosts packages and other data in Github is known as:</h6>
              <input type="text" name="qsix" value={this.state.qsix} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 7</label>
              <h6>The process of updating anything in a Github Repo is known as:</h6>
              <input type="text" name="qsix" value={this.state.qseven} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 8</label>
              <h6>The command that is used to update a local file system to a git repo is:</h6>
              <input type="text" name="qsix" value={this.state.qeight} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 9</label>
              <h6>The command that is used to update a local file system to a git repo is:</h6>
              <input type="text" name="qsix" value={this.state.qnine} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 10</label>
              <h6>Which tag is used to give a line break ?</h6>
              <input type="text" name="qsix" value={this.state.qten} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 11</label>
              <h6>What is the font-size of the h1 heading tag?</h6>
              <input type="text" name="qsix" value={this.state.qeleven} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>

            <div className="form-group">
              <label for="qone">Question 12</label>
              <h6>Which attribute is used to add link to any element</h6>
              <input type="text" name="qsix" value={this.state.qtwelve} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>

            <div className="form-group">
              <label for="qone">Question 13</label>
              <h6>What is the purpose of using div tags in HTML?</h6>
              <input type="text" name="qsix" value={this.state.qthirteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            
            <div className="form-group">
              <label for="qone">Question 14</label>
              <h6>Which of the following tags adds text formatting (without any additional styles - CSS)? (i,b,span,p)</h6>
              <input type="text" name="qsix" value={this.state.qfourteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 15</label>
              <h6>The correct way to add background color in HTML?</h6>
              <input type="text" name="qsix" value={this.state.qfifteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 16</label>
              <h6>What is the difference between Inline , Internal and External CSS?</h6>
              <input type="text" name="qsix" value={this.state.qsixteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 17</label>
              <h6>Color in CSS can be specified by 3 ways. Write an example of each.</h6>
              <input type="text" name="qsix" value={this.state.qseventeen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 18</label>
              <h6>What is the difference between b tag and strong tag?</h6>
              <input type="text" name="qsix" value={this.state.qeighteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 19</label>
              <h6>What is the difference between padding and margin in CSS?</h6>
              <input type="text" name="qsix" value={this.state.qnineteen} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 20</label>
              <h6>Write a statement (CSS code) for red colored, dashed border of 8px thickness.</h6>
              <input type="text" name="qsix" value={this.state.qtwenty} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>

          
          
            <input type="submit" value="Submit" className="btn btn-primary"  />
          </form> 
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
        
      )
    }
  }
  
  
  
  
export default Form1;
