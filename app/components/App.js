import React from 'react';
import LoginScreen from './loginScreen';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default
class App extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }
  }
  render(){
    if (!this.state.loggedIn){
      return(
        <LoginScreen
          login = {()=>{
            this.setState({ loggedIn: true });
          }}
        />
      );
    }
    return(
      <div>
        Hello world!!!
      </div>
    );
  };
};
