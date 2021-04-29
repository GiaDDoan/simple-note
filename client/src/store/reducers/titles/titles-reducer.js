import { v4 as uuidv4 } from 'uuid';

const initialState = { status: 'loading' };

/*TODO add case names*/
export default function titlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_TITLES': {
      return {
        ...state,
        status: 'loading',
      };
    }
    case 'RECEIVE_ALL_TITLES': {
      const { titlesColumn } = action;
      // console.log('FROM REDUCER ', action.titlesColumn);
      // console.log('REDUCER ', titlesColumn);

      return {
        ...state,
        // columnsFromBackend: action.titlesColumn,
        columnsFromBackend: {
          [uuidv4()]: {
            collection: titlesColumn.collection,
            placeholder_name: titlesColumn.placeholder_name,
            items: titlesColumn.titles,
          },
        },
        status: 'idle',
      };

      // return { ...state };
    }

    case 'UPDATE_TITLES': {
      const { titlesColumn } = action;
      const copyState = { ...state };
      delete copyState.columnsFromBackend;

      const updatedState = {
        ...copyState,
        columnsFromBackend: titlesColumn,
      };

      console.log('NEW STATE ', updatedState);

      return {
        ...updatedState,
      };
    }

    // case 'RECEIVE_ALL_TITLES_TEST': {
    //   let id;
    //   console.log('%cFROM REDUCER:', 'color: yellow;', action.objectFromGetReq);
    //   if (!id) {
    //     id = uuidv4();
    //   }

    //   return {
    //     ...state,
    //     columnsFromBackend: {
    //       [id]: {
    //         name: 'Title',
    //         items: action.objectFromGetReq,
    //       },
    //     },
    //     status: 'idle',
    //   };
    // }

    // case 'UPDATE_TITLE_ORDER': {
    //   return {
    //     ...state,
    //     titlesObject: {
    //       ...state.titlesObject,
    //       [action.sourceId]: {
    //         ...state.titlesObject[action.sourceId],
    //         items: action.sourceItems,
    //       },
    //     },
    //   };
    // }

    default: {
      return state;
    }
  }
}
