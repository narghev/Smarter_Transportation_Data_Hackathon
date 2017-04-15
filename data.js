import uuid from 'uuid/v4';

const Trucks = [
  {
    id: uuid(),
    name: 'First Truck',
    mass: '100 kg',
    time: new Date(2017, 3, 16, 17, 30),
    positionLat: 40.16685104370117,
    positionLang: 44.44186019897461,
  },
  {
    id: uuid(),
    name: "Second Truck",
    mass: '200 kg',
    time: new Date(2017, 3, 16, 8, 30),
    positionLat: 40.20738983154297,
    positionLang: 44.526641845703125
  },
  {
    id: uuid(),
    name: "Third Truck",
    mass: '250 kg',
    time: new Date(2017, 3, 19, 16, 30),
    positionLat: 40.20637130737305,
    positionLang: 44.470829010009766
  },
  {
    id: uuid(),
    name: "Forth Truck",
    mass: '300 kg',
    time: new Date(2017, 3, 15, 10, 30),
    positionLat: 40.167945861816406,
    positionLang: 44.439117431640625
  },
  {
    id: uuid(),
    name: "Fivth Truck",
    mass: '200 kg',
    time: new Date(2017, 3, 16, 17, 30),
    positionLat: 40.14704895019531,
    positionLang: 44.48865509033203
  }
];

export {Trucks};
