// Task 1
function cashRegister() {
  // Takes the input from the price and cash box and puts them in a variable
  let price = parseFloat(document.getElementById("num1").value);
  let cash = parseFloat(document.getElementById("num2").value);

  let changeDue = cash - price;
  let currencyUnit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = [];



  //The 'result' object to be returned 
  let result = {
    status: "",
    change: [""]
  };
  // Array for Cash in Drawer
  let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ];

  //Task 6: Define a variable called cidSum that holds the cash-in-drawer value
  function cidSum() {
    let cidSum = 0;
    for (i = 0; i < cid.length; i++) {
      cidSum += cid[i][1];
    }
    return cidSum.toFixed(2);
  }

  // Task 8 + 10 Calculate Change that needs to be given
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinName = cid[i][0];
    let coinTotal = cid[i][1];
    let coinValue = currencyUnit[i];
    let coinAmount = 0;

    while (changeDue >= coinValue && coinTotal > 0) {
      changeDue -= coinValue;
      coinTotal -= coinValue;
      coinAmount += coinValue;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (coinAmount > 0) {
      change.push([coinName, coinAmount]);
    }
  }

  console.log(cidSum());

  // Task 2: If Statement where if the cash is less than price it out puts Incorrect Payment
  if (cash < price) {
    result.status = "Incorrect Payment";
    // Task 3
    result.change = "N/A (You have given us less than the price)";
  } else if (isNaN(cash) || isNaN(price)) {
    result.status = "Invalid Input (Make sure you enter a number)"
    result.change = "Invalid Input (Make sure you enter a number)"
  } else if (price == cash) {
    result.status = "Open";
    result.change = "N/A (No Change Needed)";
  } else if (cidSum() == changeDue) { // Task 9
    result.status = "Closed";
    result.change = cid;
  } else if (cidSum() < changeDue) { //Task 7
    result.status = "Insufficient Funds";
    result.change = "N/A (We do not have enough change for you, your change comes to: " + change + ")";
  } else if (cidSum() > changeDue) {
    result.status = "Open";
    result.change = change; // Task 10 - not finished
  }


  // Outputs the Status and Change to the HTML Page
  document.getElementById("status").innerHTML = "Status: " + result.status;
  document.getElementById("change").innerHTML = "Change: " + result.change;
}

// When the button is clicked it will call upon the cashRegister Function
document.getElementById("submit-button").addEventListener("click", cashRegister);