import express from"express";
import Routes from "./controllers/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Middlewares from "./middlewares/index.js";
console.log("routes",Routes)
const server = express();
const dbOptions = {
    useNewUrlParser: true
};

// server configuration

console.log("start server configuration\n");
// server.use(bodyParser);

//Middlewares


// ROUTES
server.get("/",(req,res) => {
    res.send("bbbbbbbbbb");
});
server.use("/competitor",Routes.competitorRouter);
server.use("/trainer",Routes.trainerRouter);
server.use(Middlewares.pageNotFoundMiddleware);

// LISTEN
// process.env.PORT
server.listen(8080,(e) => {
    console.log("start server listening\n");
    (e ? console.log("server listen error:",e) : console.log("server is up"));
});
// DB CONNECT
console.log("connect to db\n");
let dbUrl = 'mongodb://' + process.env.IP;
mongoose.connect(dbUrl).then(() => {
    console.log("db is connected");
})
.catch((e) => {
    console.log("server connect to db errorw:",e);
});
