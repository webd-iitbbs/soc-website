
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
                  <CardTitle tag="h5">WELCOME TO OUR WORKSHOP</CardTitle>
                  <p className="card-category">THIS IS A 2 WEEK WORKSHOP</p>
                  <p className="card-category">After every week you will have an assessment to check your understanding</p>
                  <p className="card-category">After this workshop, you will get a basic idea about web devolepment</p>
                  <p className="card-category">Proceed to dashboard and find links for Week1 and Week2</p>
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
