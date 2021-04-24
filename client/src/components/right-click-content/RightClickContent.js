import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const RightClickContent = ({
  collection,
  contextMenuX,
  contextMenuY,
  chosenItem,
}) => {
  console.log('NAME', collection);
  console.log('X', contextMenuX);
  console.log('Y', contextMenuY);
  console.log('item ', chosenItem);
  return (
    <Wrapper
      className="right_click_menu"
      style={{
        position: 'absolute',
        top: `${contextMenuY}px`,
        right: `0`,
        bottom: `0`,
        left: `${contextMenuX}px`,
      }}
    >
      {collection === 'titles' && (
        // <Option
        //   onClick={() => fct(itemId, dispatch)}
        // >{`Delete ${name}`}</Option>
        <div>Working</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  width: 200px;
  height: fit-content;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Option = styled(Link)`
  /* width: 90%; */
  padding: 6px 15px;
  border-radius: 8px;
  background-color: transparent;
  color: white;

  &:hover {
    background-color: #bf4141;
  }
`;

export default RightClickContent;
