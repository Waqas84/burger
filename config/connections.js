var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgerDB"
});
};

// var connection = mysql.createConnection({
//   port: 8889,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgerDB"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

connection.connect();
module.exports = connection;