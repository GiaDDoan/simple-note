import React from 'react';
import styled from 'styled-components';
import { color_theme } from '../../utils/color-theme';

function SubSidebar() {
  return (
    <Wrapper className="sub_sidebar_wrapper">
      <div>SubSidebar</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color_theme.default.sub_sidebar.bg};
  color: ${color_theme.default.sub_sidebar.font};
`;

export default SubSidebar;
