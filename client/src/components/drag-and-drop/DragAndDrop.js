import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import { onDragEnd } from './functions/onDragEnd';
import ModalToggleBtn from '../modal/ModalToggleBtn';
import Modal from '../modal/Modal';
// import { ToggleFct } from '../modal/functions/ToggleFct';
// import { fetchAllTitles } from '../../api-helpers/index';

function DragAndDrop({
  columnsArg,
  dispatch,
  fetch_api,
  request_reducer,
  receive_reducer,
}) {
  // const [columns, setColumns] = React.useState(columnsArg);
  const [status, setStatus] = React.useState('loading');
  // console.log('COLUMNS', columns);
  //Modal
  const [modalToggle, setModalToggle] = useState(false);
  // const dispatch = useDispatch();

  const ToggleFct = () => {
    // console.log('Toggle called');
    setModalToggle((modalToggle) => !modalToggle);
  };
  // console.log('%cCOLUMNS ', 'color:yellow;', columns);
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columnsArg, dispatch)}
    >
      {Object.entries(columnsArg).map(([id, column]) => {
        console.log('DnD', id);

        return (
          <Wrapper collection={column.collection}>
            <div className="sidebar_home_wrapper">
              <div className="sidebar_home_btn">HOME</div>
            </div>
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
                      // console.log(item, index);
                      return (
                        <Draggable
                          key={item._id} //_id
                          draggableId={item._id} //_id
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <>
                                <Title
                                  className="title_"
                                  snapshot={snapshot}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: 'none',
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {item.title_name}
                                </Title>
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
              fetch_api={fetch_api}
              request_reducer={request_reducer}
              receive_reducer={receive_reducer}
            />
          </Wrapper>
        );
      })}
    </DragDropContext>
  );
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
      .title_ {
        width: 65px;
        height: 65px;
        margin: 20px auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* transition: 0.3s; */
        background-color: #4b4a54;

        &:hover {
          /* border-radius: 10%; */
          background-color: rgb(75, 74, 84, 0.8);
        }
      }
    `}
`;
const Title = styled.div``;
const Container = styled.div``;

export default DragAndDrop;
