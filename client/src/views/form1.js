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
      };
  
      this.handleChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.onSubmit.bind(this);
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
  
    
    onSubmit = (e) => {
      e.preventDefault();
      console.log('Current State is: ' + JSON.stringify(this.state));
      axios.post('/submit1', {
        qone:this.state.qone,
        qtwo:this.state.qtwo,
        qthree:this.state.qthree,
        qfour:this.state.qfour,
        qfive:this.state.qfive,
        qsix:this.state.qsix
      }, {headers:{"Accept": "application/json","Content-Type" : "application/json"}} ).then(result => {
        console.log('submitted to backed');
        console.log(result.data);
      })
      .catch(function (error){
        console.log(error);
    })
      
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
                <p className="card-category">Yet to be released</p>
                
                <form  onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label for="qone">Question 1</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qone" value={this.state.qone} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 2</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qtwo" value={this.state.qtwo} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 3</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qthree" value={this.state.three} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 4</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qfour" value={this.state.qfour} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 4</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qfive" value={this.state.qfive} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qone">Question 4</label>
              <h5>Capital of AMERICA</h5>
              <input type="text" name="qsix" value={this.state.qsix} onChange={this.handleChange} className="form-control" id="qone"  />
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