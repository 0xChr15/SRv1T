const knex = require('knex')({
    client: '<database_client>',
    connection: {
        connectionLimit: 10,
        host: "localhost:3306",
        user: "root",
        password: "roo123!",
        database: "standaregtest1.ethereum_data"
    }
  });

  //Run a SELECT query to retrieve the data
  knex.select('name', 'address', 'dob', 'country_of_residence')
    .from('<table>')
    .then((results) => {
      console.log(results);

  //Disconnect from the database
      knex.destroy();
    })
    .catch((error) => {
      console.error(error);
    });