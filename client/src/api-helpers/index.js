export const fetchAllTitles = () => {
  return fetch('/titles/get-all-documents').then((response) => response.json());
};

export const refetchDocuments = async (
  columnId,
  dispatch,
  fetch_api,
  request_reducer,
  receive_reducer
) => {
  dispatch(request_reducer());
  try {
    const fetch_response = await fetch_api();
    const newDataFormat = {
      [columnId]: {
        collection: fetch_response.collection,
        placeholder_name: fetch_response.placeholder_name,
        items: fetch_response.titles,
      },
    };
    dispatch(receive_reducer(newDataFormat));
    console.log('Refetch done');
  } catch (error) {
    console.error('ERROR: ', error.message);
  }
};

export const deleteDocument = (collection, documentId) => {
  fetch(`/${collection}/delete-document/${documentId}`, {
    method: 'DELETE',
  });
};
