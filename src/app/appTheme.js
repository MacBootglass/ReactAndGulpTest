import React from 'react';
import {red500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const appTheme = getMuiTheme({
  palette: {
    textColor: red500,
  },
  appBar: {
    height: 50,
  },
});

export appTheme;
