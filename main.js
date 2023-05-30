const main = document.querySelector("main");
const success = document.querySelector(".success");
const input = document.querySelector("input");
const submittedEmail = document.querySelector("#submitted-email");
const errorMessage = document.querySelector("#error-message");
const submit = document.querySelector("#btn-subscribe");
const dismiss = document.querySelector("#btn-dismiss");
const emailReg = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    if (input.value.match(emailReg)) {
      submittedEmail.textContent = input.value;
      main.classList.toggle("hidden");
      success.classList.toggle("hidden");
    } else {
      input.classList.toggle("invalid-input");
      errorMessage.classList.toggle("hidden");
    }
  } else {
    input.classList.toggle("invalid-input");
    errorMessage.classList.toggle("hidden");
  }
});

input.addEventListener("click", () => {
  if (input.classList.contains("invalid-input")) {
    input.classList.toggle("invalid-input");
    errorMessage.classList.toggle("hidden");
  }
});

dismiss.addEventListener("click", () => {
  success.classList.toggle("hidden");
  main.classList.toggle("hidden");
});
