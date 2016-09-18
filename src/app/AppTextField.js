import React from 'react';
import TextField from 'material-ui/TextField';

const AppTextField = React.createClass({
  render: function() {
    return (
      <div className="TextField">
        <TextField
          hintText={this.props.hintText}
          floatingLabelText={this.props.floatingLabelText}
        />
      </div>
    );
  }
});

export default AppTextField;
