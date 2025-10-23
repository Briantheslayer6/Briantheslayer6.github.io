/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Brian Johnson
      Date:  10/22/2025

      Filename: project02-04.js
 */
 


const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

let chickenBox = document.getElementById("chicken");
let halibutBox = document.getElementById("halibut");
let burgerBox = document.getElementById("burger");
let salmonBox = document.getElementById("salmon");
let saladBox = document.getElementById("salad");




function calcTotal(){
   let cost = 0; 
   let buyChicken = chickenBox.checked;
   let buyHalibut = halibutBox.checked;
   let buyBurger = burgerBox.checked;
   let buySalmon = salmonBox.checked;
   let buySalad = saladBox.checked;

   cost += buyChicken ? CHICKEN_PRICE: 0;
   cost += buyHalibut ? HALIBUT_PRICE: 0;
   cost += buyBurger ? BURGER_PRICE: 0;
   cost += buySalmon ? SALMON_PRICE: 0;
   cost += buySalad ? SALAD_PRICE: 0;

   let foodTotal = document.getElementById("foodTotal");
   let taxTotal = document.getElementById("foodTax");
   let totalBill = document.getElementById("totalBill");

   let tax = cost * SALES_TAX;
   let total = cost + tax;

   foodTotal.innerHTML = formatCurrency(cost);
   taxTotal.innerHTML = formatCurrency(tax);
   totalBill.innerHTML = formatCurrency(total);
   

   
   
}

chickenBox.addEventListener("click", calcTotal);
halibutBox.addEventListener("click", calcTotal);
burgerBox.addEventListener("click", calcTotal);
salmonBox.addEventListener("click", calcTotal);
saladBox.addEventListener("click", calcTotal);

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }




