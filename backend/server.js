const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const postRoute = require("./controller/articles_controller.js");
const userRoute = require("./controller/users_controller.js");
const authRoute = require("./controller/authentication_controller.js");

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hey there!!!");
// });

mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/article", postRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);

app.use(express.static(path.join(__dirname, "../frontend", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
