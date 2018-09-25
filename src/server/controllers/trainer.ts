import express from "express";
const trainerRouter = express.Router();

trainerRouter.use((req,res,next) => {
    next();
});

trainerRouter.get("/",(req,res) => {
    res.send("trainer");
})
.get("/register",(req,res) => {
    res.send("trainer register");
})
.get("/login",(req,res) => {
    res.send("trainer login");
})

export default trainerRouter;