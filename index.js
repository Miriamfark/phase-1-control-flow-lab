let paymentAmount
const feet = 500
function scuberGreetingForFeet(feet){
  if (feet<=400) {
    return "This one is on me!"
  } else if (feet>400 && feet<2000) {
    return `I will gladly take your ${paymentAmount} bucks.`
  } else if (feet>2000 && feet<2500) {
    return "I will gladly take your thirty bucks."
  }else if (feet>2500) {
    return "No can do."
  }
  }

let city

function ternaryCheckCity(city){
 return city === "NYC" ? "Ok, sounds good." : "No go."
}

let tipMessage
function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case "generous":
      tipMessage = "Thank you so much."
    break;
    case "not as generous":
      tipMessage = "Thank you."
      break;
    default:
      tipMessage = "Bye."
    }
    return tipMessage
}