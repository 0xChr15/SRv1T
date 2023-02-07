const downloadButton = document.querySelector("#download-button");

downloadButton.addEventListener("click", () => {
  fetch("/server-side-script.php")
    .then(response => response.text())
    .then(csv => {
      const link = document.createElement("a");
      link.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
      link.download = "report.csv";

      document.body.appendChild(link);
      link.click();
    });
});

