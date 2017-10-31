//business logic
var faf = { name: "Fast and The Furious" };
var tbs = { name: "The Big Short" };
var it = { name: "IT" };
var tr = { name: "Thor Ragnarok" };
var gs = { name: "GeoStorm" };
var tbs = { name: "The Big Sick" };

var matinee = {name: "Matinee Screening"}
var eve = {name: "Late Screening"}

var times = ["1:30", "3:00", "5:30", "7:30"];
var movieTypes = ["regular", "newRelease"];
var baseTicket = some amount

// new Ticket(faf, 3:00, senior, newRelease)
function Ticket(movie, times, age, movieType) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.movieType = movieType;
}

$(document).ready(function(){
  event.preventDefault();
  $("#ticket-input").submit(function(){
    debugger;
    
  });
});
