const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Hello......");
});
app.post("/user", function(req, res) {
  console.log("ttttt", req.body);
  res.json({
    message: "get dta okay",
    result: req.body,
    status: 200
  });
});

app.get("/user", (req, res) => {
  const dataList = [
    {
      userName: "Abc",
      email: "abc@gmail.com",
      password: "1333",
      confirmPassword: "1333"
    },
    {
      userName: "Abcd",
      email: "abcd@gmail.com",
      password: "13433",
      confirmPassword: "13433"
    }
  ];
  res.json({
    message: "Data List",
    data: dataList,
    status: 200
  });
});

app.listen(PORT, function() {
  console.log("server is running on port:" + PORT);
});




mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
  .then(()=>{
    app.listen(4545,()=>{
      console.log("Application is ready to serve on port:4545");
    })
  })
  .catch(e => {
    console.log(e);
  });
