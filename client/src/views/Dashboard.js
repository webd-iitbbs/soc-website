
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';

// core components


class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user:''
      };
  }

  componentDidMount () {
    console.log('hi')
    axios.get('/user')
    .then(response => {
        console.log('hello')
        this.setState({ user: response.data });
    })
  }

  loginState(){
    return (
      this.state.user.name ?  <>
      
      </>: <>
      <p className="card-category">Login with your Institute mailId (if you haven't, if you have logged in you won't be seeing this, lol :)</p>
      <p className="card-category">Login with the same email, so that we an track your progress..</p>
      {/* <a href="/auth/google"><button type="button" class="btn btn-outline-info" >LOGIN</button></a> */}
      </>
    );
  }

  render() {
    return (
      <>
        <div className="content">
     
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">WELCOME TO THE WORKSHOP</CardTitle>
                  <p className="card-category">THIS IS A 4 DAY BOOTCAMP</p>
                  <p className="card-category">In which , you will be learning 
the important concepts of HTML, 
styling the web pages using CSS, 
adding responsiveness to the web pages using CSS, 
some of the important concepts of JavaScript. </p>
                  <p className="card-category">To make sure you have gained knowledge out of it, we will be assessing you after the sessions. </p>
                  <p className="card-category">Proceed to dashboard and find links for Part1 & Part2</p>
                  <p className="card-category">Proceed to Part2 only if you have completed Part1</p>
                  <p className="card-category">The assessments you submit now might be used during inductions to check the knowledge you gained during the bootcamp</p>
                  {/* {this.loginState()} */}
                </CardHeader>
               
                <CardFooter>
                  <hr />
                  
                </CardFooter>
              </Card>
            </Col>
          </Row>
         
        </div>
      </>
    );
  }
}

export default Dashboard;
