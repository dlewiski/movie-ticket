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

Ticket.prototype.showTicket = function() {

  var ticketHTML =  '<div class="well">' +
      '<h3>Movie Ticket</h3>' +
      '<img class="ticketImage" src="' + this.ticketImage() + '" alt="bad moms poster">' +
      '<ul>' +
        '<li id="ticketTime">' + this.time + '</li>' +
        '<li id="ticketPrice">' + '$' + this.price() + '</li>' +
      '</ul>';
  return ticketHTML;

}

Ticket.prototype.ticketImage = function() {
  if (this.movie === "The Departed")
    var image = "img/departed.jpg";
  if (this.movie === "Bad Moms" )
    var image = "img/bad-moms.jpg";
  if (this.movie === "Pitch Perfect")
    var image = "img/pitch-perfect.jpg";
  if (this.movie === "Lady Bird" )
    var image = "img/lady-bird.png";
  return image;
}




//user interface logic
$(document).ready(function() {

  $("#new-ticket").submit(function(event) {
    event.preventDefault();
    var ticket = ticketMaker();
    alert (ticket.price());
    $(".ticket-display").append(ticket.showTicket());


    // $("#ticketTime").text(ticket.time);
    // $("#ticketPrice").text("$" + ticket.price());

  });
});
