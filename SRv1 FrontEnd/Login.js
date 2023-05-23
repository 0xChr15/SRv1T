const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

function validatePassword(password) {
    // Update this with whatever password validation rules you want
    return password.length >= 8;
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!validatePassword(password)) {
        // Display an error message and stop the form submission
        errorMessage.textContent = 'Password does not meet the requirements.';
        return;
    }

    // Clear the error message
    errorMessage.textContent = '';

    // Perform login action with the provided username and password
    fetch('https://your-domain.com/your-login-endpoint', { // The URL should use HTTPS
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.isValid) {
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = data.message || 'An error occurred during login.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred during login.';
    });
});

fetch('https://your-domain.com/your-login-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    redirect: 'manual',  // Handle redirects manually
})
.then(response => {
    if (response.status === 200) {
        window.location.href = response.url;
    } else {
        return response.json();
    }
})
.then(data => {
    if (data) {
        errorMessage.textContent = data.message || 'An error occurred during login.';
    }
})
.catch((error) => {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred during login.';
});

document.querySelector('#login-form').addEventListener('submit', event => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  fetch('https://your-domain.com/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Failed to log in');
      }
  })
  .then(data => {
      if (data.isValid) {
          window.location.href = "dashboard.html";
      } else {
          alert('Invalid username or password');
      }
  })
  .catch((error) => {
      alert('Error:', error);
  });
});

