import React from 'react';
import styled from 'styled-components';

import { color_theme } from '../../utils/color-theme';
import DragAndDrop from '../drag-and-drop/DragAndDrop';
import { fetchAllTitles } from '../../api-helpers/index';
import uuid from 'uuid/v4';

function Sidebar() {
  const [status, setStatus] = React.useState('loading');
  const [sidebarColumn, setSidebarColumn] = React.useState({});

  React.useEffect(() => {
    const fetchingTitles = async () => {
      setStatus('loading');
      try {
        const fetch_response = await fetchAllTitles();
        const newDataFormat = {
          [uuid()]: {
            name: 'Title',
            items: fetch_response.titles,
          },
        };
        setSidebarColumn(newDataFormat);
        setStatus('idle');
      } catch (error) {
        setStatus('error');
        console.error('ERROR: ', error.message);
      }
    };
    fetchingTitles();
  }, []);

  if (status === 'idle') {
    // console.log('NEW FORMAT ', sidebarColumn);
    return (
      <Wrapper className="sidebar_wrapper">
        <DragAndDrop columnsArg={sidebarColumn} class_name={'title_'} />
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
