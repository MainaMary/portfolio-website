const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const textArea = document.getElementById("text-area-message");
const button = document.getElementById("contact-btn");
const error = document.getElementById("error-message");

[nameInput, emailInput, textArea].forEach((input) => {
  input.addEventListener("input", function () {
    checkInputs();
  });
});

function checkInputs() {
  error.style.display = "none";
  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    textArea.value.trim() !== ""
  ) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    textArea.value.trim() === ""
  ) {
    error.style.color = "#d25959";
    error.textContent = "Please submit all values";
    return;
  }
});
