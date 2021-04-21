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
  background-color: ${color_theme.default.notes.bg};
  width: 100vw;

  div {
    width: 100%;
  }
`;

export default Notes;
