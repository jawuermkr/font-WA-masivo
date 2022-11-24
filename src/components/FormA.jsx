import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { url } from "../data/url";

export default function FormA() {

  const [mensaje, setMensaje]=useState()
  const [numero, setNumero]=useState()

  const handleSubmit = async (e) => {

    e.preventDefault()

    let res = await axios.post(`${url}/lead`, {
      message:mensaje,
      phone:numero
    }
    )

    console.log(res)

  } 
  
  return(
    <>
    <Container>
      <Row>
        <Col className="col-md-3">
        </Col>
        <Col className="col-md-6 mt-5">
        <h2>Envio de mensaje wa</h2>    
        <Form onSubmit={handleSubmit}>
          <textarea className="form-control" type ="text" name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          
          <input className="form-control" type ="text" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)}/>
          
          <button className="btn btn-success form-control" type="submit" name="btnA">Enviar mensaje</button>
        </Form>
        </Col>
        <Col className="col-md-3">
        </Col>
      </Row>
    </Container>
    </>
  )
}