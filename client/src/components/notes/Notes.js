import React from 'react';
import styled from 'styled-components';
import DragAndDrop from '../drag-and-drop/DragAndDrop';
import { color_theme } from '../../utils/color-theme';
import ContentEditable from 'react-contenteditable';

function Notes() {
  let textState = {
    value: 'Random Note',
    isInEditMode: false,
  };
  // const changeEditMode = () => {
  //   textState.isInEditMode = !textState.isInEditMode;
  //   console.log('EDIT', textState.isInEditMode);
  // };
  // console.log('Text State', textState.isInEditMode);
  return (
    <Wrapper>
      <ContentEditable html={'Note'} disabled={false} />
    </Wrapper>
  );

  // return textState.isInEditMode ? (
  //   <div>
  //     <input defaultValue={'Test'}></input>
  //   </div>
  // ) : (
  //   <Wrapper>
  //     {/* <img src={bg_theme}></img> */}
  //     <div onDoubleClick={changeEditMode}>Notes</div>
  //     {/* <DragAndDrop /> */}
  //   </Wrapper>
  // );
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
