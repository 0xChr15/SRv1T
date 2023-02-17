const mysql = require('mysql');

//Connect to the database
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost:3306",
    user: "root",
    password: "root123",
    database: "standaregtest1"
});

connection.connect((error) => {
  if (error) throw error;

 //Run a SELECT query to retrieve the data
  connection.query('SELECT name, address, dob, country_of_residence FROM <table>', (error, results) => {
    if (error) throw error;

    console.log(results);

  //Disconnect from the database
    connection.end();
  });
});