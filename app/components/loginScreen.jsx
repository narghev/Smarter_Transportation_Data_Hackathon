import React from 'react';
import TextField from 'material-ui/TextField';

export default
class LoginScreen extends React.Component {
  render(){
    return(
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
      </div>
    )
  }
}
