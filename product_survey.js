function submitFeedback() {
  // Get the values from the input fields
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedbackText = document.getElementById("feedbackText").value;

  // Display the user information
  document.getElementById("userName").textContent = name;
  document.getElementById("userAge").textContent = age;
  document.getElementById("userEmail").textContent = email;
  document.getElementById("userJob").textContent = job;
  document.getElementById("userDesignation").textContent = designation;
  document.getElementById("userProductChoice").textContent = productType;
  document.getElementById("userFeedback").textContent = feedbackText;

  // Show the user information div
  document.getElementById("userInfo").hidden = false;
}

// Listen only to form submission
const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  submitFeedback();
});
