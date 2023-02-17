const mysql = require('mysql2');
const request = require('request-promise');

const connection = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "root123",
    database: "standaregtest1"
});
connection.connect((error) => {
  if (error) {
    console.error(`Error connecting to database: ${error.message}`);
    return;
  }
  console.log('Connected to database.');
});

request('http://api.example.com/endpoint', (error, response, body) => {
  if (error) {
    console.error(`Error making API request: ${error.message}`);
    return;
  }

  try {
    const data = JSON.parse(body);

    connection.query('INSERT INTO table (column1, column2) VALUES (?, ?)', [data.field1, data.field2], (error, results) => {
      if (error) {
        console.error(`Error inserting data into the database: ${error.message}`);
        return;
      }
      console.log('Data inserted into the database.');
    });
  } catch (error) {
    console.error(`Error parsing response data: ${error.message}`);
  }
});
