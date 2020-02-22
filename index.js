/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(string) {
  let time = string.split(":")
  
  if (parseInt(time[0]) < 12) {
    console.log("Good Morning")
  } else if (parseInt(time[0]) >= 12 && parseInt(time[0]) <= 17) {
    console.log("Good Afternoon")
  } else {
     console.log("Good Evening") 
  }
}

function displayMessage(string) {
  let element = document.getElementById("greeting");
  element.innerHTML = string
} 
  
