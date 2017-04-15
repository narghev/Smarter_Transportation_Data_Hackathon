import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import uuid from 'uuid/v4';
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
    console.log(this.props.myTrucks)
    const RenderMyTrucks = () => {
      return (
        <Menu
          style={{width: "20%"}}
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
        </Menu>
      );
    };
    return (
      <div>
        <RenderMyTrucks />
        <TextField
          style={{postition: "fixed", bottom: "0", width: "15%"}}
          floatingLabelText="Add New Truck"
          name="New Truck"
          value={this.state.newTruckName}
          onChange={(e) => this.setState({newTruckName: e.target.value})}
        />
        <FlatButton
          label="save"
          style={{width: "5%"}}
          onTouchTap={() => {
            this.props.myTrucks.push({
              id: uuid(),
              name: this.state.newTruckName,
              mass: '100 kg',
              time: new Date(),
              positionLat: 43.6327519,
              positionLang: 44.795402,
            });
            this.setState({newTruckName: ""});
        }}
        />
      </div>
    );
  };
};
