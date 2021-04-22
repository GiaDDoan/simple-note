import React, { useState } from 'react';
import styled from 'styled-components';
import { color_theme } from '../../utils/color-theme';
import Form from '../form/Form';

function Modal({ modalToggle, setModalToggle, ToggleFct, column }) {
  // const [modalToggle, setModalToggle] = useState(false);
  // console.log('MODAL COLUMNS ', column);

  return (
    <>
      {modalToggle && (
        <Wrapper>
          <Content>
            <div className="close_bar">
              <button onClick={ToggleFct}>X</button>
            </div>
            <div className="form_container">
              <Form
                name={column.name}
                placeholder={column.placeholder_name}
                column={column}
                setModalToggle={setModalToggle}
              />
            </div>
          </Content>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 500px;
  height: 300px;
  background-color: ${color_theme.default.modal.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
  border-radius: 20px;

  .close_bar {
    position: absolute;
    /* top: 0;
    bottom: 0;
    right: 0;
    left: 0; */
    right: 15px;
    top: 10px;
  }

  /* .form_container {
    border: solid 1px blue;
    display: flex;
    align-items: center;
  } */
`;

export default Modal;
