import {Trucks} from './data';

const events = Trucks.map((data, id)=>{
  return {
    title: data.name,
    start: data.time,
    end: data.time
  }
});

export { events };
