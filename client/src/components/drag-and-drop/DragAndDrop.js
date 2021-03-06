import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { onDragEnd } from './functions/onDragEnd';
import ModalToggleBtn from '../modal/ModalToggleBtn';
import Modal from '../modal/Modal';
import { DragAndDropContext } from '../../contexts/DragAndDropContext';
import { RightClickContext } from '../../contexts/RightClickContext';
import RightClickContent from '../right-click-content/RightClickContent';
import ContentEditable from 'react-contenteditable';
import { useParams } from 'react-router-dom';
// import { ToggleFct } from '../modal/functions/ToggleFct';
// import { fetchAllTitles } from '../../api-helpers/index';

function DragAndDrop({
  columnsArg,
  request_reducer,
  receive_reducer,
  update_reducer,
}) {
  // const [columns, setColumns] = React.useState(columnsArg);
  // console.log('COLUMNS', columns);
  //Modal
  const [modalToggle, setModalToggle] = useState(false);
  const dispatch = useDispatch();
  const { title_name } = useParams();

  //Contexts
  const {
    isDisabled,
    actions: { fetchDocuments, ToggleDisabled, setIsDisabled },
  } = useContext(DragAndDropContext);
  const {
    isContextMenuVisible,
    contextMenuX,
    contextMenuY,
    chosenItem,
    actions: { handleRightClick, handleChosenItem, handleEditContent },
  } = useContext(RightClickContext);

  const handleChosenTitle = (collection, item) => {
    if (collection !== 'titles') return;

    let title = item.main_name.toLowerCase();
    return `/${title}`;
  };

  const ToggleFct = () => {
    // console.log('Toggle called');
    setModalToggle((modalToggle) => !modalToggle);
  };
  // console.log('%cCOLUMNS ', 'color:yellow;', columns);

  // if(columnsArg){

  // }
  if (columnsArg) {
    return (
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columnsArg, dispatch, update_reducer)
        }
        // onDragEnd={(result) => console.log('RESULT ', result)}
      >
        {Object.entries(columnsArg).map(([id, column]) => {
          // console.log('ARG', column);

          return (
            <Wrapper collection={column.collection}>
              {column.collection === 'titles' && (
                <div className="sidebar_home_wrapper">
                  <div className="sidebar_home_btn">HOME</div>
                </div>
              )}
              <Droppable droppableId={id} key={id}>
                {(provided, snapshot) => {
                  return (
                    <Container
                      className="container_"
                      snapshot={snapshot}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={
                        {
                          // background: snapshot.isDraggingOver
                          //   ? 'lightblue'
                          //   : 'lightgrey',
                          // padding: 4,
                          // width: 250,
                          // minHeight: 500,
                        }
                      }
                    >
                      {column.items.map((item, index) => {
                        // console.log('INDEX', item, index);
                        return (
                          <Draggable
                            key={item._id} //_id
                            draggableId={item._id} //_id
                            index={index}
                          >
                            {(provided, snapshot) => {
                              // let textState = {
                              //   value: item.title_name,
                              //   isInEditMode: true,
                              // };
                              // setTextContent(item.title_name);
                              return (
                                <>
                                  <Item
                                    className="item_"
                                    onClick={() => handleChosenItem(item)}
                                    to={() =>
                                      handleChosenTitle(column.collection, item)
                                    }
                                    onDoubleClick={ToggleDisabled}
                                    onContextMenuCapture={(event) => {
                                      handleRightClick(event);
                                      handleChosenItem(item);
                                    }}
                                    snapshot={snapshot}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {/* {textState.value} */}
                                    <ContentEditable
                                      html={item.main_name}
                                      disabled={isDisabled}
                                    />
                                  </Item>
                                  {isContextMenuVisible &&
                                    chosenItem._id === item._id && (
                                      <RightClickContent
                                        collection={column.collection}
                                        contextMenuX={contextMenuX}
                                        contextMenuY={contextMenuY}
                                        columnId={id}
                                        chosenItem={chosenItem}
                                        handleEditContent={handleEditContent}
                                      />
                                    )}
                                </>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </Container>
                  );
                }}
              </Droppable>
              <ModalToggleBtn
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
                ToggleFct={ToggleFct}
                collection={column.collection}
              />
              <Modal
                modalToggle={modalToggle}
                setModalToggle={setModalToggle}
                ToggleFct={ToggleFct}
                column={column}
                columnId={id}
                dispatch={dispatch}
                // fetch_api={fetch_api}
                request_reducer={request_reducer}
                receive_reducer={receive_reducer}
              />
            </Wrapper>
          );
        })}
      </DragDropContext>
    );
  }
  return <div>X</div>;
}

const Wrapper = styled.div`
  ${(props) =>
    props.collection === 'titles' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;

      .container_ {
      }
      .sidebar_home_wrapper {
        border-bottom: 3px #4b4a54 solid;
        padding: 20px 14px;
      }
      .sidebar_home_btn {
        width: 65px;
        height: 65px;
        /* margin: 20px auto; */
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transition: 0.3s; */
        background-color: rgb(75, 74, 84);

        &:hover {
          background-color: rgb(75, 74, 84, 0.8);
        }
      }
      .item_ {
        width: 65px;
        height: 65px;
        margin: 20px auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transition: 0.3s; */
        background-color: #4b4a54;
        color: white;

        &:hover {
          /* border-radius: 10%; */
          background-color: rgb(75, 74, 84, 0.8);
        }
      }
    `}

  ${(props) =>
    props.collection === 'sub-titles' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;

      .container_ {
        border: solid 1px red;
        width: 100%;
      }
      .item_ {
        width: 80%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transition: 0.3s; */
        background-color: #4b4a54;
        color: white;
        border: 1px solid yellow;

        &:hover {
          /* border-radius: 10%; */
          background-color: rgb(75, 74, 84, 0.8);
        }
      }

      /* display: flex;
      flex-direction: column;
      align-items: center;
      .container_ {
        border: solid 1px yellow;
        .item_ {
          color: white;
          background-color: grey;
        }
      } */
    `}
`;
const Item = styled(Link)``;
const Container = styled.div``;

export default DragAndDrop;
