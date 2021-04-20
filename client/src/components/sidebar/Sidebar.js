import React from 'react';
import styled from 'styled-components';

import { color_theme } from '../../utils/color-theme';

function Sidebar() {
  return (
    <Wrapper>
      <div>SIDEBAR</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sidebar.bg};
  width: min(100px, 500px);
  color: white;
`;

export default Sidebar;
