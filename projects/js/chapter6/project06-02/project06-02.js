"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-02.js
*/


addEventListener("load", function() {
      let allSelect = document.querySelectorAll("form#govLinks select");      

      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].addEventListener("change", function() {
                  let link = this.value;
                  if (link !== "#") {
                        let newWin = window.open(link);
                  }
            });
      }     
});

