import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {observer} from 'mobx-react';

export default
@observer
class MySchedule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  render() {
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
      </div>
    );
  };
};
