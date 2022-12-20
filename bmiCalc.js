const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Start Server
app.listen(3000, function (req, res) {
  console.log("Server started running in port 3000!");
});

//Process get request via "bmicalculator" path
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//Process form and respond
app.post("/", function (req, res) {
  console.log(req.body.weight + req.body.height);
  let wt = parseFloat(req.body.weight);
  let ht = parseFloat(req.body.height);
  let bmiValue = wt / Math.pow(ht, 2);
  console.log("BMI Value: " + bmiValue);
  res.send("Your BMI is: " + bmiValue);
});
