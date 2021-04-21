import React, { useState } from 'react';
import styled from 'styled-components';

function ModalToggleBtn({ modalToggle, setModalToggle, ToggleFct }) {
  // const Toggle = () => {
  //   setModalToggle((modalToggle) => !modalToggle);
  // };

  console.log('Toggle state ', modalToggle);
  return (
    <Wrapper>
      <Button className="modal_toggle" onClick={ToggleFct}>
        +
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Button = styled.button``;

export default ModalToggleBtn;
