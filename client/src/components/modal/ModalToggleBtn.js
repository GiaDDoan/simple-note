import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function ModalToggleBtn({
  modalToggle,
  setModalToggle,
  ToggleFct,
  collection,
}) {
  // const Toggle = () => {
  //   setModalToggle((modalToggle) => !modalToggle);
  // };
  return (
    <Wrapper collection={collection}>
      <Button className="modal_toggle" onClick={ToggleFct}>
        +
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${(props) =>
    props.collection === 'titles' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;

      .modal_toggle {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transition: 0.3s; */
        background-color: #4b4a54;
        color: white;
        border: none;

        &:hover {
          /* border-radius: 10%; */
          background-color: rgb(75, 74, 84, 0.8);
        }
        &:focus {
          outline: 0;
        }
      }
    `}
`;
const Button = styled.button``;

export default ModalToggleBtn;
