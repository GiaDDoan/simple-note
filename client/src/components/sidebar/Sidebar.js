import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

import { color_theme } from '../../utils/color-theme';
import DragAndDrop from '../drag-and-drop/DragAndDrop';
import {
  requestAllTitles,
  receiveAllTitles,
  updateTitles,
} from '../../store/reducers/titles/actions';

import { DragAndDropContext } from '../../contexts/DragAndDropContext';

function Sidebar() {
  const [status, setStatus] = React.useState('loading');
  const [sidebarColumn, setSidebarColumn] = React.useState({});
  const dispatch = useDispatch();
  const titlesState = useSelector((state) => state.titles);
  const {
    actions: { fetchDocuments },
  } = useContext(DragAndDropContext);

  React.useEffect(() => {
    const fetchingTitles = async () => {
      setStatus('loading');
      dispatch(requestAllTitles());
      try {
        const fetch_response = await fetchDocuments('titles');

        dispatch(receiveAllTitles(fetch_response));
        setStatus('idle');
      } catch (error) {
        setStatus('error');
        console.error('ERROR: ', error.message);
      }
    };
    fetchingTitles();
  }, []);

  if (status === 'idle') {
    // console.log('%cTITLE STATE ', 'color:yellow;', titlesState);
    // console.log('SENT ', titlesState.columnsFromBackend);
    return (
      <Wrapper className="sidebar_wrapper">
        <DragAndDrop
          columnsArg={titlesState.columnsFromBackend}
          dispatch={dispatch}
          // fetch_api={fetchAllTitles}
          request_reducer={requestAllTitles}
          receive_reducer={receiveAllTitles}
          update_reducer={updateTitles}
        />
      </Wrapper>
    );
  }
  return <div>TITLE</div>;
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sidebar.bg};
  color: white;
  /* background-color: black; */
  /* opacity: 0.5; */
`;

export default Sidebar;
