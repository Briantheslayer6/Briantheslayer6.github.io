/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Brian Johnson
      Date: 10/17/2025

      Filename: project02-03.js
 */
let square=document.getElementById("square");
let triangle=document.getElementById("triangle");
let circle=document.getElementById("circle");

square.onmouseover = function() {
      document.getElementById("feedback").innerHTML="You're hovering over the square";
}
square.onmouseout=function() {
      document.getElementById("feedback").innerHTML="";
}


triangle.onmouseover = function() {
      document.getElementById("feedback").innerHTML="You're hovering over the triangle";
}
triangle.onmouseout=function() {
      document.getElementById("feedback").innerHTML="";
}


circle.onmouseover = function() {
      document.getElementById("feedback").innerHTML="You're hovering over the circle";
}
circle.onmouseout=function() {
      document.getElementById("feedback").innerHTML="";
}