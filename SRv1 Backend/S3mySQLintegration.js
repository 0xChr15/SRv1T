const AWS = require('aws-sdk');
const mysql = require('mysql2');

//Configure AWS credentials
AWS.config.update({
  accessKeyId: 'ACCESS_KEY',
  secretAccessKey: 'SECRET_KEY',
  region: 'REGION'
});

//Create an S3 client
const s3 = new AWS.S3();

//Define the S3 bucket and object to retrieve
const bucketName = 'BUCKET_NAME';
const objectKey = 'OBJECT_KEY';

//Retrieve the object from the S3 bucket
s3.getObject({ Bucket: bucketName, Key: objectKey }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
   //Connect to the MySQL database
    const connection = mysql.createConnection({
        connectionLimit: 10,
        host: "localhost:3306",
        user: "root",
        password: "_______",
        database: "standaregtest1"
    });

    connection.connect();

   //Insert the data into the MySQL database
    connection.query('INSERT INTO table_name (column1, column2, column3) VALUES (?, ?, ?)', [data.field1, data.field2, data.field3], (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });

   //Close the MySQL connection
    connection.end();
  }
});