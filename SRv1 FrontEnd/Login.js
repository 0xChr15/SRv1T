const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', event => {
event.preventDefault();
const username = usernameInput.value;
const password = passwordInput.value;

// Perform login action with the provided username and password
});

// After validating user credentials:
if (validUser) {
    window.location.href = "dashboard.html";
  }

  const createAccountForm = document.querySelector("form");
  createAccountForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");

    // Check if the username and password meet the requirements
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username.length >= 6 && username.length <= 12 && password.length >= 6 && password.length <= 12) {
      // Save the credentials in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // Redirect to dashboard.html
      window.location.href = "dashboard.html";
    } else {
      alert("Please provide a username and password that are between 6 and 12 characters.");
    }
  });