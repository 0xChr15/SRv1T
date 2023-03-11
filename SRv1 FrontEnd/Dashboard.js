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
