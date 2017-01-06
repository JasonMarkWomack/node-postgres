const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  //serial is, more or less, a column type so saying integer serial is like saying text text , just say serial 
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
