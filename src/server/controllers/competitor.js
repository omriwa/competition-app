"use strict";
exports.__esModule = true;
var express_1 = require("express");
var competitorRouter = express_1["default"].Router();
competitorRouter.use(function (req, res, next) {
    next();
});
competitorRouter.get("/", function (req, res) {
    res.send("competitor");
})
    .get("/register", function (req, res) {
    res.send("register");
})
    .get("/login", function (req, res) {
    res.send("login");
});
exports["default"] = competitorRouter;
