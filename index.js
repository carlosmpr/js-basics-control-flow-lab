const scuberGreetingForFeet = (cost) => {
  // Write your code here!
  if(cost > 2500){
    return 'No can do.'
  } else if(cost > 2000) {
    return 'I will gladly take your thirty bucks.'
  } else if (cost <= 400) {
    return 'This one is on me!'
  }
}

const ternaryCheckCity = (city)=> (city === "NYC" ? ("Ok, sounds good.") : ("No go."))
  // Write your code here

function switchOnCharmFromTip( tip){
  // Write your code here!
  if(tip === "generous"){
    return 'Thank you so much.'
  } else if (tip === "not as generous"){
    return 'Thank you.'
  }else{
    return 'Bye.'
  }
}