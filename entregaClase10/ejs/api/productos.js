const express = require("express");
const { Router } = express;
const Contenedor = require("./contenedor");
const multer = require("multer");

let router = new Router();
let archivo = new Contenedor("text.json");



router.get("/", async(req, res) => {
  let data = await archivo.getAll();
  res.json(data);
  //res.send(productos);
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage });

router.post("/",upload.single("myfile"), (req, res) => {
    let file = req.file
    if(!file){
        res.status(400).send({message:"Error al cargar"})
    }
    let newProduct = {
        name: req.body.name,
        price: req.body.price,
        img: req.file.path
    }
    console.log(req.file)
    let idProductoAgregado = archivo.save(newProduct)
    res.send(`El archivo se guardo correctamente y el id del nuevo productos es ${idProductoAgregado}`)
});


router.get("/:id", async(req, res) => {
  let data = await archivo.getById(req.params.id);
  res.json(data);
});


router.delete("/:id", async(req, res) => {
  let data = await archivo.deleteById(req.params.id);
  res.json(data);
  //res.send(productos);
});

router.put("/:id", async(req, res) => {
  let newProduct = {
    name: req.body.name,
    price: req.body.price,
    img: req.body.img
}

  let data = await archivo.putById(req.params.id,newProduct);
  res.json(data)
  
  
});


module.exports = router


