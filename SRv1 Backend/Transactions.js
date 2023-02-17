const mysql = require('mysql');

// Connection pooling
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "root123",
    database: "standaregtest1"
});

// Function to insert transaction data into the database
function insertTransactionData(txid, valueEth, valueUsd, timestamp, from, to) {
    // Create the SQL query
    const sql = "INSERT INTO ethereum_data (txid, valueeth, valueUsd, timestamp, from, toA) VALUES (?, ?, ?, ?, ?, ?)";
    // Execute the query
    pool.query(sql, [txid, valueUsd, fromAddress, toAddress], function (err, result) {
        if (err) throw err;
        console.log("Transaction data inserted into the database.");
    });
}

// Close the connection pool
pool.end(function (err) {
    console.log(err);
});