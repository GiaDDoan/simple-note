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
      const { subTitlesColumn } = action;

      console.log('receive');
      console.log('SUUUB', subTitlesColumn);

      if (subTitlesColumn) {
        let id_;
        let column_;
        Object.entries(subTitlesColumn).map(([id, column]) => {
          console.log('ID ', id, column);
        });

        return {
          ...state,
          columnsFromBackend: {
            ...state.columnsFromBackend,
            subTitlesColumn,
          },
          // columnsFromBackend: {
          //   ...state.columnsFromBackend,
          //   [id_]: {
          //     column_,
          //   },
          // },
          status: 'idle',
        };
      }
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
