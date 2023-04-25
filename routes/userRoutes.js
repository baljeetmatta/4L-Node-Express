const express=require("express");
const path=require("path");
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("Home page for users")
});

router.get("/orders",(req,res)=>{
    res.send("Users order page")
});
router.get("/ab*xy",(req,res)=>{
    res.send("Users page")
});
router.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/login.html"));

})

router.post("/login",(req,res)=>{

    if(req.body.username==req.body.password)
    {
        res.redirect("/users/home");
    }
    //console.log(req.body);



})

router.get("/home",(req,res)=>{

    res.sendFile(path.join(__dirname,"../public/userhome.html"));

})
module.exports=router;
// /users/, /users/orders