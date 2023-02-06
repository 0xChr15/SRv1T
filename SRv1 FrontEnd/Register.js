const registerForm = document.querySelector('#register-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');

registerForm.addEventListener('submit', (event) => {
event.preventDefault();

let hasError = false;
if (usernameInput.value === '') {
usernameInput.classList.add('error');
hasError = true;
} else {
usernameInput.classList.remove('error');
}
if (emailInput.value === '') {
emailInput.classList.add('error');
hasError = true;
} else {
emailInput.classList.remove('error');
}
if (passwordInput.value === '') {
passwordInput.classList.add('error');
hasError = true;
} else {
passwordInput.classList.remove('error');
}
if (passwordConfirmInput.value === '') {
passwordConfirmInput.classList.add('error');
hasError = true;
} else {
passwordConfirmInput.classList.remove('error');
}

if (!hasError) {
// Check if password and password confirmation match
if (passwordInput.value !== passwordConfirmInput.value) {
passwordInput.classList.add('error');
passwordConfirmInput.classList.add('error');
hasError = true;
} else {
passwordInput.classList.remove('error');
passwordConfirmInput.classList.remove('error');
}
}

if (!hasError) {
// Submit the form
registerForm.submit();
}
});