const express = require("express")
const productosRoutes = require("./api/productos");

const app = express()

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .



app.set("view engine" ,"ejs")
app.set("views","./views")
app.use("/api/productos",productosRoutes);




app.listen(8080,()=>{
    console.log("server ok")
})