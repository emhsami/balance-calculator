var availableBalance = document.querySelector("#available-balance");
var inputAmount = document.querySelector("#input-amount");
var transList = document.querySelector("#trans-list");

var totalAmount = parseInt(availableBalance.innerHTML);

function depoBtn() {
    var converted = inputAmount.value;
    var converting = parseInt(converted);
    var result = totalAmount + converting;

    if (converted.trim() !== "") {
        updateTransaction("Deposit", converting);
        totalAmount = result;
        updateAvailableBalance(totalAmount);
    }

    inputAmount.value = "";
}

function expBtn() {
    var converted = inputAmount.value;
    var converting = parseInt(converted);
    var result = totalAmount - converting;

    if (converted.trim() !== "") {
        updateTransaction("Expense", converting);
        totalAmount = result;
        updateAvailableBalance(totalAmount);
    }

    inputAmount.value = "";
}

function updateTransaction(type, amount) {
    var listItem = document.createElement("li");
    listItem.textContent = `${type}: ${amount}`;
    listItem.classList.add(type.toLowerCase());
    transList.insertBefore(listItem, transList.firstChild);
}

function updateAvailableBalance(amount) {
    availableBalance.innerHTML = amount;
}