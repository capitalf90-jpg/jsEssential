function calculateArea() {
  const lengthValue = parseFloat(document.getElementById("length").value);
  const widthValue = parseFloat(document.getElementById("width").value);
  const resultElement = document.getElementById("result");

  if (Number.isNaN(lengthValue) || Number.isNaN(widthValue) || lengthValue <= 0 || widthValue <= 0) {
    resultElement.textContent = "Please enter valid positive numbers for length and width.";
    return;
  }

  const area = lengthValue * widthValue;
  resultElement.textContent = `The area of the rectangle is: ${area}`;
}
