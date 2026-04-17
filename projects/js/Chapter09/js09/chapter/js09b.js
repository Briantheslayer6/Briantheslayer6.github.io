"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: 
      Date:   
      
      Filename: js09b.js
 */

let qString = location.search.slice(1);
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

// split string into field=name pairs in an array
let form = qString.split(/&/g);
for (let items of form) {
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];

      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);
}
//console.log(qString);

//store data to local storage after user click "sign up" button
document.getElementById("signupBtn").onclick = function () {
      let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");
      for (let field of formFields) {
            localStorage.setItem(field.name, field.value);
      }
      console.log(localStorage);
};