import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

export default
class Calendar extends React.Component{

  eventStyleGetter = () => {
    const style = {
        backgroundColor: '#00BCD4',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
  }

  render(){
    const events = this.props.events.map((data, id)=>{
      if (data != undefined){
        return {
          title: data.name,
          start: data.time,
          end: data.time
        }
      }
    });
    return(
      <div style={{height: '93vh'}}>
        <BigCalendar
          events = { events }
          defaultView='day'
          onSelectEvent={event => alert(event.title)}
          toolbar={true}
          eventPropGetter={this.eventStyleGetter}
        />
      </div>
    )
  }
}
