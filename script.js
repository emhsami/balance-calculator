var availableBalance = document.querySelector("#available-balance");
var inputAmount = document.querySelector("#input-amount")
var depoBtn = document.querySelector("#depo-btn");
var expBtn = document.querySelector("#exp-btn");
var resetBtn = document.querySelector("#reset-btn");

var totalAmount = availableBalance.innerHTML = 50000;

// var fixedAmount = (parseInt(totalAmount));

depoBtn.addEventListener("click", (e)=>{
    // e.preventDefault();
    var converted = inputAmount.value;
    var converting = parseInt(converted);
    availableBalance.innerHTML = totalAmount + converting;
})