import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import TimePicker from 'material-ui/TimePicker';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import uuid from 'uuid/v4';
import moment from 'moment';
import {find} from 'lodash';
import {observer} from 'mobx-react';

export default
@observer
class MySchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTruckName: "",
      dialogOpen: false,
      selectedTruckId: this.props.myTrucks[0].id,
      newTruckMass: "",
      newTruckLat: 40.19685104370117,
      newTruckLng: 44.43186019897461,
      time: null
    };
  };
  render() {
    const selectedTruck = _.find(this.props.myTrucks, {id: this.state.selectedTruckId});
    const RenderMyTrucks = () => {
      return (
        <Menu
          style={{width: "20%", borderRight: '1px solid #DEDEDE'}}
        >
          {this.props.myTrucks.map(truck => {
            return (
              <div key={truck.id}>
                <MenuItem
                  primaryText={truck.name}
                  onClick={() => {this.setState({selectedTruckId: truck.id})}}
                  style={{ borderBottom: '1px solid #DEDEDE'}}
                />
              </div>
            );
          })}
        </Menu>
      );
    };
    const Actions = [
      <FlatButton
        label="cancel"
        primary={true}
        onTouchTap={() => this.setState({dialogOpen: false})}
      />,
      <FlatButton
        label="save"
        primary={true}
        onTouchTap={() => {this.props.myTrucks.push({
          id: uuid(),
          name: this.state.newTruckName,
          mass: this.state.newTruckMass,
          positionLat: this.state.newTruckLat,
          positionLang: this.state.newTruckLng,
          time: this.state.time
          });
          this.setState({dialogOpen: false, newTruckName: ""});
        }}
      />
    ];
    const TruckInfo = () => {
      return(
        <div style={{width: "85%"}}>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={{textAlign: "center"}}>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn style={{textAlign: "center"}}>
                {selectedTruck.id}
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn style={{textAlign: "center"}}>
                Name
              </TableRowColumn>
              <TableRowColumn style={{textAlign: "center"}}>
                {selectedTruck.name}
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{textAlign: "center"}}>
                Mass
              </TableRowColumn>
              <TableRowColumn style={{textAlign: "center"}}>
                {selectedTruck.mass}
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{textAlign: "center"}}>
                Time
              </TableRowColumn>
              <TableRowColumn style={{textAlign: "center"}}>
                {moment(selectedTruck.time).format("h:mm a, Do MMMM")}
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{textAlign: "center"}}>
                Latitude
              </TableRowColumn>
              <TableRowColumn style={{textAlign: "center"}}>
                {selectedTruck.positionLat}
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{textAlign: "center"}}>
                Longtitude
              </TableRowColumn>
              <TableRowColumn style={{textAlign: "center"}}>
                {selectedTruck.positionLang}
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        </div>
      );
    };
    return (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <RenderMyTrucks />
        <TextField
          style={{position: "fixed", bottom: "0", width: "15%"}}
          floatingLabelText="Add New Truck"
          name="New Truck"
          value={this.state.newTruckName}
          onChange={e => this.setState({newTruckName: e.target.value})}
        />
        <FlatButton
          label="add"
          style={{width: "5%", position: "fixed", bottom: "0", left: "15%"}}
          onTouchTap={() => {this.setState({dialogOpen: true});}}
        />
        <TruckInfo />
        <Dialog
          open={this.state.dialogOpen}
          actions={Actions}
        >
          <TextField
            name="New Dialog Truck"
            floatingLabelText="Name"
            fullWidth={true}
            value={this.state.newTruckName}
            onChange={e => this.setState({newTruckName: e.target.value})}
          />
          <TextField
            name="New Truck Mass"
            floatingLabelText="Mass"
            fullWidth={true}
            value={this.state.newTruckMass}
            onChange={e => this.setState({newTruckMass: e.target.value})}
          />
          <TimePicker
            name="Pick Time"
            hintText="Pick Comfortable Time"
            value={this.state.time}
            onChange={(e, time) => this.setState({time})}
          />
        </Dialog>
      </div>
    );
  };
};
