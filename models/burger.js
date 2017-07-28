var orm = require("../config/orm.js");

var burger = {
  all: function(callback) {
    orm.all("burgers", function(result) {
      callback(result);
    })
  },
  create: function(values, callback) {
    orm.create("burgers", ["burger_name"], [values], function(result) {
      callback(result)
    })
  },
  update: function(colObj, condition, callback) {
    orm.update("burgers", colObj, condition, function(result) {
      callback(result);
    })
  },
  remove: function(condition, callback) {
    orm.remove("burgers", condition, function(result) {
      callback(result);
    })
  },
  devour: function (condition, callback) {
    orm.update("burgers", {
      devoured: 1
    }, condition, function (data) {
      callback(data);
    })
  }
}

module.exports = burger;