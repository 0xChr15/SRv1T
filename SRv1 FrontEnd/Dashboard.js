// Check if user is logged in
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

if (!username || !password) {
  window.location.href = "index.html";
}

// Continue with dashboard code
const dashboard = document.createElement("div");
// ... code for creating the dashboard ...
dashboard.style.backgroundColor = "#333";
dashboard.style.color = "#fff";
dashboard.style.width = "100%";
dashboard.style.height = "100%";
dashboard.style.fontFamily = "EB Garamond";
document.body.appendChild(dashboard);

const header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "15px";
header.style.backgroundColor = "#444";
dashboard.appendChild(header);

const tabs = [
  { label: "Main", link: "#main" },
  { label: "Database(s)", link: "#databases" },
  { label: "Performance", link: "#performance" },
  { label: "Alerts", link: "#alerts" },
  { label: "Calendar", link: "#calendar" },
  { label: "Past due requirements", link: "#past-due" },
  { label: "Scheduled Requirements", link: "#scheduled" },
  { label: "Upcoming Requirements", link: "#upcoming" },
  { label: "Docs", link: "#docs" }
];

tabs.forEach(tab => {
  const tabButton = document.createElement("a");
  tabButton.href = tab.link;
  tabButton.textContent = tab.label;
  tabButton.style.color = "#fff";
  tabButton.style.marginRight = "15px";
  header.appendChild(tabButton);
});

const userInfo = document.createElement("div");
userInfo.style.backgroundColor = "#444";
userInfo.style.color = "#fff";
userInfo.style.padding = "15px";
userInfo.style.borderRadius = "5px";
userInfo.style.fontFamily = "EB Garamond";
dashboard.appendChild(userInfo);

const usernameInput = document.createElement("input");
usernameInput.setAttribute("type", "text");
usernameInput.setAttribute("placeholder", "Please provide a 6-12 character username");
userInfo.appendChild(usernameInput);

const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "Please provide a 6-12 character password");
userInfo.appendChild(passwordInput);

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", () => {
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  // save the values to localStorage
  localStorage.setItem("username", usernameValue);
  localStorage.setItem("password", passwordValue);
  // redirect to dashboard
  window.location.href = "dashboard.html";
});
userInfo.appendChild(submitButton);

const databasesSection = document.createElement("div");
databasesSection.style.backgroundColor = "#444";
databasesSection.style.color = "#fff";
databasesSection.style.padding = "15px";
databasesSection.style.borderRadius = "5px";
databasesSection.style.display = "flex";
databasesSection.style.justifyContent = "space-between";
databasesSection.style.fontFamily = "EB Garamond";
dashboard.appendChild(databasesSection);

const totalDatabases = document.createElement("div");
totalDatabases.textContent = "Total Databases: 0";
totalDatabases.style.cursor = "pointer";
totalDatabases.addEventListener("click", () => {
  window.location.href = "#databases";
});
databasesSection.appendChild(totalDatabases);

// Fetch dashboard data from the server
fetch('https://your-domain.com/dashboard-data', {
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // Insert data into the page
    const list = document.querySelector('#dashboard-data');
    for (const key in data) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;
        list.appendChild(listItem);
    }
})
.catch((error) => {
    console.error('Error:', error);
});

// Handle logout
document.querySelector('#logout-button').addEventListener('click', () => {
    fetch('https://your-domain.com/logout', { method: 'POST' })
    .then(() => {
        window.location.href = 'login.html';
    });
});

// Handle form submission
document.querySelector('#dashboard-form').addEventListener('submit', event => {
  event.preventDefault();

  // Fetch form data
  const formData = new FormData(event.target);
  const newReport = formData.get('new-report');

  // Send form data to server
  fetch('https://your-domain.com/dashboard', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.json())
  .then(data => {
      // Update the table with the new data
      updateTable(data);
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});

// Function to update the table with new data
function updateTable(data) {
  const table = document.querySelector('#dashboard-data');
  table.innerHTML = ''; // Clear existing data

  for (const key in data) {
      const row = document.createElement('tr');
      const keyCell = document.createElement('td');
      keyCell.textContent = key;
      const valueCell = document.createElement('td');
      valueCell.textContent = data[key];
      row.appendChild(keyCell);
      row.appendChild(valueCell);
      table.appendChild(row);
  }
}

// Fetch initial data when the page loads
fetch('https://your-domain.com/dashboard-data', {
  headers: {
      'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(updateTable)
.catch((error) => {
  console.error('Error:', error);
});

// Handle logout
document.querySelector('#logout-button').addEventListener('click', () => {
  fetch('https://your-domain.com/logout', { method: 'POST' })
  .then(() => {
      window.location.href = 'login.html';
  });
});

// Get current user's role from the server
fetch('https://your-domain.com/user-role', {
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    // if the user is not an admin, disable the "generate report" button
    if (data.role !== 'admin') {
        const button = document.querySelector('#generate-report-button');
        button.disabled = true;
        button.title = "You don't have permission to generate reports";
    }
})
.catch((error) => {
    console.error('Error:', error);
});

