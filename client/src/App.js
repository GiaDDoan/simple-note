import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
//Components import
import GlobalStyles from './GlobalStyles';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/homepage/Homepage';
import SubSidebar from './components/sub-sidebar/SubSidebar';
import Notes from './components/notes/Notes';
import theme_background from './images/forest.jpg';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Background className="background_img" src={theme_background} />
      <Wrapper className="app_wrapper">
        <Sidebar />
        <Switch>
          {/* <Route exact path="/">
            <Homepage />
          </Route> */}

          <Route exact path="/">
            <SubSidebar />
            <Notes />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export default App;
