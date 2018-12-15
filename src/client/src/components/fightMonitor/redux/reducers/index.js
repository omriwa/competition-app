"use strict";
var redux_1 = require('redux');
//reducers
var score_1 = require("./score");
var timer_1 = require("./timer");
exports["default"] = redux_1.combineReducers({
    score: score_1["default"],
    timer: timer_1["default"]
});
