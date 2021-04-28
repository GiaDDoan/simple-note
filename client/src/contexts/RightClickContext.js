import React, { createContext, useState } from 'react';

export const RightClickContext = createContext(null);

export const RightClickProvider = ({ children }) => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuX, setContextMenuX] = useState(0);
  const [contextMenuY, setContextMenuY] = useState(0);
  const [chosenItem, setChosenItem] = useState({});
  // const [editContent, setEditContent] = useState(false);

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenuX(event.clientX);
    setContextMenuY(event.clientY);
    setIsContextMenuVisible((isContextMenuVisible) => !isContextMenuVisible);
  };

  const handleChosenItem = (item) => {
    // setUpdateNoteModalToggle((updateNoteModalToggle) => !updateNoteModalToggle);
    // console.log('CHOSEN ITEM: ', item);
    setChosenItem(item);
  };

  // const handleEditContent = () => {
  //   setEditContent((editContent) => !editContent);
  // };

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
