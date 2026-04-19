"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Brian Johnson
      Date:   

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");
getFileButton.onchange = function() {
   let JSONfile = this.files[0];
   
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   fr.onload=function(){
      let staff = JSON.parse(fr.result);

      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");

   for(let prop in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.textContent = prop;

      headerRow.appendChild(headerCell);
   }
   staffTable.appendChild(headerRow);

   for(let x = 0; x < staff.directory.length; x++) {
      let tableRow = document.createElement("tr");

      for (let prop in staff.directory[x]) {
         let tableCell = document.createElement("td");
         tableCell.textContent = staff.directory[x][prop];
         
         tableRow.appendChild(tableCell);
      }
      staffTable.appendChild(tableRow)
   }
   containerBox.appendChild(staffTable)
}