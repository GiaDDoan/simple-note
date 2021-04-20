import React from 'react';
import styled from 'styled-components';
import { color_theme } from '../../utils/color-theme';

function SubSidebar() {
  return (
    <Wrapper>
      <div>SubSidebar</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sub_sidebar.bg};
  width: 40%;
`;

export default SubSidebar;
