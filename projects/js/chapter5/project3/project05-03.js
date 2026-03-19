"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "h2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
      if (n.tagName.toLowerCase() === heading) {
            let tocEntry = document.createElement("li");
            toc.appendChild(tocEntry);
            n.setAttribute("id", "doclink" + headingCount);
            let newLink = document.createElement("a");
            newLink.setAttribute("href", "#doclink" + headingCount);
            newLink.textContent = n.textContent;
            tocEntry.appendChild(newLink);
            headingCount++;
      }
}
