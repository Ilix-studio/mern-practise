const express = require("express");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler   )

app.listen(port, () => console.log(`Server started on port ${port}`));
