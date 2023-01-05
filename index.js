const router = require("./router"); // import router
const mongoose = require("mongoose"); // import mongodb config
const cors = require("cors"); // import cors middleware

// Create Server #1
const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

// Connecting MongoDB to Node.js (after connection string > .env)
const dotenv = require("dotenv"); // env variable
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// Adding middlewares for CRUD
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// using the router file
app.use(router);
