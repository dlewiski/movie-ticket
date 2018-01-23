//business logic
function Ticket(movie, time, age, status) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.status = status;
}

function ticketMaker() {
  var movie = $("#movie").val();
  var time = $("#time").val();
  var age = $("#age").val();
  var status = $("#status").val();
  var newTicket = new Ticket(movie, time, age, status)

  return newTicket;
}

Ticket.prototype.price = function(){
  var cost = 0;
  if (this.movie === "Lady Bird") {
    cost = 15;
  } else {
    cost = 10;
  }
  if (this.time === "11:45 AM" || this.time === "2:30 PM") {
    cost = cost - 2;
  } else if(this.time === "6:30 PM" || this.time === "7:00 PM"){
    cost = cost + 1;
  }
  if (this.age === "56-80" ) {
    cost = cost -2;
  }else if(this.age === "81+"){
    return 0;
  }
  if (this.status === "None") {
    return cost;
  }
  return cost - 1;
}

function showTicket() {
  $(".ticket-display").append(
    '<div class="well">' +
      '<h3>Movie Ticket</h3>' +
      '<img class="ticketImage" src="img/bad-moms.jpg" alt="bad moms poster">' +
      '<ul>' +
        '<li id="ticketTime">12:00 PM</li>' +
        '<li id="ticketPrice">$15</li>' +
      '</ul>');

}




//user interface logic
$(document).ready(function() {

  $("#new-ticket").submit(function(event) {

    event.preventDefault();
    var ticket = ticketMaker();
    alert (ticket.price());

    showTicket();
    $("#ticketTime").text(ticket.time);
    $("#ticketPrice").text("$" + ticket.price());

  });
});
