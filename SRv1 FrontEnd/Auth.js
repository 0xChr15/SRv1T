// Register form submission
document.querySelector("#register-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirm = formData.get("passwordConfirm");

    // Validate the form data
    let hasError = false;
    if (username === "") {
    // Display an error message
    hasError = true;
    }
    if (email === "") {
    // Display an error message
    hasError = true;
    }
    if (password === "") {
    // Display an error message
    hasError = true;
    }
    if (passwordConfirm !== password) {
    // Display an error message
    hasError = true;
    }

    if (!hasError) {
    // Form data is valid, register the user
    fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((data) => {
    if (data.error) {
    // Display an error message
    } else {
    // Redirect to the login page
    window.location = "/login";
    }
    });
    }
    });

    // Login form submission
    document.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    // Validate the form data
    let hasError = false;
    if (username === "") {
    // Display an error message
    hasError = true;
    }
    if (password === "") {
    // Display an error message
    hasError = true;
    }

    if (!hasError) {
    // Form data is valid, log in the user
    fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then((data) => {
    if (data.error) {
    // Display an error message
    } else {
    // Redirect to the home page
    window.location = "/";
    }
    });
    }
    });