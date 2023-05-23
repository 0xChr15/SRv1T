const createAccountForm = document.querySelector('#create-account-form');
const createPassword = document.querySelector('#create-password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordMatchError = document.querySelector('#password-match-error');

function validatePasswordMatch() {
  if (createPassword.value !== confirmPassword.value) {
    passwordMatchError.style.display = 'block';
  } else {
    passwordMatchError.style.display = 'none';
  }
}

createPassword.addEventListener('change', validatePasswordMatch);
confirmPassword.addEventListener('keyup', validatePasswordMatch);

createAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Here you can use JavaScript to send the user's input to your server for processing
  // (such as creating a new user account in a database)
});

const loginForm = document.querySelector('#login-form');
const successMessage = document.createElement('div');
successMessage.innerText = 'Account created successfully!';
successMessage.classList.add('success-message');

function validatePasswordMatch() {
  if (createPassword.value !== confirmPassword.value) {
    passwordMatchError.style.display = 'block';
  } else {
    passwordMatchError.style.display = 'none';
  }
}

createPassword.addEventListener('change', validatePasswordMatch);
confirmPassword.addEventListener('keyup', validatePasswordMatch);

createAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Here you can use JavaScript to send the user's input to your server for processing
  // (such as creating a new user account in a database)

  // Add the success message to the login form
  loginForm.appendChild(successMessage);

  // Fade out the success message after 3 seconds
  setTimeout(() => {
    successMessage.style.opacity = '0';
    setTimeout(() => {
      loginForm.removeChild(successMessage);
    }, 1000);
  }, 3000);

  // Reset the form
  createAccountForm.reset();
});

// Create an account page
const createAccount = document.createElement("div");
createAccount.style.backgroundColor = "#fff";
createAccount.style.color = "#333";
createAccount.style.width = "100%";
createAccount.style.height = "100%";
createAccount.style.fontFamily = "EB Garamond";
document.body.appendChild(createAccount);

const header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "15px";
header.style.backgroundColor = "#444";
createAccount.appendChild(header);

const logo = document.createElement("img");
logo.src = "https://commons.wikimedia.org/wiki/File:Bitcoin-Genesis-block.jpg";
logo.style.height = "50px";
header.appendChild(logo);

const formContainer = document.createElement("div");
formContainer.style.display = "flex";
formContainer.style.flexDirection = "column";
formContainer.style.alignItems = "center";
createAccount.appendChild(formContainer);

const title = document.createElement("h2");
title.textContent = "Create an Account";
title.style.marginTop = "50px";
title.style.marginBottom = "20px";
formContainer.appendChild(title);

const form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.width = "300px";
form.style.marginBottom = "30px";
formContainer.appendChild(form);

const usernameLabel = document.createElement("label");
usernameLabel.textContent = "Username";
usernameLabel.setAttribute("for", "username");
form.appendChild(usernameLabel);

const usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("id", "username");
form.appendChild(usernameInput);

const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password";
passwordLabel.setAttribute("for", "password");
form.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
form.appendChild(passwordInput);

const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.textContent = "Confirm Password";
confirmPasswordLabel.setAttribute("for", "confirm-password");
form.appendChild(confirmPasswordLabel);

const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.setAttribute("type", "password");
confirmPasswordInput.setAttribute("id", "confirm-password");
form.appendChild(confirmPasswordInput);

const submitButton = document.createElement("button");
submitButton.textContent = "Create an Account";
submitButton.style.backgroundColor = "#444";
submitButton.style.color = "#fff";
submitButton.style.border = "none";
submitButton.style.padding = "10px 20px";
submitButton.style.borderRadius = "5px";
submitButton.style.marginTop = "20px";
form.appendChild(submitButton);

// Change background and details
createAccount.style.backgroundImage = "https://commons.wikimedia.org/wiki/File:Bitcoin-Genesis-block.jpg";
createAccount.style.backgroundSize = "cover";
createAccount.style.color = "#fff";

// Add success message
function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Account created successfully!";
  successMessage.style.backgroundColor = "#8BC34A";
  successMessage.style.color = "#fff";
  successMessage.style.padding = "15px";
  successMessage.style.borderRadius = "5px";
  successMessage.style.position = "fixed";
  successMessage.style.top = "20px";
  successMessage.style.right = "20px";
  document.body.appendChild(successMessage);
  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, 3000);
}

// Add submit button event listener
submitButton.addEventListener("click", (event) => {
  event
  .preventDefault();

const username = usernameInput.value;
const password = passwordInput.value;
const confirmPassword = confirmPasswordInput.value;

if (password !== confirmPassword) {
alert("Passwords do not match!");
} else {
// Code to create account and redirect to login screen goes here
showSuccessMessage();
setTimeout(() => {
window.location.href = "login.html";
}, 3000);
}
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    // Make a POST request to the server to create the account
    fetch('/your-account-creation-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Show success message and redirect to login screen
        showSuccessMessage();
        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      } else {
        // Show error message
        alert(data.error);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});

createAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    fetch('https://your-server-url/your-account-creation-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        // Display the error message from the server to the user
        alert(data.error);
      } else {
        showSuccessMessage();
        setTimeout(() => {
          // Redirect to login screen
          window.location.href = "login.html";
        }, 3000);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
});
