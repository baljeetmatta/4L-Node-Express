/*
const http=require("http");
const server=http.createServer((req,res)=>{



})
server.listen(3000);

*/


const express=require("express");
const path=require("path")
const app=express();
const products=require("./data");

app.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting server...")
    else
    console.log('Server started at 3000 port');
});

app.use(express.static("public"));
app.use(express.json());

app.use(express.urlencoded({extended:true}));


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


// /sendData/1
app.get("/sendData",(req,res)=>{

   console.log(req.query);
})
app.post("/sendData",(req,res)=>{

    console.log(req.body);

    res.end();
 })
 app.get("/jsonData",(req,res)=>{
    //res.json({"name":"abc","age":20});
    res.json(products);



 })
 app.get("/singleData/:x",(req,res)=>{
    //res.json({"name":"abc","age":20});
  //  res.json(products);
  //console.log(req.params.x);
  const newProducts=products.filter((item)=>{
    if(item.id==req.params.x)
    return true;
  })
  res.json(newProducts);



 })
 app.get("/queryData",(req,res)=>{

    const newProducts=products.filter((item)=>{
        if(item.id==req.query.id)
        return true;
      })
      res.json(newProducts);

 })
app.all("*",(req,res)=>{
    res.status(404).send("Page not found");

})

//get,post,put,delete,all
//fetch,save,update,delete
/*
npm install body-parser


const bodyparser=require("body-parser");
app.use(bodyparse.urlEncoded({extended:true}));

*/
