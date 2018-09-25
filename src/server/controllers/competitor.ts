import express from "express";
const competitorRouter = express.Router();

competitorRouter.use((req,res,next) => {
    next();
});

competitorRouter.get("/",(req,res) => {
    res.send("competitor");
})
.get("/register",(req,res) => {
    res.send("register");
})
.get("/login",(req,res) => {
    res.send("login");
})

export default competitorRouter;