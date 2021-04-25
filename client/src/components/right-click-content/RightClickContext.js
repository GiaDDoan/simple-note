import React, { createContext, useState } from 'react';

export const RightClickContext = createContext(null);

export const RightClickProvider = ({ children }) => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuX, setContextMenuX] = React.useState(0);
  const [contextMenuY, setContextMenuY] = React.useState(0);
  const [chosenItem, setChosenItem] = useState({});

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenuX(event.clientX);
    setContextMenuY(event.clientY);
    setIsContextMenuVisible((isContextMenuVisible) => !isContextMenuVisible);
  };

  const handleChosenItem = (item) => {
    // setUpdateNoteModalToggle((updateNoteModalToggle) => !updateNoteModalToggle);
    console.log('CHOSEN ITEM: ', item);
    setChosenItem(item);
  };

  return (
    <RightClickContext.Provider
      value={{
        isContextMenuVisible,
        contextMenuX,
        contextMenuY,
        chosenItem,
        actions: {
          handleRightClick,
          handleChosenItem,
          setIsContextMenuVisible,
        },
      }}
    >
      {children}
    </RightClickContext.Provider>
  );
};
