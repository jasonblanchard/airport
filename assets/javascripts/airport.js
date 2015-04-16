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
      var flightInfo = "Flight " + flights[x].id + " to " + flights[x].destination + " <span class='status'>" + bookedStatus + "</span>";
    $('.flights').append("<div id=flight-" + flights[x].id + ">" + flightInfo + "</div>");
    } else {
      var bookedStatus = "is not booked";
      var flightInfo = "Flight " + flights[x].id + " to " + flights[x].destination + " <span class='status'>" + bookedStatus + '</span>';
    $('.flights').append("<div id=flight-" + flights[x].id + ">" + flightInfo + "<button data-flight-number='" + flights[x].id + "' class='book-flight'>Book</button></div>");
    }    
  }

  $('.book-flight').click(function(e){
    var flightNum = $(e.target).data('flight-number');
    var flight;

    for(i=0; i < flights.length; i++) {
      if (flights[i].id == flightNum) {
        flight = flights[i]
      }
    }

    flight.booked = true;
    $('#flight-' + flight.id).find('.status').text('IS BOOKED');
    $('#flight-' + flight.id).find('.book-flight').hide();
  })

});













