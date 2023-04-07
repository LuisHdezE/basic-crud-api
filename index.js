const express = require("express");
const bodyParser = require("body-parser");

const Producto = require("./model/producto");

let listaProductos = [];

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(listaProductos);
});
app.get("/:codigo", (req, res) => {
  // Buscar el producto en la lista de productos
  const productoEncontrado = listaProductos.find(
    (producto) => producto.codigo === req.params.codigo
  );

  // Verificar si se encontró un producto con ese código
  if (productoEncontrado) {
    // Crear una nueva instancia de la clase Producto con los valores del producto encontrado
    res.send(productoEncontrado);
  } else {
    console.log("Producto no encontrado");
    res.send("500");
  }
});
app.post("/", (req, res) => {
  //extraemos los valores del request body
  let codigo = req.body.codigo;
  let nombre = req.body.nombre;
  let descripcion = req.body.descripcion;
  let precio = req.body.precio;
  let costo = req.body.costo;
  let stock = req.body.stock;

  //actualizamos la variable product
  const product = new Producto(
    codigo,
    nombre,
    precio,
    costo,
    descripcion,
    stock
  );

  //adicionamos los valores a la lista
  listaProductos.push(product);

  console.log(` Se creo un nuevo producto con el codigo ${req.body.codigo}`);
  res.send(product);
});
app.put("/:codigo", (req, res) => {
  const index = listaProductos.findIndex(
    (producto) => producto.codigo === req.params.codigo
  );
  if (index !== -1) {
    listaProductos[index].codigo = req.body.codigo;
    listaProductos[index].nombre = req.body.nombre;
    listaProductos[index].descripcion = req.body.descripcion;
    listaProductos[index].precio = req.body.precio;
    listaProductos[index].costo = req.body.costo;
    listaProductos[index].stock = req.body.stock;
    console.log("Producto actualizado:", listaProductos[index]);
    res.send("Producto actualizado:");
  } else {
    console.log("Producto no encontrado");
    res.send("500");
  }
});
app.delete("/:codigo", (req, res) => {
  listaProductos = listaProductos.filter(
    (producto) => producto.codigo !== req.params.codigo
  );
  res.send(` Se elimino el producto con el codigo ${req.params.codigo}`);
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});
