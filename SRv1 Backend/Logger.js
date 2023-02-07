const winston = require('winston');

//Define the logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//Add the console transport
logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

//Use the logger
logger.info('Hello, this is an information message');
logger.error('An error has occurred');

//Include a timestamp with each log message by using the Date object
const timestamp = new Date().toISOString();
logger.info(`${timestamp} - Hello, this is an information message`);

//Context information such as the user ID and request data by including it in the log message
const userId = '12345';
const requestData = {};
logger.info(`${timestamp} - User ${userId} - ${requestData} - Hello, this is an information message`);

//Use the Elasticsearch JavaScript client to search for log data
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

async function searchLogs() {
  const { body } = await client.search({
    index: 'logs',
    body: {
      query: {
        match: {
          message: 'error'
        }
      }
    }
  })
  console.log(body.hits.hits)
}

searchLogs()