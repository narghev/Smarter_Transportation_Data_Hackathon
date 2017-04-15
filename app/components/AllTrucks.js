import _ from 'lodash';
import {observer} from 'mobx-react';

import {
  default as React,
  Component,
} from 'react';


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';


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
      markers: [
        {
        position: {
          lat: 40.184501,
          lng: 44.514995,
        },
          key: `Kentron`,
          defaultAnimation: 1,
        }
      ],
    };
  };

  handleMapLoad = (map) => {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  };


  handleMapClick = (event) => {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(),
      },
    ];
    this.setState({markers: nextMarkers});
  };

  handleMarkerRightClick = (targetMarker) => {
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({markers: nextMarkers});
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
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    );
  };
};
