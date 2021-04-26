import React, { useState } from "react";
import {} from "react-bootstrap";
import { Form, Container, Button, Row, Col, InputGroup } from "react-bootstrap";

function Booking() {
  const [passenger1, setPassenger1] = useState([]);
  const [inputList, setInputList] = useState([]);


  const addForm = ()=>{
      return (
        setInputList(inputList.concat(
         <div>
              <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option value = "male">Male</option>
                      <option value = "female">Female</option>
                      <option value = "others">Others</option>
                    </Form.Control>
                  </Form.Group>
          </div>)
      )
      )
  }
  function addPassenger(event) {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formData, formDataObj);
  }
  return (
    <>
      <Container>
          {/* <form onSubmit={this.handleSubmitEvent}> */}
        <Form style={{ "margin-bottom": "60px" }}>
          <Container>
            <br />
            <Row>
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" placeholder="Source" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text" placeholder="Destination" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>Train Name</Form.Label>
                  <Form.Control type="text" placeholder="Train Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Train Number</Form.Label>
                  <Form.Control type="text" placeholder="Train Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group value="formBasicEmail">
                  <Form.Label>Source Time</Form.Label>
                  <Form.Control type="time" placeholder="Source Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Destination Time</Form.Label>
                  <Form.Control type="time" placeholder="Destination Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="Destination Time" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group value="ControlSelect1">
                  <Form.Label>Class</Form.Label>
                  <Form.Control as="select">
                    <option>1 AC</option>
                    <option>2 AC</option>
                    <option>3 AC</option>
                    <option>CC</option>
                    <option>FC</option>
                    <option>SL</option>
                  </Form.Control>
                </Form.Group>
                <Form size="sm" className="mb-3"></Form>
              </Col>
            </Row>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 1</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 1" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option value = "male">Male</option>
                      <option value = "female">Female</option>
                      <option value = "others">Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 2</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 2" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 3 </Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 3" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 4</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 4" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 5</Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 5" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Form>
              <Row>
                {" "}
                <Col>
                  <Form.Group value="passengerName">
                    <Form.Label>Passenger Name 6 </Form.Label>
                    <Form.Control type="text" placeholder="Passenger Name 6" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group value="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Form.Control>
                  </Form.Group>
                  <Form size="sm" className="mb-3"></Form>
                </Col>
                <Col>
                  <Form.Group value="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="XX" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Button variant="success" type="submit">
              Book Now
            </Button>
            


          </Container>
        </Form>
        {/* </form> */}
      </Container>
    </>
  );
}

export default Booking;
