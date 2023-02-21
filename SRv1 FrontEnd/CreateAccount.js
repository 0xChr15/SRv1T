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
