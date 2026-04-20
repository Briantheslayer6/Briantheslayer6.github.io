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
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      let staff = JSON.parse(fr.result);
      makeStaffTable(staff);
      console.log(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   let headerCell = document.createElement("th");
   headerCell.textContent = "firstName";
   headerRow.appendChild(headerCell);
   headerCell = document.createElement("th");
   headerCell.textContent = "lastName";
   headerRow.appendChild(headerCell);
   headerCell = document.createElement("th");
   headerCell.textContent = "position";
   headerRow.appendChild(headerCell);
   headerCell = document.createElement("th");
   headerCell.textContent = "dept";
   headerRow.appendChild(headerCell);
   headerCell = document.createElement("th");
   headerCell.textContent = "email";
   headerRow.appendChild(headerCell);
   headerCell = document.createElement("th");
   headerCell.textContent = "phone";
   headerRow.appendChild(headerCell);

   staffTable.appendChild(headerRow);


   let staffRow = document.createElement("tr");
   let staffCell = document.createElement("td");
   for (let i = 0; i < staff.length; i++) {
      staffCell.textContent = staff[i].firstName;
      staffRow.appendChild(staffCell);
      staffCell = document.createElement("td");
      staffCell.textContent = staff[i].lastName;
      staffRow.appendChild(staffCell);
      staffCell = document.createElement("td");
      staffCell.textContent = staff[i].position;
      staffRow.appendChild(staffCell);
      staffCell = document.createElement("td");
      staffCell.textContent = staff[i].dept;
      staffRow.appendChild(staffCell);
      staffCell = document.createElement("td");
      staffCell.textContent = staff[i].email;
      staffRow.appendChild(staffCell);
      staffCell = document.createElement("td");
      staffCell.textContent = staff[i].phone;
      staffRow.appendChild(staffCell);
      staffTable.appendChild(staffRow);
      
   }
   containerBox.appendChild(staffTable);
}
