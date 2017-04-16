const matrixApiKey = 'AIzaSyAGbZZ20hZXPBYMKrqIHff44nrzBoo0aR0';

const httpGet = (theUrl) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

export const calcDistance = (origin, destination) => {
  let result = httpGet('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+
    origin.lat+
    ','+
    origin.long+'&destinations='+
    destination.lat+'%'+
    destination.long+
    '&key='+
    matrixApiKey);
    return JSON.parse(result).rows[0].elements[0].duration.value;
}
