import uuid from 'uuid/v4';

const Trucks = [
  {
    id: uuid(),
    name: 'First Truck',
    mass: '100 kg',
    time: new Date(),
    positionLat: 44.6327519,
    positionLang: 42.795402,
  },
  {
    id: uuid(),
    name: "Second Truck",
    mass: '200 kg',
    time: new Date(),
    positionLat: 42.895401,
    positionLang: 44.564783
  },
  {
    id: uuid(),
    name: "Third Truck",
    mass: '250 kg',
    time: new Date(),
    positionLat: 43.111112,
    positionLang: 42.999292
  },
  {
    id: uuid(),
    name: "Forth Truck",
    mass: '300 kg',
    time: new Date(),
    positionLat: 44.123456,
    positionLang: 42.77777
  },
  {
    id: uuid(),
    name: "Fivth Truck",
    mass: '200 kg',
    time: new Date(),
    positionLat: 43.963201,
    positionLang: 44.100001
  }
];

export {Trucks};
