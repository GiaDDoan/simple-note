import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { onDragEnd } from './functions/onDragEnd';
// import { fetchAllTitles } from '../../api-helpers/index';

// const itemsFromBackend = [
//   { id: uuid(), content: 'First task' },
//   { id: uuid(), content: 'Second task' },
// ];

// const columnsFromBackend = {
//   [uuid()]: {
//     name: 'Todo',
//     items: itemsFromBackend,
//   },
//   [uuid()]: {
//     name: 'In Progress',
//     items: [],
//   },
// };

function DragAndDrop({ columnsArg, class_name }) {
  const [columns, setColumns] = React.useState(columnsArg);
  const [status, setStatus] = React.useState('loading');
  console.log('COLUMNS', columns);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column]) => {
        console.log('COL ', column);

        return (
          <Wrapper name={column.name}>
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
          </Wrapper>
        );
      })}
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  ${(props) =>
    props.name === 'Title' &&
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
        transition: 0.3s;
        background-color: #4b4a54;

        &:hover {
          border-radius: 10%;
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
        transition: 0.3s;
        background-color: #4b4a54;

        &:hover {
          border-radius: 10%;
        }
      }
    `}
`;
const Title = styled.div`
  /* border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    border-radius: 10%;
  } */
`;
const Container = styled.div``;

export default DragAndDrop;
