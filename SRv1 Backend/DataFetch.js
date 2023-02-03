const container = document.querySelector('.container');

fetch('/server-side-script.php')
  .then((response) => response.json())
  .then((data) => {
    //Create a table element
    const table = document.createElement('table');

    //Iterate over each item in the data
    data.forEach((item) => {
      //Create a row element
      const row = document.createElement('tr');

      //Create a cell element for the name and value
      const nameCell = document.createElement('td');
      nameCell.innerText = item.name;
      const valueCell = document.createElement('td');
      valueCell.innerText = item.value;

      //Append the cells to the row
      row.appendChild(nameCell);
      row.appendChild(valueCell);

      //Append the row to the table
      table.appendChild(row);
    });

    //Append the table to the container
    container.appendChild(table);
  });

fetch('/server-side-script.php')
  .then((response) => response.json())
  .then((data) => {
    //Create a table element
    const table = document.createElement('table');

    //Iterate over each item in the data
    data.forEach((item) => {
      //Create a row element
      const row = document.createElement('tr');

      //Create a cell element for the name and value
      const nameCell = document.createElement('td');
      nameCell.innerText = item.name;
      const valueCell = document.createElement('td');
      valueCell.innerText = item.value;

      //Append the cells to the row
      row.appendChild(nameCell);
      row.appendChild(valueCell);

      //Append the row to the table
      table.appendChild(row);
    });

    //Append the table to the container
    container.appendChild(table);
  });