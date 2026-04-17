"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: 
      Date:   

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/
class Ball {
   constructor(size) {
      this.xPos = null;
      this.yPos = null;
      this.Xvelocity = null;
      this.Yvelocity = null;
      this.radius = size;
   }

   moveWithin(container) {
      let ballTop = this.yPos;
      let ballLeft = this.xPos;
      let ballBottom = this.yPos + this.radius;
      let ballRight = this.xPos + this.radius;

      if (ballTop < 0 || ballBottom > container.clientHeight) {
         this.Yvelocity = -this.Yvelocity;
      }
      if (ballLeft < 0 || ballRight > container.clientWidth) {
         this.Xvelocity = -this.Xvelocity;
      }
      
      
      this.xPos += this.Xvelocity;
      this.yPos += this.Yvelocity;

   }

}

/*---------------Interface Code -----------------*/
// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   let ball = new Ball(BALL_RADIUS);
   ball.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
   ball.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;
   ball.Xvelocity = rand(-10,10);
   ball.Yvelocity = rand(-10,10);

   
   window.setInterval(function() {
      ball.moveWithin(boxImage);
      
      ballImage.style.top = ball.yPos + "px";
      ballImage.style.left = ball.xPos + "px";
      boxImage.style.top = boxImage.yPos + "px";
      boxImage.style.left = boxImage.xPos + "px";
      
   }, 25);
   
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}