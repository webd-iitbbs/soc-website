import React, {Component} from "react";


class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        qone: '',
        qtwo:'',
        qthree : '',
        qfour : '',
        qfive : '',
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
      alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label for="qone">Question 1</label>
              <input type="text" name="qone" value={this.state.qone} onChange={this.handleChange} className="form-control" id="qone"  />
            </div>
            <div className="form-group">
              <label for="qtwo">Question 2</label>
              <input name="qtwo" type="text" value={this.state.qtwo} onChange={this.handleChange} className="form-control" id="qtwo"  />
            </div>
            <div className="form-group">
              <label for="qthree">Question 3</label>
              <textarea  name="qthree" type="text" value={this.state.qthree} onChange={this.handleChange} className="form-control" id="qthree"  />
            </div>
            <div className="form-group">
              <label for="qfour">Question 4</label>
              <textarea  name="qfour" type="text" value={this.state.qfour} onChange={this.handleChange} className="form-control" id="qfour"  />
            </div>
            <div className="form-group">
              <label for="qfive">Question 5</label>
              <textarea  name="qfive" type="text" value={this.state.qfive} onChange={this.handleChange} className="form-control" id="qfive"  />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      )
    }
  }
  
  class MainTitle extends React.Component {
    render(){
      return(
        <h1>Form 2</h1>
      )
    }
  }
  
  class Form2 extends React.Component {
    render(){
      return(
        <div>
          <MainTitle/>
          <ContactForm/>
        </div>
      )
    }
  }
export default Form2;