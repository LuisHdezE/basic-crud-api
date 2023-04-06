const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Lista de productos");
});
app.get("/:id", (req, res) => {
  res.send(`Mostrar el producto`);
});
app.post("/", (req, res) => {
  console.log(` Se creo un nuevo producto con el codigo ${req.body.codigo}`);
  res.send(req.body);
});
app.put("/:id", (req, res) => {
  console.log(` Se actualizo el producto con el codigo ${req.params.id}`);
  res.send(req.params);
});
app.delete("/:id", (req, res) => {
  res.send(` Se elimino el producto con el codigo ${req.params.id}`);
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});
