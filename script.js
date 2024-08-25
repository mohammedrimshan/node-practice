const http=require("http");
const fs=require("fs");
const path=require("path");
const { error } = require("console");


// const server= http.createServer((req,res)=>{//http.createServer to create server
//     res.write(`hello Are you OK?
// this is Node JS`);//res.write = to create response
//         console.log(req.url);
//         console.log("hello")
//     res.end();//end the response 
// }).listen(3001,()=>console.log("server started"));//.listen for create http port 

const server= http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"})//connecting HTML file to Node.js
        res.end(data);
        });
    } 
    if(req.url==="/contact"){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
            if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"})
        res.end(data);
        });
    } 
});

const PORT= process.env.PORT || 3001;

server.listen(3001,()=>console.log(`server started on ${PORT}`));