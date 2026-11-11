function calculateTotal() {
  const grocery1Value = parseFloat(document.getElementById("grocery1").value);
  const grocery2Value = parseFloat(document.getElementById("grocery2").value);
  const grocery3Value = parseFloat(document.getElementById("grocery3").value);
  const resultElement = document.getElementById("result");

  if (
    Number.isNaN(grocery1Value) ||
    Number.isNaN(grocery2Value) ||
    Number.isNaN(grocery3Value) ||
    grocery1Value < 0 ||
    grocery2Value < 0 ||
    grocery3Value < 0
  ) {
    resultElement.textContent =
      "Please enter valid positive numbers for all grocery amounts.";
    return;
  }

  const total = grocery1Value + grocery2Value + grocery3Value;
  resultElement.textContent = `The total amount is: $${total.toFixed(2)}`;
}
