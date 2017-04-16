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
    name: "Fifth Truck",
    mass: '200 kg',
    time: new Date(2017, 3, 16, 17, 30),
    positionLat: 40.14704895019531,
    positionLang: 44.48865509033203
  },
  {
    id: uuid(),
    name: "Truck0",
    time: new Date(2017, 4, 10, Math.floor(Math.random()*24), 30),
    positionLang: 44.56507110595703,
    positionLat: 40.231910705566406
  },
  {
    id: uuid(),
    name: "Truck1",
    time: new Date(2017, 2, 11,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.482421875,
    positionLat: 40.15483093261719
  },
  {
    id: uuid(),
    name: "Truck2",
    time: new Date(2017, 3, 12,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.56315994262695,
    positionLat: 40.199981689453125
  },
  {
    id: uuid(),
    name: "Truck3",
    time: new Date(2017, 4, 13,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.50530242919922,
    positionLat: 40.20198440551758
  },
  {
    id: uuid(),
    name: "Truck4",
    time: new Date(2017, 2, 14,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.512718200683594,
    positionLat: 40.18954086303711
  },
  {
    id: uuid(),
    name: "Truck5",
    time: new Date(2017, 3, 15,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 43.8326416015625,
    positionLat: 40.82743835449219
  },
  {
    id: uuid(),
    name: "Truck6",
    time: new Date(2017, 4, 16,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.52598190307617,
    positionLat: 40.130950927734375
  },
  {
    id: uuid(),
    name: "Truck7",
    time: new Date(2017, 2, 17,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.5820426940918,
    positionLat: 40.213531494140625
  },
  {
    id: uuid(),
    name: "Truck8",
    time: new Date(2017, 3, 18,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.55451583862305,
    positionLat: 40.2181510925293
  },
  /*
  {
    id: uuid(),
    name: "Truck9",
    time: new Date(2017, 4, 19,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.51103973388672,
    positionLat: 40.18541717529297
  },
  {
    id: uuid(),
    name: "Truck10",
    time: new Date(2017, 2, 20,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.5006103515625,
    positionLat: 40.197181701660156
  },
  {
    id: uuid(),
    name: "Truck11",
    time: new Date(2017, 4, 21,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.50625991821289,
    positionLat: 40.198551177978516,

  },
  {
    id: uuid(),
    name: "Truck12",
    time: new Date(2017, 2, 22,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.47761154174805,
    positionLat: 40.8120231628418
  },
  {
    id: uuid(),
    name: "Truck13",
    time: new Date(2017, 3, 23,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.51374816894531,
    positionLat: 40.16279983520508
  },
  {
    id: uuid(),
    name: "Truck14",
    time: new Date(2017, 4, 24,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.551979064941406,
    positionLat: 40.23149490356445
  },
  {
    id: uuid(),
    name: "Truck15",
    time: new Date(2017, 2, 16,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.44793701171875,
    positionLat: 40.162559509277344
  },
  {
    id: uuid(),
    name: "Truck16",
    time: new Date(2017, 3, 25,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.44486999511719,
    positionLat: 40.16672897338867
  },
  {
    id: uuid(),
    name: "Truck17",
    time: new Date(2017, 4, 5,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.50162887573242,
    positionLat: 40.20109939575195
  },
  {
    id: uuid(),
    name: "Truck18",
    time: new Date(2017, 3, 2,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.49365997314453,
    positionLat: 40.225250244140625
    },
  {
    id: uuid(),
    name: "Truck19",
    time: new Date(2017, 2, 6,Math.floor(Math.random()*24),Math.floor(Math.random()*60)),
    positionLang: 44.492008209228516,
    positionLat: 40.14561080932617
  }*/
];

export {Trucks};
