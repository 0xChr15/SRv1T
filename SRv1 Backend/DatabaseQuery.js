const mysql = require('mysql');

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost:3306",
    user: "root",
    password: "_______",
    database: "standaregtest1"
});

connection.connect();

//Use an index to improve the performance of the query)
const query = 'SELECT * FROM table WHERE column1 = ? AND column2 = ?';

//Minimize the number of rows returned by the query)
const params = ['value1', 'value2'];

//Use batching to group multiple queries into a single batch)
const batch = [query, params];

//Use pagination to return results in smaller chunks)
const pageSize = 100;
const page = 2;
const limit = pageSize;
const offset = pageSize * (page - 1);

connection.query(batch, (error, results) => {
  if (error) throw error;
  // Process the results
});

connection.end();

