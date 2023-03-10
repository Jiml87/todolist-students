import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const MyInput = (props) => {

  return <InputGroup variant="warning">
    <InputGroup.Text id="inputGroup-sizing-default">
      Default
    </InputGroup.Text>
    <Form.Control
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
}

export default MyInput;
