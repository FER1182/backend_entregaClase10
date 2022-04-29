const express = require("express")

const app = express()

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .

let  arr =[]

app.set("view engine" ,"ejs")
app.set("views","./views")

//obtener productos
app.get("/getAll",(req,res)=>{
    res.render("index",{data:arr})
})

app.get("/form",(req,res)=>{
    res.render("form")
})

//crear productos
app.post("/creatPr",(req,res)=>{
    console.log(req.body)
    let oj = req.body
    arr.push(oj)
    res.render("exito")
})


app.listen(8080,()=>{
    console.log("server ok")
})