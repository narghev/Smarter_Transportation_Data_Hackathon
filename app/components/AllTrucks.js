import _ from 'lodash';
import {observer} from 'mobx-react';
import {default as React, Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: 40.184501, lng: 44.514995 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default
@observer
class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      markers: [],
    };
  };

  componentWillMount() {
    const markers = this.props.allTrucks.map(truck => {
      return {
        position: {lat: truck.positionLat, lng: truck.positionLang},
        key: truck.id,
        defaultAnimation: 1
      }
    });
    this.setState({markers});
  };

  render() {
    return (
      <div style={{height: `100vh`}}>
        <Map
          containerElement={
            <div style={{ height: `100vh` }} />
          }
          mapElement={
            <div style={{ height: `100vh` }} />
          }
          markers={this.state.markers}
        />
      </div>
    );
  };
};
