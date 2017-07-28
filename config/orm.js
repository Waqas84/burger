var connection = require("../config/connections.js");

var printQuestionMarks = function(val) {
  var arr =[];
  for(var i =0; i < val; i++){
    arr.push("?");
  }
  return arr.toString();
}

var objToSql = function(obj) {
  var arr =[];
  for(var key in obj){
    arr.push(key + " = '" + obj[key] + "'");
  }
  return arr.toString();
}

var orm = {
  all: function(table, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err,data) {
      if(err)throw err;
      callback(data);
    })
  },
  create: function(table, cols, values, callback) {
    var queryString = "INSERT INTO ??(??) VALUES ";
    queryString += "(" + printQuestionMarks(values.length) + ")";
    connection.query(queryString,[table,cols,...values], function(err, data) {
      if(err)throw err;
      callback(data);
    })
  },
  
  update: function(table, colValsObj, condition, callback) {
  var queryString= "UPDATE ?? SET ? WHERE ?";
   
    connection.query(queryString,[table,colValsObj,condition], function(err, data) {
      if(err)throw err;
      callback(data);
    })
  },
  remove: function(table, condition, callback){
    var queryString ="DELETE FROM ?? WHERE ?"
    connection.query(queryString,[table,condition], function(err, data) {
      if(err)throw err;
      callback(data);
    })
  }

}

module.exports = orm;