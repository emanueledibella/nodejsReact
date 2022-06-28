const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});



app.get("/", (req, res) => {
  res.end("complimenti"); 
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/db", (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
