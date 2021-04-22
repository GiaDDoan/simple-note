import React from 'react';
import styled from 'styled-components';

function Input({ name, type, value, handleChange, placeholder }) {
  console.log('VALUE ', value);
  return (
    <Wrapper className="modal_input">
      <label>{placeholder}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(ev) => handleChange(ev.target.value, name)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Input;
