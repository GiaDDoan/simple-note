import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { color_theme } from '../../utils/color-theme';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

import {
  requestAllSubTitles,
  receiveAllSubTitles,
  sendError,
  updateSubTitles,
} from '../../store/reducers/sub-titles/actions';
import DragAndDrop from '../drag-and-drop/DragAndDrop';

//Contexts
import { DragAndDropContext } from '../../contexts/DragAndDropContext';

function SubSidebar() {
  const { title_name } = useParams();
  const dispatch = useDispatch();
  const subTitlesState = useSelector((state) => state.subTitles);

  //Contexts
  const {
    actions: { fetchDocuments },
  } = useContext(DragAndDropContext);

  useEffect(() => {
    const fetchingSubTitles = async () => {
      dispatch(requestAllSubTitles());

      try {
        const fetch_response = await fetchDocuments('sub-titles');
        const newDataFormat = {
          [uuid()]: {
            collection: fetch_response.collection,
            placeholder_name: fetch_response.placeholder_name,
            items: fetch_response.sub_titles,
          },
        };
        dispatch(receiveAllSubTitles(newDataFormat));
      } catch (error) {
        console.log('Error in SubSidebar ', error.message);
        dispatch(sendError(error.message));
      }
    };
    fetchingSubTitles();
  }, [title_name]);

  if (subTitlesState.status === 'loading') {
    return <div>Loading</div>;
  }
  if (subTitlesState.status === 'idle') {
    return (
      <Wrapper className="sub_sidebar_wrapper">
        <div>SubSidebar</div>
        <DragAndDrop
          columnsArg={subTitlesState.columnsFromBackend}
          dispatch={dispatch}
          request_reducer={requestAllSubTitles}
          receive_reducer={receiveAllSubTitles}
          update_reducer={updateSubTitles}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sub_sidebar.bg};
  color: ${color_theme.default.sub_sidebar.font};
`;

export default SubSidebar;
