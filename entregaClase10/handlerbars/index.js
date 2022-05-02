const express =require("express")
const {engine}=require("express-handlebars")
const productosRoutes = require("./api/productos");

const app = express()

//midelwars de aplicacion
app.use(express.json())
app.use(express.urlencoded({extended:false}))//para decodificar la url .
//app.use(express.static("public")) con motores de plantillas nose usa public

app.set("view engine","hbs")
app.set("views","./views")
//configuracion de plantilla
app.engine(
    "hbs",
    engine({
    extname:".hbs",
    defaultLayout:"main.hbs",
    partialsDir:__dirname+"/views/partials" //estos son los componentes

}))




app.use("/api/productos",productosRoutes);






//el metodo render busca la carpeta views
/* app.get("/",(req,res)=>{
    res.render("index",{titulo:titulo})
})

app.get("/form",(req,res)=>{
    res.render("form",{titulo:titulo})
})
 */
app.listen(8080, ()=>{
    console.log("server ok!")
})