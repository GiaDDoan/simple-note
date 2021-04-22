export const requestAllTitles = () => ({
  type: 'REQUEST_ALL_TITLES',
});

export const receiveAllTitles = (titlesColumn) => ({
  type: 'RECEIVE_ALL_TITLES',
  titlesColumn,
});

// export const updateTitleOrder = (sourceId, sourceItems) => ({
//   type: 'UPDATE_TITLE_ORDER',
//   sourceId,
//   sourceItems,
// });
