import React from 'react';
import LoginScreen from './loginScreen';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarScreen from './AppBarScreen';
injectTapEventPlugin();

export default
class App extends React.PureComponent{
  constructor(){
    super();
    this.state = {
      loggedIn: true
    }
  }
  render(){
    // if (!this.state.loggedIn){
    //   return(
    //     <LoginScreen
    //       login = {()=>{
    //         this.setState({ loggedIn: true });
    //       }}
    //     />
    //   );
    // }
    return(
      <div>
        <AppBarScreen />
      </div>
    );
  };
};
