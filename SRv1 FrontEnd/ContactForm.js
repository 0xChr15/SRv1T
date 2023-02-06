const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

 //Validate the form data)
  let hasError = false;
  if (nameInput.value === '') {
    nameInput.classList.add('error');
    hasError = true;
  } else {
    nameInput.classList.remove('error');
  }
  if (emailInput.value === '') {
    emailInput.classList.add('error');
    hasError = true;
  } else {
    emailInput.classList.remove('error');
  }
  if (messageInput.value === '') {
    messageInput.classList.add('error');
    hasError = true;
  } else {
    messageInput.classList.remove('error');
  }

  if (!hasError) {
 //Form data is valid, submit the form)
    form.submit();
  }
});