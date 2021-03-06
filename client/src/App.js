import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/Landing";
import { UserProvider } from './utils/Context';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Notifications } from 'react-push-notification';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const font =  "'Kanit', sans-serif";

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: font,
        },
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#4B7631',
          },
          secondary: {
            main: '#4db8ff',
          },
          danger: {
            main: '#c11111 !important',
          }
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Notifications />
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Signup} />
            <Route exact path={process.env.PUBLIC_URL + "/signup"} component={Signup} />
            <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login} />
            <Route path={process.env.PUBLIC_URL + "/:id"} component={User} />
            <Route path={process.env.PUBLIC_URL + "/landing"} component={User} />

          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
