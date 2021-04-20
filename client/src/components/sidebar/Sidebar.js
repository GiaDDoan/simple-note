import React from 'react';
import styled from 'styled-components';

import { color_theme } from '../../utils/color-theme';

function Sidebar() {
  return (
    <Wrapper className="sidebar_wrapper">
      <div>SIDEBAR</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sidebar.bg};
  color: white;
`;

export default Sidebar;
