// Task 1
function cashRegister() {
  // Takes the input from the price and cash box and puts them in a variable
  let price = parseFloat(document.getElementById("num1").value);
  let cash = parseFloat(document.getElementById("num2").value);

  let changeDue = cash - price;
  let cidSum = 0;

  // Array for Change
  let change = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
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
  
  /* Broken for a some weird reason?
    for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }
  */
  
  // Task 2: If Statement where if the cash is less than price it out puts Incorrect Payment
  if (cash < price) {
    result.status = "Incorrect Payment";
    // Task 3
    result.change = 0;
  } else if (isNaN(cash) || isNaN(price)) {
    result.status = "Invalid Input (Make sure you enter a number)"
    result.change = "Invalid Input (Make sure you enter a number)"
  } else if (cidSum == changeDue) {
    result.status = "Closed";
    result.change = cid;
  }



  // Outputs the Status and Change to the HTML Page
  document.getElementById("status").innerHTML = "Status: " + result.status;
  document.getElementById("change").innerHTML = "Change: " + result.change;

}

// When the button is clicked it will call upon the cashRegister Function
document.getElementById("submit-button").addEventListener("click", cashRegister);
