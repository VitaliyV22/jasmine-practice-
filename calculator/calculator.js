window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +document.getElementById("loan-amount").value,
      years: +document.getElementById("loan-years").value,
      rate: +document.getElementById("loan-rate").value,
    };
  }
  
  function setupIntialValues() {
    const values = { amount: 5000, years: 10, rate: 2.3 };
    const amountDisplay = document.getElementById("loan-amount");
    amountDisplay.value = values.amount;
    const yearDisplay = document.getElementById("loan-years");
    yearDisplay.value = values.years;
    const rateDisplay = document.getElementById("loan-rate");
    rateDisplay.value = values.rate;
    update();
  }
  
  function update() {
    const currentUIValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(currentUIValues));
  }
  
  function calculateMonthlyPayment(values) {
    const monthlyRate = values.rate / 100 / 12;
    const n = Math.floor(values.years * 12);
    return (
      (monthlyRate * values.amount) /
      (1 - Math.pow(1 + monthlyRate, -n))
    ).toFixed(2);
  }
  
  function updateMonthly(monthly) {
    const monthlyDisplay = document.getElementById("monthly-payment");
    monthlyDisplay.innerText = "$" + monthly;
  }

  
