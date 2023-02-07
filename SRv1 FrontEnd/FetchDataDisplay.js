const container = document.querySelector('.container');

fetch('/server-side-script.php')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${item.name}: ${item.value}</p>`;

      container.appendChild(div);
    });
  });
