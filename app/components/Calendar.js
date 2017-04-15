import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { events } from '../../events';

console.log(events)

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

export default
class Calendar extends React.Component{

  render(){
    return(
      <div style={{height: '93vh'}}>
        <BigCalendar
          events = { events }
          defaultView='day'
          onSelectEvent={event => alert(event.title)}
          toolbar={true}
        />
      </div>
    )
  }
}
