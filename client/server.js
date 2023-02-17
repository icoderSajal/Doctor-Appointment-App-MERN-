const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// main object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// user Routes for
app.use("/api/v1/user", require("./routes/userRoutes"));
// octor routes
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
// admin routes
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//stativc file

app.use(express.static(path.join(__dirname, "./frontent-client")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontent-client/build/index.html"));
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(
    `Server is running ${process.env.NODE_MODE} Mode on port no-> ${process.env.PORT}`
      .bgMagenta.italic
  );
});
