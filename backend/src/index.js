const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { port } = require("./config/vars.js");
const guardianRoutes = require("./routes/guardian");

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

const app = express();

app.use(
  "/api/guardian",
  jsonParser,
  cors(),  
  guardianRoutes
);

app.use((err, req, res, next) => {
  // general error handling
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  if (err.data) {
    data = err.data;
  } else {
    data = "";
  }
  res.status(status).json({
    message: message,
    data: data
  });
});

app.listen(port, () => {
  console.log("server start on port " + port);
});