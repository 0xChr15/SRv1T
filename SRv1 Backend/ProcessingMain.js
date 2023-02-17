const mysql = require('mysql2');

// Connection pooling
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "root123",
    database: "standaregtest1"
});
// Connect to AWS and retrieve transaction data
async function fetchTransactionDataFromAWS() {
    // Replace with your actual AWS connection and data retrieval code
    return [
      { id: 1, amount: 100, sender: 'A', receiver: 'B' },
      { id: 2, amount: 200, sender: 'C', receiver: 'D' },
      { id: 3, amount: 300, sender: 'E', receiver: 'F' }
    ];
  }

  // Main function that retrieves and reformats data
  async function processData() {
    const transactionData = await fetchTransactionDataFromAWS();
    for (const transaction of transactionData) {
      const transactionID = transaction.id;
      const amount = transaction.amount;
      const sender = transaction.sender;
      const receiver = transaction.receiver;

      // Reformat the data as desired
      const formattedData = `Transaction ID: ${transactionID}\nAmount: ${amount}\nFrom: ${sender}\nTo: ${receiver}`;

      // Insert the reformatted data into the MySQL database
      const query = 'INSERT INTO transactions (transaction_id, amount, sender, receiver) VALUES (?, ?, ?, ?)';
      const values = [transactionID, amount, sender, receiver];
      db.query(query, values, (error, result) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Data inserted successfully');
        }
      });
    }
  }

  // Call the main function
  processData();