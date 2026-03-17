"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: 
      Date:   

      Filename: js06a.js
 */

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      model.focus();

      for(let i = 0; i < orderForm.length; i++){
            orderForm.elements[i].addEventListener("change", calcOrder);
      }

      function calcOrder() {
            // determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            // determined the selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            // Model cost = model cost times quantity
            let modelCost = mValue * quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // charge the plan to each item ordered
            let planValue = document.querySelector('input[name="plan"]:checked').value;
            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //subtotal
            let subTotal = modelCost + planCost;
            orderForm.elements.subTotal.value = subTotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // tax
            let salesTax = subTotal * 0.05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // total cost
            let totalCost = subTotal + salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //hidden values
            orderForm.elements.modelname.value = model.options[mIndex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planname.value = selectedPlan.labels[0].textContent;
      }
});

