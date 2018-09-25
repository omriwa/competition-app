"use strict";
exports.__esModule = true;
var express_1 = require("express");
var trainerRouter = express_1["default"].Router();
trainerRouter.use(function (req, res, next) {
    next();
});
trainerRouter.get("/", function (req, res) {
    res.send("trainer");
})
    .get("/register", function (req, res) {
    res.send("trainer register");
})
    .get("/login", function (req, res) {
    res.send("trainer login");
});
exports["default"] = trainerRouter;
