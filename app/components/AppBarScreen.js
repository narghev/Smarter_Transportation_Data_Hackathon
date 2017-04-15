import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

export default
@observer
class AppBarScreen extends React.PureComponent {
  @observable allTrucks = [];
  @observable selected = "Calendar";
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
          title={this.selected}
          iconElementLeft={<SelectorIcon />}
          onLeftIconButtonTouchTap={() => {
            this.setState({drawerIsOpen: !this.state.drawerIsOpen})
          }}
        />
      </div>
    );
  };
};
