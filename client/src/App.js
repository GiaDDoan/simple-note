import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
//Components import
import GlobalStyles from './GlobalStyles';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/homepage/Homepage';
import SubSidebar from './components/sub-sidebar/SubSidebar';
import Notes from './components/notes/Notes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
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

export default App;
