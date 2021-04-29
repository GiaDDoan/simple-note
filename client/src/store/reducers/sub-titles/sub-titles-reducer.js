import uuid from 'uuid/v4';
const initialState = { status: 'loading', columnsFromBackend: {} };

/*TODO add case names*/
export default function titlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_SUB_TITLES': {
      return {
        ...state,
        status: 'loading',
      };
    }
    case 'RECEIVE_ALL_SUB_TITLES': {
      // console.log('FROM REDUCER ', action.titlesColumn);
      const { fetch_response, titlesState, title_name_param } = action;
      let title_id;
      let title_name_;

      if (titlesState.status === 'idle') {
        const getValues = Object.values(titlesState.columnsFromBackend);
        const itemsArray = getValues[0].items;

        const findItem = itemsArray.find((item) => {
          return item.main_name.toLowerCase() === title_name_param;
        });
        if (findItem) {
          // console.log(findItem);
          title_id = findItem._id;
          title_name_ = findItem.main_name.toLowerCase();
        }
      }

      const filteredResponse = fetch_response.sub_titles.filter((item) => {
        return item.title_name === title_name_param;
      });

      return {
        ...state,
        columnsFromBackend: {
          ...state.columnsFromBackend,
          [title_name_]: {
            [title_id]: {
              collection: fetch_response.collection,
              placeholder_name: fetch_response.placeholder_name,
              items: filteredResponse,
            },
          },
        },
        status: 'idle',
      };
      //return { ...state };
    }

    case 'SEND_ERROR': {
      return {
        status: 'error',
      };
    }

    case 'UPDATE_SUB_TITLES': {
      const { subTitlesColumn } = action;
      const copyState = { ...state };
      delete copyState.columnsFromBackend;

      const updatedState = {
        ...copyState,
        columnsFromBackend: subTitlesColumn,
      };

      console.log('NEW STATE ', updatedState);

      return {
        ...updatedState,
      };
    }

    default: {
      return state;
    }
  }
}
