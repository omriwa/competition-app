"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_js_1 = require("./controllers/index.js");
var mongoose_1 = require("mongoose");
var index_js_2 = require("./middlewares/index.js");
console.log("routes", index_js_1["default"]);
var server = express_1["default"]();
var dbOptions = {
    useNewUrlParser: true
};
// server configuration
console.log("start server configuration\n");
// server.use(bodyParser);
//Middlewares
// ROUTES
server.get("/", function (req, res) {
    res.send("bbbbbbbbbb");
});
server.use("/competitor", index_js_1["default"].competitorRouter);
server.use("/trainer", index_js_1["default"].trainerRouter);
server.use(index_js_2["default"].pageNotFoundMiddleware);
// LISTEN
// process.env.PORT
server.listen(8080, function (e) {
    console.log("start server listening\n");
    (e ? console.log("server listen error:", e) : console.log("server is up"));
});
// DB CONNECT
console.log("connect to db\n");
var dbUrl = 'mongodb://' + process.env.IP;
mongoose_1["default"].connect(dbUrl).then(function () {
    console.log("db is connected");
})["catch"](function (e) {
    console.log("server connect to db errorw:", e);
});
