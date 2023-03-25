// Get the form element and input fields
const form = document.querySelector('#create-account-form');
const nameInput = form.querySelector('#name');
const roleInput = form.querySelector('#role');
const usernameInput = form.querySelector('#username');
const passwordInput = form.querySelector('#password');

// Add an event listener to the form for submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // Check if the name input is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  // Check if the role input is empty
  if (roleInput.value.trim() === '') {
    alert('Please enter your role.');
    return;
  }

  // Check if the username input is empty
  if (usernameInput.value.trim() === '') {
    alert('Please enter a username.');
    return;
  }

  // Check if the password input is empty
  if (passwordInput.value.trim() === '') {
    alert('Please enter a password.');
    return;
  }

  // Check if the password meets minimum requirements (at least 8 characters long)
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  // If all validation passes, submit the form
  form.submit();
});