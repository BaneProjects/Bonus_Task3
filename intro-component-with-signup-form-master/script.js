const form = document.querySelector(".right form");
const inputs = document.querySelectorAll(".right form input");
form.addEventListener("submit", (el) => {
  el.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
      setTimeout(function () {
        input.parentElement.classList.remove("error");
      }, 5000);
    } else {
      if (input.type == "email") {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove("error");
        } else {
          input.parentElement.classList.add("error");
        }
      }
    }
  });
});
function validateEmail() {
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}
