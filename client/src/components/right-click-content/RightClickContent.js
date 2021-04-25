import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { deleteDocument } from '../../api-helpers/index';
import { DragAndDropContext } from '../../contexts/DragAndDropContext';

const RightClickContent = ({
  collection,
  contextMenuX,
  contextMenuY,
  columnId,
  chosenItem,
  fetch_api,
  request_reducer,
  receive_reducer,
  dispatch,
}) => {
  let documentId = chosenItem._id;
  const {
    actions: { refetchDocuments },
  } = useContext(DragAndDropContext);

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
        <Option
          onClick={() => {
            deleteDocument(collection, documentId);
            // refetchDocuments(
            //   columnId,
            //   dispatch,
            //   fetch_api,
            //   request_reducer,
            //   receive_reducer
            // );
            refetchDocuments(collection, columnId);
          }}
        >
          {`Delete ${collection}`}
        </Option>
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
const Option = styled.div`
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
