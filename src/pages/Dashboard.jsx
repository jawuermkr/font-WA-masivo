import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormA from "../components/FormA";

export default function Dashboard() {
  return(
    <>
    <Container>
      <Row>
      <Col className="col-md-12">
        <FormA/>
      </Col>
      </Row>
    </Container>
    </>
  )
}