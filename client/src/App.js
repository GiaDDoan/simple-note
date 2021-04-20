import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

//Components import
import GlobalStyles from './GlobalStyles';
import Sidebar from './components/sidebar/Sidebar';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div``;

export default App;
