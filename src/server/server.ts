import express from"express";
import Routes from "./controllers/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Middlewares from "./middlewares/index.js";
import path from "path";
console.log("routes",Routes)
const server = express();
const dbOptions = {
    useNewUrlParser: true
};

// server configuration

console.log("start server configuration\n");
server.use(express.static("dist/public"));
// server.use(express.static("./dist/public'));
// server.use(bodyParser);
// server.use(express.static(path.join(__dirname, '../client/build')))

//Middlewares

// ROUTES
server.get("/",(req,res) => {
    console.log("dirname in route",path.dirname('/dist/public/index.html'));
    // res.sendFile(__dirname + '/index.html');
    res.sendFile('index.html')
});
server.use("/competitor",Routes.competitorRouter);
server.use("/trainer",Routes.trainerRouter);
// server.use(Middlewares.pageNotFoundMiddleware);

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
