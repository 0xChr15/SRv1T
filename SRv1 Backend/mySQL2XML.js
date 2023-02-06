const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database',
});

connection.connect();

const query = 'SELECT * FROM table';

connection.query(query, (error, results) => {
  if (error) throw error;

 //Convert the data to XML
  const xml = convertToXml(results);

 //Save the XML to a file
  fs.writeFileSync('data.xml', xml);
});

connection.end();

const xmlbuilder = require('xmlbuilder');

function convertToXml(data) {
  const root = xmlbuilder.create('root');

  data.forEach((row) => {
    const element = root.ele('element');
    for (const key in row) {
      element.ele(key, row[key]);
    }
  });

  return root.end({ pretty: true });
}