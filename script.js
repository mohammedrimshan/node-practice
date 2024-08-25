// const http=require("http");
// const fs=require("fs");
// const path=require("path");
// const { error } = require("console");


// const server= http.createServer((req,res)=>{//http.createServer to create server
//     res.write(`hello Are you OK?
// this is Node JS`);//res.write = to create response
//         console.log(req.url);
//         console.log("hello")
//     res.end();//end the response 
// }).listen(3001,()=>console.log("server started"));//.listen for create http port 


//anothor form include HTML pages

// const server= http.createServer((req,res)=>{
//     if(req.url==="/"){
//         fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
//             if(err) throw err;
//         res.writeHead(200,{"content-type":"text/html"})//connecting HTML file to Node.js
//         res.end(data);
//         });
//     } 
//     if(req.url==="/contact"){
//         fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
//             if(err) throw err;
//         res.writeHead(200,{"content-type":"text/html"})
//         res.end(data);
//         });
//     } 
// });

// const PORT= process.env.PORT || 3001;

// server.listen(3001,()=>console.log(`server started on ${PORT}`));

// const {logger,Name}=require("./util");

// console.log(logger(),Name);


const express=require("express");

const app=express(); 

const path=require("path");

app.get("/",(req,res)=>{//get express method to simplifies GET method
    res.sendFile(path.join(__dirname,"views","index.html"));
});
app.get("/contact",(req,res)=>{//get express method to simplifies GET method
    res.sendFile(path.join(__dirname,"views","contact.html"));
});
app.get("*",(req,res)=>{//* used for get 404 Error message
    res.status(404); //.status is used for change the status code from default 200 to error 404
    res.send("<h1>404</h1>");
});

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
});


