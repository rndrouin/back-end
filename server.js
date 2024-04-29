// Import required modules
import express from "express";
import newsRouter from './routes/news/news.js';
import usersRouter from './routes/users/users.js';
import queriesRouter from './routes/queries/queries.js'

// Create an express app object
const app = express();

// Set the port to 4000
const port = process.env.PORT || 4000; 

// Make use of express.json() middleware
app.use(express.json());

// Integrate router implementations
app.use('/news', newsRouter);
app.use('/queries', queriesRouter);
app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});