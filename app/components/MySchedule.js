import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {observer} from 'mobx-react';

export default
@observer
class MySchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTruckName: "",
    };
  };
  render() {
    const RenderMyTrucks = () => {
      return (
        <Menu
          style={{width: "15%"}}
        >
          {this.props.myTrucks.map(truck => {
            return (
              <div key={truck.id}>
                <MenuItem
                  primaryText={truck.name}
                />
                <Divider />
              </div>
            );
          })}
          <TextField
            style={{postition: "fixed", bottom: "0"}}
            floatingLabelText="Add New Truck"
            name="New Truck"
            value={this.state.newTruckName}
          />
        </Menu>
      );
    };
    return (
      <div>
        <RenderMyTrucks />
      </div>
    );
  };
};
