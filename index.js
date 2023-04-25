const express=require("express");
const cookieparser=require("cookie-parser");
const sessions=require("express-session");

const userRoutes=require("./routes/userRoutes")
const app=express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
const oneday=1000*60*60*24;
app.use(sessions({
    secret:'lakjdlkjas@lka$%1',
    saveUninitialize:true,
    resave:false,
    cookie:{maxAge:oneday}
}));

app.use("/users",userRoutes);
// /users/, /users/orders

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})
app.get("/users/home",(req,res)=>{

    res.send("User home page "+req.params.data);


})
//   /users/home,/users/payments,/users/orders





/*Listening to the port*/
app.listen(3000,(err)=>{

    if(err)
    console.log("unable to start server");
    else
    console.log("Server started..");
});
