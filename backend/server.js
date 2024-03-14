require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const transaction = require('./routes/transaction');


// Define a route to clear data
app.delete('/api/clear-data', async (req, res) => {
  try {
    // Implement the data clearing logic here (e.g., delete records from MongoDB)
    await transaction.deleteMany({}); // Replace 'Transaction' with your actual model

    res.status(200).json({ message: 'Data cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});









const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes

app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })