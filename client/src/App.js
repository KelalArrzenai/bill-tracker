import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/user";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import UserContext from './utils/Context';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#4B7631',
          },
          secondary: {
            main: '#4db8ff',
            contrastText: '#ffcc00',
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + "/signup"} component={Signup} />
            <Route path={process.env.PUBLIC_URL + "/:id"} component={User} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
