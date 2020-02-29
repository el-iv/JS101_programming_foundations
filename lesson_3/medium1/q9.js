/*
  Method calls can take expressions as arguments. Suppose we define a function
  called rps as follows, which follows the classic rules of the rock-paper-scissors
  game, but with a slight twist: in the event of a tie, it awards the win to the
  first of the two fists.
*/


console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//paper


/*
  The outermost call determines the result of comparing rps(rps("rock", "paper"),
  rps("rock", "scissors")) against rock. That means that we must evaluate the two
  separate calls, rps("rock", "paper") and rps("rock", "scissors"), and combine
  them by calling rps on their results. Those innermost expressions return "paper"
  and "rock", respectively. Calling rps on those two values returns "paper", which,
  when evaluated against "rock", returns "paper"
*/
