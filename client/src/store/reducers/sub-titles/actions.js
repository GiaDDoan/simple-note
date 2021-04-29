export const requestAllSubTitles = () => ({
  type: 'REQUEST_ALL_SUB_TITLES',
});

export const receiveAllSubTitles = (
  fetch_response,
  titlesState,
  title_name_param
) => ({
  type: 'RECEIVE_ALL_SUB_TITLES',
  fetch_response,
  titlesState,
  title_name_param,
});

export const sendError = (error) => ({
  type: 'SEND_ERROR',
  error,
});

export const updateSubTitles = (
  fetch_response,
  titlesState,
  title_name_param
) => ({
  type: 'UPDATE_SUB_TITLES',
  fetch_response,
  titlesState,
  title_name_param,
});

// export const updateTitleOrder = (sourceId, sourceItems) => ({
//   type: 'UPDATE_TITLE_ORDER',
//   sourceId,
//   sourceItems,
// });
