import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { onDragEnd } from './functions/onDragEnd';

const itemsFromBackend = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
];

const columnsFromBackend = {
  [uuid()]: {
    name: 'Todo',
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: 'In Progress',
    items: [],
  },
};

function DragAndDrop() {
  const [columns, setColumns] = React.useState(columnsFromBackend);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column]) => {
        return (
          <div
            style={{
              padding: '10px',
            }}
          >
            <h2>{column.name}</h2>
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <Container
                    snapshot={snapshot}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? 'lightblue'
                        : 'lightgrey',
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {column.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id} //_id
                          draggableId={item.id} //_id
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <>
                                <Title
                                  className="title_wrapper"
                                  snapshot={snapshot}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    userSelect: 'none',
                                    ...provided.draggableProps.style,
                                  }}
                                >
                                  {item.content}
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
          </div>
        );
      })}
    </DragDropContext>
  );
}

const Title = styled(Link)`
  border: 2px solid black;
  /* width: 65px;
  height: 65px;
  margin: 20px auto;
  border-radius: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    border-radius: 10%;
  }
`;
const Container = styled.div``;

export default DragAndDrop;
