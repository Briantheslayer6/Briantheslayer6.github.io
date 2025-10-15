/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Brian Johnson
      Date:  10/15/2025 

      Filename: js02.js
 */
//golobal_constants
const EMP_COST = 100;
const BOOK_COST = 350;
const REPO_COST = 1250;
const TRAVEL_COST = 2;
// setup form
window.addEventListener("load", setupForm);
//set forms defult values
function setupForm(){
    documents.getElementById("photoNum").value = 1;
    documents.getElementById("photoHrs").value = 2;
    documents.getElementById("makeBook").checked = false;
    documents.getElementById("photoRights").value = false;
    documents.getElementById("photoDist").value = 0;

    getEstimate();
    //Add event handlers
    document.getElementById("photoNum").onchange = getEstimate;
    document.getElementById("photoHrs").onchange = getEstimate;
    document.getElementById("photoDist").onchange = getEstimate;
    document.getElementById("makeBook").onchange = getEstimate;
    document.getElementById("photoRights").onchange = getEstimate;
}
//estimate total cost of service

function getEstimate(){
    let totalCost = 0;
    let photographers = document.getElementById("photoNum").value;
    let hours = document.getElementById("photoHrs").value;
    let distance = document.getElementById("photoDist").value;
    let buyBook = document.getElementById("makeBook").checked;
    let buyRights = document.getElementById("photoRights").checked;
}

//Add the cost of photographers for the hours covered
totalCost += photographers * hours * EMP_COST;

//Add the cost of distance per photographer per mile
totalCost += photographers * distance * TRAVEL_COST;

//Add the cot of book if purchased
totalCost += buyBook ? BOOK_COST : 0;

//Add the cost of the photo rights if purchased
totalCost += buyRights ? REPO_COST : 0;

document.getElementById("estimate").innerHTML = "$" + totalCost;