import React from 'react';
import Navigation from './FormNavigation';
import styled from 'styled-components';

const Form = styled.form`
  margin-left: 20px;
  margin-right: 20px;
  input, textarea {
    margin-bottom: 20px;
    width: 800px;
  }
`;

export default function InputDemo(props) {
  return (
    <React.Fragment>
      <Navigation />
      <Form>
        <input type='text' placeholder='placeholder' /> <br />
        <input type='text' /> <br />
        <textarea></textarea>
      </Form>
    </React.Fragment>
  );
}