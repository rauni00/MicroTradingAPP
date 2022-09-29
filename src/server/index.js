const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser());
app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.get("/api/fail", (req, res) =>
  res.status(403).json({ msg: "You are not allowed to access this" })
);

app.use("/api/stock", require("./stock"));

app.listen(4000, () => console.log("Server is listening on port 4000!"));
