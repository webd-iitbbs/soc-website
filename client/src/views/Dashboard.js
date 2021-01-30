
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
// core components


class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
     
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">WELCOME TO THE WORKSHOP</CardTitle>
                  <p className="card-category">THIS IS A 2 WEEK WORKSHOP</p>
                  <p className="card-category">In which , you will be learning 
the important concepts of HTML, 
styling the web pages using CSS, 
adding responsiveness to the web pages using CSS, 
some of the important concepts of JavaScript. </p>
                  <p className="card-category">To make sure you have gained knowledge out of it, we will be assessing you on the weekends. </p>
                  <p className="card-category">Proceed to dashboard and find links for Week1 and Week2</p>
                  <p className="card-category">Proceed to week 2 only if you have completed week 1</p>
                  <p className="card-category">Login with your Institute mailId (if you haven't, if you have logged in your name should be appearing on top, lol :)</p>
                  <p className="card-category">Login with the same email, so that we an track your progress..</p>
                  <a href="/auth/google"><button type="button" class="btn btn-outline-info" >LOGIN</button></a>
                </CardHeader>
               
                <CardFooter>
                  <hr />
                  <div className="stats">
                    HTML,CSS,GITHUB
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

export default Dashboard;
