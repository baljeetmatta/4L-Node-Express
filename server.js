/*
const http=require("http");
const server=http.createServer((req,res)=>{



})
server.listen(3000);

*/


const express=require("express");
const path=require("path")
const app=express();

app.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting server...")
    else
    console.log('Server started at 3000 port');
});

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Welcome to home page");


})
app.get("/about/:x",(req,res)=>{
    //res.writeHead(200,"{content-type:text/html}")
   // res.status(200).send("<b>Welcome to about page</b>");
   // console.log(path.resolve(__dirname,"./public/aboutus.html"));
console.log('data recieved',req.params.x);
res.send("Recieved "+req.params.x);
       // res.status(200).sendFile(path.resolve(__dirname,"./public/aboutus.html"));

})
app.get("/test/:id/users/:x",(req,res)=>{
    //res.write/Head(200,"{content-type:text/html}")
   // res.status(200).send("<b>Welcome to about page</b>");
   // console.log(path.resolve(__dirname,"./public/aboutus.html"));
//console.log('data recieved',req.params.x);
//res.send("Recieved "+req.params.x);
res.send("test called  "+req.query.name);

       // res.status(200).sendFile(path.resolve(__dirname,"./public/aboutus.html"));

})

// app.get("/aboutus.html",(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,"./public/aboutus.html"));


// })
// app.get("/style.css",(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,"./public/style.css"));


// })

app.all("*",(req,res)=>{
    res.status(404).send("Page not found");

})

//get,post,put,delete,all
//fetch,save,update,delete