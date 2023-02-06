form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Perform some action with the form data, such as sending an HTTP request
});
const form = document.querySelector('#register-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('username', username.value);
  formData.append('email', email.value);
  formData.append('password', password.value);
  formData.append('passwordConfirm', passwordConfirm.value);

  fetch('/register', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
