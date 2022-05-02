const express = require("express");
const { Router } = express;
const Contenedor = require("./contenedor");
const multer = require("multer");

let router = new Router();
let archivo = new Contenedor("text.json");

let titulo = "Que Me Vaya Bien!!"


router.get("/", async (req, res) => {
  let data = await archivo.getAll();
   
  //  res.render("./partials/portada",{titulo:"QUE ME VAYA BIEN"})
  res.render("index", { data: data ,titulo:titulo});
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

router.get("/form",(req,res)=>{
  res.render("form",{titulo:titulo})
})


router.post("/form", upload.single("myfile"), (req, res) => {
  /* let file = req.file;
  if (!file) {
    res.status(400).send({ message: "Error al cargar" });
  } */

  let newProduct = {
    name: req.body.name,
    price: req.body.price,
    urlFoto: req.body.urlFoto,
  };
  //console.log(req.file);
  let idProductoAgregado = archivo.save(newProduct);
 // res.send(
 //   `El archivo se guardo correctamente y el id del nuevo productos es ${idProductoAgregado}`
 // );
  res.render("form")
});

router.get("/:id", async (req, res) => {
  let data = await archivo.getById(req.params.id);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  let data = await archivo.deleteById(req.params.id);
  res.json(data);
  //res.send(productos);
});

router.put("/:id", async (req, res) => {
  let newProduct = {
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
  };

  let data = await archivo.putById(req.params.id, newProduct);
  res.json(data);
});

module.exports = router;
