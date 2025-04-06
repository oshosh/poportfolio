import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';
import MainPage from './pages/Main/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/poportfolio' component={MainPage} />
            <Redirect from='/' to='/poportfolio' />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
