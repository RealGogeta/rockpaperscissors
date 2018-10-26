var userChoice;
var computerChoice;
var winner;
var randomNumber = 0;

$("#shoot").click(function(){
  var user = $("input").val();
  $("#userChoice").text(user);
  
  var computerChoice = Math.random();
 
  
  if(computerChoice > 0.0 && computerChoice < 0.30){
   $("#computerChoice").text("rock");
   computerChoice = "rock";
}
else if(computerChoice > 0.30 && computerChoice < 0.60){
   $("#computerChoice").text("paper");
   computerChoice = "paper";
}
else{
   $("#computerChoice").text("scissors");
   computerChoice = "scissors";
}
if(userChoice === "rock" && computerChoice === "paper"){
  $("#result").text("Computer wins")
}
});

