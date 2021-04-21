import React from 'react';
import styled from 'styled-components';
import DragAndDrop from '../drag-and-drop/DragAndDrop';

function Notes() {
  return (
    <Wrapper>
      <div>Notes</div>
      {/* <DragAndDrop /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default Notes;
