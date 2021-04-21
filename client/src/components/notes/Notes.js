import React from 'react';
import styled from 'styled-components';
import DragAndDrop from '../drag-and-drop/DragAndDrop';
import { color_theme } from '../../utils/color-theme';

function Notes() {
  return (
    <Wrapper>
      {/* <img src={bg_theme}></img> */}
      <div>Notes</div>
      {/* <DragAndDrop /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid 1px red; */
  background-color: ${color_theme.default.notes.bg};
  width: 100vw;
  height: 100%;

  div {
    color: white;
  }
`;

export default Notes;
