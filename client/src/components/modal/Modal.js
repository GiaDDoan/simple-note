import React, { useState } from 'react';
import styled from 'styled-components';
import { color_theme } from '../../utils/color-theme';

function Modal({ modalToggle, setModalToggle, ToggleFct }) {
  // const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      {modalToggle && (
        <Wrapper>
          <Content>
            <div>INPUT</div>
            <div className="close_bar">
              <button onClick={ToggleFct}>X</button>
            </div>
            {/* <Form/> */}
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
  border: solid 1px yellow;
  background-color: ${color_theme.default.modal.bg};
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export default Modal;
