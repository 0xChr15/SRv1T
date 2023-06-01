const createAccountForm = document.querySelector('#create-account-form');
const confirmPasswordInput = document.querySelector('#confirm-password');
const successMessage = document.createElement('div');
successMessage.innerText = 'Account created successfully!';
successMessage.classList.add('success-message');

function validatePasswordMatch() {
  if (createPasswordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match!');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
}

createAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  validatePasswordMatch();

  if (createAccountForm.checkValidity()) {
    // Here you can use JavaScript to send the user's input to your server for processing
    // (such as creating a new user account in a database)

    // Add the success message to the page
    createAccountForm.appendChild(successMessage);

    // Reset the form
    createAccountForm.reset();

    // Fade out the success message after 3 seconds
    setTimeout(() => {
      successMessage.style.opacity = '0';
      setTimeout(() => {
        createAccountForm.removeChild(successMessage);
      }, 1000);
    }, 3000);
  }
});


