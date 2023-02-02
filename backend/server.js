const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const PORT = process.env.PORT;
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoute = require("./controller/articles_controller.js");
const userRoute = require("./controller/users_controller.js");
const authRoute = require("./controller/authentication_controller.js");

// app.get("/", (req, res) => {
//   res.send("Hey there!!!");
// });

mongoose.set("strictQuery", true);
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`we are connected to mongo: ${MONGO_URI}`);
    console.log(process.env.JWT_SECRET);
    console.log(PORT);
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

app.use("/article", postRoute);

app.use("/users", userRoute);

app.use("/auth", authRoute);

app.use(express.static(path.join(__dirname, "../frontend", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on`, PORT);
});
