require("dotenv").config();
const express = require("express");
const cors = require("cors");
const refBuilderRoutes = require("./routes/refBuilder.js");
const app = express();

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log("Error: ", err);

    console.log("MongoDB Connection status: ", mongoose.connection.readyState);
  }
);

app.use(refBuilderRoutes);

app.listen(5000, () => {
  console.log("Referral Builder Server is listening on port 5000");
});
