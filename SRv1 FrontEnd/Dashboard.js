const dashboard = document.createElement("div");
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

const username = "User Name";
const userGreeting = document.createElement("h3");
userGreeting.textContent = Gm, {username};
userGreeting.style.margin = "0";
userInfo.appendChild(userGreeting);

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
databases