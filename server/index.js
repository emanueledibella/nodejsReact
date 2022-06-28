const express = require('express');
const mysql = require('mysql');
const { readFile, writeFile } = require("fs").promises;

// Express.js
const PORT = process.env.PORT || 3001;
const app = express();
// Mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});
// file system
const filename = '';
const towrite = '';

// Routes
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

app.get("/read", (req, res) => {
  readFile(filename, "utf8")
  .then(text => {
      console.log(`The file contains: ${text.length} characters`);
      console.log(text);
  }, error => {
      console.log(`There was an error while reading the file ${filename}: ${error.message}`);
  });
});

app.get("/write", (req, res) => {
  writeFile(filename, towrite, {
      flag: 'a'
  }).catch(error => {
      console.log(`There was an error when writing the file: ${filename}: ${error.message}`);
  });
});


// listen
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
