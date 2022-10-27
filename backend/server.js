const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db.js");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
