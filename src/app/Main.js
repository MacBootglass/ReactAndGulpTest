/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppTextField from './AppTextField';

const Main = () => (
  <MuiThemeProvider>
    <Paper id="MyComponent" zDepth={3}>
      <section className="PartLeft">
        <AppTextField hintText="Nom" floatingLabelText="Veuillez saisir votre nom"/>
        <AppTextField hintText="Prénom" floatingLabelText="Veuillez saisir votre prénom"/>
      </section>
      <section className="PartRight">
        <AppTextField hintText="Nom" floatingLabelText="Veuillez saisir votre nom"/>
        <AppTextField hintText="Prénom" floatingLabelText="Veuillez saisir votre prénom"/>
      </section>
    </Paper>
  </MuiThemeProvider>
);

export default Main;
