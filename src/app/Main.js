import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppNavbar from './AppNavbar';




class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppNavbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
