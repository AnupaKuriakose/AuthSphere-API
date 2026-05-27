import pkg from 'pg';//This imports the popular pg (node-postgres) library.
//This code sets up a secure connection pool to a PostgreSQL database using Node.js
const { Pool } = pkg; //unpacks the Pool class from the package 
console.log('',process.env.DATABASE_URL);
//This initializes a new connection pool using your database URL.
// A pool manages multiple connections simultaneously, allowing your app to handle 
// multiple database requests efficiently without constantly opening and closing connections.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
// This exports the configured pool so you can import it into other files 
export default pool;