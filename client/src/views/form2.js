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


class Form2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
        qtwentyone:'',
        qtwentytwo:'',
        qtwentythree:'',
        qtwentyfour:'',
        qtwentyfive:'',
        qtwentysix:'',
        qtwentyseven:'',
        qtwentyeight:'',
        qtwentynine:'',
        qthirty:'',
        qthirtyone:'',
        qthirtytwo:'',
        qthirtythree:'',
        qthirtyfour:'',
        qthirtyfive:'',
        qthirtysix:'',
        qthirtyseven:'',
        qthirtyeight:''
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
     
      bodyFormData.set('qtwentyone', this.state.qtwentyone);
      bodyFormData.set('atwentytwo', this.state.qtwentytwo);
      bodyFormData.set('qtwentythree', this.state.qtwentythree);
      bodyFormData.set('qtwentyfour', this.state.qtwentyfive);
      bodyFormData.set('qtwentyfive', this.state.qtwentyfive);
      bodyFormData.set('qtwentysix', this.state.qtwentysix);
      bodyFormData.set('qtwentyseven', this.state.qtwentyseven);
      bodyFormData.set('qtwentyeight', this.state.qtwentyeight);
      bodyFormData.set('qtwentynine', this.state.qtwentynine);
      bodyFormData.set('qthirty', this.state.qthirty);
      bodyFormData.set('qthirtyone', this.state.qthirtyone);
      bodyFormData.set('qthirtytwo', this.state.qthirtytwo);
      bodyFormData.set('qthirtythree', this.state.qthirtythree);
      bodyFormData.set('qthirtyfour', this.state.qthirtyfour);
      bodyFormData.set('qthirtyfive', this.state.qthirtyfive);
      bodyFormData.set('qthirtysix', this.state.qthirtysix);
      bodyFormData.set('qthirtyseven', this.state.qthirtyseven);
      bodyFormData.set('qthirtyeight', this.state.qthirtyeight);


      console.log(this.state)
      axios({
        method: 'post',
        url: '/submit2',
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
                  <CardTitle tag="h5">FORM2</CardTitle>
                
                </CardHeader>
                <CardBody>
                {/* <p className="card-category">Yet to be released</p> */}
                
                <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="qtwentyone">Question 1</label>
              <h6>We can adjust boxes in CSS using “float” . Name an alternative of it and how it is better than float.</h6>
              <input type="text" name="qtwentyone" value={this.state.qone} onChange={this.handleChange} className="form-control" id="qtwentyone"  />
            </div>
            <div className="form-group">
              <label for="qtwentytwo">Question 2</label>
              <h6>What is Responsiveness of a website? How can it be made Mobile responsive? Write the statement used to make a website mobile responsive.</h6>
              <input type="text" name="qtwentytwo" value={this.state.qtwo} onChange={this.handleChange} className="form-control" id="qtwentytwo"  />
            </div>
            <div className="form-group">
              <label for="qtwentythree">Question 3</label>
              <h6>How can a color combination affect a webpage? Why is it important?</h6>
              <input type="text" name="qtwentythree" value={this.state.three} onChange={this.handleChange} className="form-control" id="qtwentythree"  />
            </div>
            <div className="form-group">
              <label for="qtwentyfour">Question 4</label>
              <h6>What change will the following code bring in webpage?</h6> 
 <p>box-shadow: 7px 4px #696969</p>

              <input type="text" name="qtwentyfour" value={this.state.qfour} onChange={this.handleChange} className="form-control" id="qtwentyfour"  />
            </div>
            <div className="form-group">
              <label for="qtwentyfive">Question 5</label>
              <h6>If “first” is class of div element . What output will be created by 2nd and 3rd line of the following piece of statements?</h6> <br /> 
    <p>.first <br />
     grid-column: 1 / 3;<br />
     grid-row: 2/4;</p>
    

              <input type="text" name="qtwentyfive" value={this.state.qfive} onChange={this.handleChange} className="form-control" id="qtwentyfive"  />
            </div>
            <div className="form-group">
              <label for="qtwentysix">Question 6</label>
              <h6>Inside which HTML element do we put the JavaScript?</h6>
              <input type="text" name="qtwentysix" value={this.state.qsix} onChange={this.handleChange} className="form-control" id="qtwentysix"  />
            </div>



            <div className="form-group">
              <label for="qtwentyseven">Question 7</label>
              <h6>How do you round the number 12.42, to the nearest integer?</h6>
              <input type="text" name="qtwentyseven" value={this.state.qseven} onChange={this.handleChange} className="form-control" id="qtwentyseven"  />
            </div>
            <div className="form-group">
              <label for="qtwentyeight">Question 8</label>
              <h6>A responsive css-grid system has a net total of how many columns?
</h6>
              <input type="text" name="qtwentyeight" value={this.state.qeight} onChange={this.handleChange} className="form-control" id="qtwentyeight"  />
            </div>
            <div className="form-group">
              <label for="qtwentynine">Question 9</label>
              <h6>How do you write "Hello World" in an alert box?</h6>
              <input type="text" name="qtwentynine" value={this.state.qnine} onChange={this.handleChange} className="form-control" id="qtwentynine"  />
            </div>
            <div className="form-group">
              <label for="qthirty">Question 10</label>
              <h6>How do you create a function in JavaScript?</h6>
              <input type="text" name="qthirty" value={this.state.qten} onChange={this.handleChange} className="form-control" id="qthirty"  />
            </div>
            <div className="form-group">
              <label for="qthirtyone">Question 11</label>
              <h6>How can you detect the client's browser name?</h6>
              <input type="text" name="qthirtyone" value={this.state.qeleven} onChange={this.handleChange} className="form-control" id="qthirtyone"  />
            </div>

            <div className="form-group">
              <label for="qthirtytwo">Question 12</label>
              <h6>What is alerted from the following code?</h6>
              <p>var aBoolean = 'true';
	alert((aBoolean == 'false' ? 'High' : 'Low'));</p>

              <input type="text" name="qthirtytwo" value={this.state.qtwelve} onChange={this.handleChange} className="form-control" id="qthirtytwo"  />
            </div>

            <div className="form-group">
              <label for="qthirtythree">Question 13</label>
              <h6>Which of the following variables takes precedence over the others if the names are the same?</h6>
              <input type="text" name="qthirtythree" value={this.state.qthirteen} onChange={this.handleChange} className="form-control" id="qthirtythree"  />
            </div>
            
            <div className="form-group">
              <label for="qthirtyfour">Question 14</label>
              <h6>What is the use of toLocaleString() function in Javascript?</h6>
              <input type="text" name="qthirtyfour" value={this.state.qfourteen} onChange={this.handleChange} className="form-control" id="qthirtyfour"  />
            </div>
            <div className="form-group">
              <label for="qthirtyfive">Question 15</label>
              <h6>What is an event loop in Javascript?</h6>
              <input type="text" name="qthirtyfive" value={this.state.qfifteen} onChange={this.handleChange} className="form-control" id="qthirtyfive"  />
            </div>
            <div className="form-group">
              <label for="qthirtysix">Question 16</label>
              <h6>The min-width for a tablet in the ‘media only screen’ tag is?</h6>
              <input type="text" name="qthirtysix" value={this.state.qsixteen} onChange={this.handleChange} className="form-control" id="qthirtysix"  />
            </div>
            <div className="form-group">
              <label for="qthirtyseven">Question 17</label>
              <h6>For making an image responsive,the height property of the image should be set to :</h6>
              <input type="text" name="qthirtyseven" value={this.state.qseventeen} onChange={this.handleChange} className="form-control" id="qthirtyseven"  />
            </div>
            <div className="form-group">
              <label for="qthirtyeight">Question 18</label>
              <h6>Tha max-width for a mobile in the ‘media screen’ tag is:</h6>
              <input type="text" name="qthirtyeight" value={this.state.qeighteen} onChange={this.handleChange} className="form-control" id="qthirtyeight"  />
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
  
  
  
  
export default Form2;
