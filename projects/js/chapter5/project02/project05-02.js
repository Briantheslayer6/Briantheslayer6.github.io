"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Brian Johnson
      Date:   

      Filename: project05-02.js
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    if (this.parentNode === photoBucket) {
      let newItem = document.createElement("li");
      newItem.appendChild(this);
      photoList.appendChild(newItem);
    }
      else {
            let oldItem = this.parentNode;
            oldItem.parentNode.removeChild(oldItem);
            photoBucket.appendChild(this);
      }
});
}