const express = require("express");
const productosRoutes = require("./api/productos");

const app=express();
//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .

app.set("view engine","pug");
app.set("views","./views");

app.use("/api/productos",productosRoutes);
/* app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/pr",(req,res)=>{
    res.render("productos")
})
 */
app.listen(8080,()=>{
    console.log("server ok")
})