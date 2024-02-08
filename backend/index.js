const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/db");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8400;

const router = require("./router/song.routes.js");

// Make connection to database
connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () =>
  console.log("App running on:", `http://localhost:${PORT}`)
);
