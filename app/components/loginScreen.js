import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default
class LoginScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      login: '',
      pass: ''
    }
  }

  login = () => {
    if (this.state.login === 'admin' && this.state.pass === 'admin')
      this.props.login();
  }

  render(){
    return(
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <TextField
            hintText="Username"
            floatingLabelText="Username"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            onChange={(_, val)=>{
              this.setState({ login: val });
            }}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            style={{
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            onChange={(_, val)=>{
              this.setState({ pass: val });
            }}
          />
          <RaisedButton
            label="Login"
            onClick = { this.login }
          />
        </div>
      </div>
    )
  }
}
