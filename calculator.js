const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html"); // It will fetch the file name index.html locally and will show the output on server.
})

app.post("/", function(req, res) {

  var num1 = Number(req.body.val1);
  var num2 = Number(req.body.val2);

  var result = num1 + num2;
  res.send(" your total sum is :" +result);
})

app.listen(3000, function() {
  console.log("Port 3000 is working now");
})
