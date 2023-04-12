"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/
runClock();
setInterval("runClock()", 1000);
function runClock(){
/* Display the current date and time */
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
/* Store the current date and time */
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();
var gradYear = new Date("May 3, 2023");
var nextYear = currentDay.getFullYear();
gradYear.setFullYear(nextYear);
var daysLeft = (gradYear - currentDay)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
/* Display the current date and time */
document.getElementById("dateNow").innerHTML =  dateStr + "<br />" + timeStr;
};
