const express =require("express")
const {engine}=require("express-handlebars")

const app=express()


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



app.listen(8080, ()=>{
    console.log("server ok!")
})