import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MySchedule from './MySchedule';
import Calendar from './Calendar';
import AllTrucks from './AllTrucks';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Trucks} from '../../data';

export default
@observer
class AppBarScreen extends React.PureComponent {
  @observable myTrucks = observable(Trucks)
  @observable selected = "My Schedule";
  constructor() {
    super();
    this.state = {
      drawerIsOpen: false,
    }
  }
  render() {
    const SelectorIcon = () => {
      return (
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem
            primaryText="Calendar"
            onTouchTap={() => this.selected="Calendar"}
          />
          <MenuItem
            primaryText="My Schedule"
            onTouchTap={() => this.selected="My Schedule"}
          />
          <MenuItem
            primaryText="All Trucks"
            onTouchTap={() => this.selected="All Trucks"}
          />
        </IconMenu>
      )
    };
    return (
      <div>
        <AppBar
          style={{display: "flex"}}
          title={this.selected}
          iconElementLeft={<SelectorIcon />}
          onLeftIconButtonTouchTap={() => {
            this.setState({drawerIsOpen: !this.state.drawerIsOpen})
          }}
        />
        {
          (() => {
            switch(this.selected){
              case "Calendar":
                return (
                  <Calendar events={this.myTrucks} />
                );
              case "My Schedule":
                return (
                  <div>
                    <MySchedule
                      myTrucks={this.myTrucks}
                    />
                    <AppBar
                    title="Random Footer" 
                    showMenuIconButton={false}
                    style={{transition: 'backgroundColor 0.5s ease',
                            position: 'absolute', bottom: '0', width: '100%', 
                            height: '8%', backgroundColor: 'rgb(0, 188, 212)', opacity: '1.2',
                            textAlign: 'center', fontSize: '4px !important', borderTop: '2px solid rgb(0, 188, 212)'
                          }}
                    />
                  </div>
                );
              case "All Trucks":
                return <AllTrucks allTrucks={this.myTrucks}/>;
            }
          })()
        }
      </div>
    );
  };
};
