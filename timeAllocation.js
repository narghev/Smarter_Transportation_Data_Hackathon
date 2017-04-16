const timeAllocation = (fullSchedule, newTruck, ref) => {
  const {id, name, mass, positionLat, positionLang, time} = newTruck;
  const origin = new google.maps.LatLng(positionLat, positionLang);
  const destination = new google.maps.LatLng(41.200516, 44.2210435);
  const service = new google.maps.DistanceMatrixService();

  const response_data = (responseDis, status) => {
    if (status !== google.maps.DistanceMatrixStatus.OK || status != "OK"){
      console.log('Error:', status);
    } else {
      newTruck.time = new Date(new Date().getTime() + responseDis.rows[0].elements[0].duration.value*1000);
      ref.props.myTrucks.push(newTruck);
      ref.setState({
        dialogOpen: false,
        newTruckName: "",
        newTruckMass: "",
        newTruckLat: null,
        newTruckLng: null,
        time: new Date()
      });
    }
  };

  service.getDistanceMatrix(
  {
    origins: [origin],
    destinations: [destination],
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC,
    durationInTraffic: true,
    avoidHighways: false,
    avoidTolls: false
  }, response_data);

  return newTruck.time;
};

export default timeAllocation;
