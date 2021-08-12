const express = require("express");
const connectDB = require("./config/connectDB");
///const cors = require("cors");
const user = require("./routes/user");
const list = require("./routes/donorlist");
const app = express();
//app.use(cors());

// 4- parse data
app.use(express.json());

require("dotenv").config({ path: "./config/.env" });
//connect 
connectDB();

//router

app.use("/user", user);
app.use("/api/list", list);

//run
const PORT = process.env.PORT || process.env.port;
app.listen(PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`the server is running on http://localhost:${PORT}`)
});