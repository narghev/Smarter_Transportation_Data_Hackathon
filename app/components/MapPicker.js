import {observer} from 'mobx-react';
import {default as React, Component} from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withGoogleMap(props => {
  console.log(props.marker)
  return (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 40.184501, lng: 44.514995 }}
    onClick={props.onMapClick}
  >
    <Marker
      position={props.marker}
      defaultAnimation={1}
      key={props.marker}
    />
  </GoogleMap>
  )
});

export default
class MapPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: props.marker
    };
  };
  componentWillReceiveProps(nextProps) {
    this.setState({marker: nextProps.marker});
  };
  handleMarkerChange = (e) => {
    const marker = e.latLng;
    this.props.handleLatLng(marker);
  };

  render() {
    return (
      <div style={{height: "100vh"}}>
        <Map
          onMapClick={this.handleMarkerChange}
          containerElement={
            <div style={{height: "100vh"}} />
          }
          mapElement={
            <div style={{ height: "100vh"}} />
          }
          marker={this.state.marker}
        />
      </div>
    );
  };
};
