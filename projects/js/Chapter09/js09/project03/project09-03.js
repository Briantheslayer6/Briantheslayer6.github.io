"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Brian Johnson
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if(localStorage.sbloggerLastVisit) {
      let storedLastDate = localStorage.sbloggerLastVisit;
      lastVisitDate.textContent = storedLastDate;

      let lastDate = new Date(storedLastDate);
      for(let i of articleDates) {
            let articleDate = new Date(i.textContent);
            if(articleDate > lastDate) {
                  i.innerHTML += "<strong>new</strong>";
            }
      }
} else {
      document.getElementById("lastVisit").textContent = "Welcome to SBlogger!";
      for(let i of articleDates) {
            i.innerHTML += "<strong>new</strong>";
      }
}

let currentDate = new Date();
currentDate.toLocaleDateString();
localStorage.sbloggerLastVisit = currentDate;