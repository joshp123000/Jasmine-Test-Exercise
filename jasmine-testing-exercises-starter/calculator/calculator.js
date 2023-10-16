window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let data = {amount: 1000, years: 1, rate: 5}
  const uDAmount = document.getElementById("loan-amount")
  const uDYears = document.getElementById("loan-years")
  const uDrate = document.getElementById("loan-rate")

  uDAmount.value = data.amount
  uDYears.value = data.years
  uDrate.value = data.rate

  calculateMonthlyPayment(data)
  

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let cData = getCurrentUIValues()
  updateMonthly(calculateMonthlyPayment(cData))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount
  let i = values.rate/ (12*100)
  let n = values.years * 12

  let mV = (p*i)/
  (1-Math.pow((1+i), -n))
  let rmv = Math.round(mV * 100) / 100
  return rmv
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let string = monthly.toFixed(2)

  let text = document.getElementById("monthly-payment")
  text.innerText = string
}
