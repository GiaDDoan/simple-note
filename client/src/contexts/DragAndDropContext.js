import React, { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  requestAllTitles,
  receiveAllTitles,
} from '../store/reducers/titles/actions';

export const DragAndDropContext = createContext(null);

// const fetch_api = {
//   titles: '/titles/get-all-documents',
// };

export const DragAndDropProvider = ({ children }) => {
  const dispatch = useDispatch();

  const fetchDocuments = async (collection) => {
    return fetch(`/${collection}/get-all-documents`).then((response) =>
      response.json()
    );
  };

  const refetchDocuments = async (collection, columnId) => {
    dispatch(requestAllTitles());
    try {
      const fetch_response = await fetchDocuments(collection);
      const newDataFormat = {
        [columnId]: {
          collection: fetch_response.collection,
          placeholder_name: fetch_response.placeholder_name,
          items: fetch_response.titles,
        },
      };
      dispatch(receiveAllTitles(newDataFormat));
    } catch (error) {
      console.error('ERROR: ', error.message);
    }
  };

  const deleteDocument = (collection, documentId) => {
    fetch(`/${collection}/delete-document/${documentId}`, {
      method: 'DELETE',
    });
  };

  return (
    <DragAndDropContext.Provider
      value={{
        actions: {
          fetchDocuments,
          refetchDocuments,
          deleteDocument,
        },
      }}
    >
      {children}
    </DragAndDropContext.Provider>
  );
};
