import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

function Form({ name, placeholder }) {
  let initialState = { userInput: '', collection: name };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (val, keyName) => {
    setFormData({ ...formData, [keyName]: val });
  };
  console.log('FORM DATA', formData);

  return (
    <Wrapper>
      <Input
        name="userInput"
        placeholder={placeholder}
        type="text"
        value={formData.userInput}
        handleChange={handleChange}
      />
      <button className="create_btn">Create</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .create_btn {
    /* margin-top: 200px; */
    margin-top: 120px;
    width: 70px;
  }
`;

export default Form;
