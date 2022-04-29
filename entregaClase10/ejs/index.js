const express = require("express")

const app = express()

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .

let  arr =[]

app.set("view engine" ,"ejs")
app.set("views","./views")

//pagian de entrada
//obtener productos
app.get("/",(req,res)=>{
    res.render("./partials/portada",{titulo:"QUE ME VAYA BIEN"})
})


//obtener productos
app.get("/productos",(req,res)=>{
    res.render("index",{data:arr})
})

app.get("/form",(req,res)=>{
    res.render("form")
})

//crear productos
app.post("/productos",(req,res)=>{
    console.log(req.body)
    let oj = req.body
    arr.push(oj)
    res.render("form")
})


app.listen(8080,()=>{
    console.log("server ok")
})