class Producto {
  constructor(
    codigo,
    nombre,
    precio = 0,
    costo = 0,
    descripcion = "",
    stock = 0
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.costo = costo;
    this.descripcion = descripcion;
    this.stock = stock;
  }
}

module.exports = Producto;
