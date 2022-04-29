const express =require("express")
const {engine}=require("express-handlebars")

const app = express()

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

//el metodo render busca la carpeta views
app.get("/",(req,res)=>{
    res.render("index",{titulo:"hola mundo con hbs"})
})

app.get("/productos",(req,res)=>{
    res.render("productos",{titulo:"hola mundo con hbs"})
})

app.listen(8080, ()=>{
    console.log("server ok!")
})