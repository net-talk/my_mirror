const electron = require('electron')
const path = require('path')

function ticken(){
	let d = new Date();
	document.getElementById("clock").innerHTML = d;
  	clock.innerHTML = zeit;
}
 
ticken()
setInterval(ticken, 1000)
//https://openweathermap.org/api