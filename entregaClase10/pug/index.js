const express = require("express");


const app=express();

app.set("view engine","pug");
app.set("views","./views");

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/pr",(req,res)=>{
    res.render("productos")
})

app.listen(8080,()=>{
    console.log("server ok")
})