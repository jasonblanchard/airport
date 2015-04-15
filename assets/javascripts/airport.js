$(document).ready(function() {

    var flights = [
    {
      id: 123,
      booked: false,
      destination: 'PHL'
    },
    {
      id: 456,
      booked: true,
      destination: 'JFK'
    },
    {
      id: 789,
      booked: false,
      destination: 'LAX'
    }
  ];


  for(x=0; x < flights.length; x++) {
    var bookedStatus;

    if (flights[x].booked === true) {
      var bookedStatus = "IS BOOKED";
      var flightInfo = "Flight " + flights[x].id + " to " + flights[x].destination + " " + bookedStatus;
    $('.flights').append("<div id=flight-" + flights[x].id + ">" + flightInfo + "</div>");
    } else {
      var bookedStatus = "IS NOT BOOKED";
      var flightInfo = "Flight " + flights[x].id + " to " + flights[x].destination + " " + bookedStatus;
    $('.flights').append("<div id=flight-" + flights[x].id + ">" + flightInfo + "<button data-flight-number='" + flights[x].id + "' class='book-flight'>Book</button></div>");
    }    
  }

  $('.book-flight').click(function(e){
    // `e` is an "event object." The actual element you clicked on is `e.target`
    console.log($(e.target).data('flight-number'));
  })

});













