import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const getDatabase = () => {
  // Here I create a function that sets up a connection
  // to a database. You provide its name and credentials
  // With this connection I can make any normal SQL
  // calls to it like SELECT, UPDATE, INSERt
  let database = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE_NAME
    }
  });

  return database;
}