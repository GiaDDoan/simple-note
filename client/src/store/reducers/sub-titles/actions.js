export const requestAllSubTitles = () => ({
  type: 'REQUEST_ALL_SUB_TITLES',
});

export const receiveAllSubTitles = (subTitlesColumn) => ({
  type: 'RECEIVE_ALL_SUB_TITLES',
  subTitlesColumn,
});

export const sendError = (error) => ({
  type: 'SEND_ERROR',
  error,
});

export const updateSubTitles = (subTitlesColumn) => ({
  type: 'UPDATE_SUB_TITLES',
  subTitlesColumn,
});

// export const updateTitleOrder = (sourceId, sourceItems) => ({
//   type: 'UPDATE_TITLE_ORDER',
//   sourceId,
//   sourceItems,
// });
