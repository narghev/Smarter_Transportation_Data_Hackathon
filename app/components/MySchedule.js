import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import uuid from 'uuid/v4';
import { find } from 'lodash';
import {observer} from 'mobx-react';

export default
@observer
class MySchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTruckName: "",
      selectedTruckId: this.props.myTrucks[0].id,
    };
  };
  render() {
    const selectedTruck = _.find(this.props.myTrucks, {id: this.state.selectedTruckId});
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
                  onClick={() => {this.setState({selectedTruckId: truck.id})}}
                />
              </div>
            );
          })}
        </Menu>
      );
    };
    const TruckInfo = () => {
      return(
        <div style={{width: "85%", border: "2px solid rgb(0, 188, 212)"}}>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={{fontSize: "2rem", textAlign: "center"}}>ID</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize: "2rem", textAlign: "center"}}>1234</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>Name</TableRowColumn>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>First Truck</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>Mass</TableRowColumn>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>500 kg</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>Time</TableRowColumn>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>12 June 2016</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>Latitude</TableRowColumn>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>42.895401</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>Longtitude</TableRowColumn>
              <TableRowColumn style={{fontSize: "1.5rem", textAlign: "center"}}>44.564783</TableRowColumn>
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
          onChange={(e) => this.setState({newTruckName: e.target.value})}
        />
        <FlatButton
          label="save"
          style={{width: "5%", position: "fixed", bottom: "0", left: "15%"}}
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
        <TruckInfo />
      </div>
    );
  };
};
