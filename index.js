const express = require("express");
let app = express();

let port = 3000;
app.listen(port, ()=>{
    console.log("app is listening....");
})
app.get("/", (req, res)=>{
    console.log("request sent ...");
    res.send("This is root path");
})
app.get("/home", (req, res)=>{
    console.log("request sent ...");
    res.send("This is home path");
})
app.get("/dashboard", (req, res)=>{
    console.log("request sent ...");
    res.send("This is dashboard path");
})
app.get("/*slant", (req, res)=>{
    console.log("request sent ...");
    res.send("Path doesn't exist");
})
