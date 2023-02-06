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