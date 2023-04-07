# API Básico de Lista de Productos

Este es un API básico construido con Node y Express para manejar una lista de productos. Los productos se almacenan en un archivo JSON y se utilizan la clase Producto para crear y manipular los objetos de producto.

## Instalación

Para instalar las dependencias del proyecto, utiliza el siguiente comando:

```npm install
```

## Uso

Para ejecutar el API, utiliza el siguiente comando:

```npm start
```

El API estará disponible en <http://localhost:3000>.

## Endpoints

- GET /productos
Devuelve una lista de todos los productos.

- GET /productos/:id
Devuelve el producto con el ID especificado.

- POST /productos
Crea un nuevo producto. Se debe enviar un objeto Producto en el cuerpo de la solicitud.

- PUT /productos/:id
Actualiza el producto con el ID especificado. Se debe enviar un objeto Producto en el cuerpo de la solicitud.

- DELETE /productos/:id
Elimina el producto con el ID especificado.

Ejemplo de objeto Producto

```Copy code
{
      "codigo": "001",
      "nombre": "Laptop Dell Inspiron 15",
      "precio": 789.99,
      "costo": 589.99,
      "descripcion": "Laptop de 15 pulgadas con procesador Intel Core i5, 8GB de RAM y 512GB de almacenamiento SSD",
      "stock": 20
    } 
```

## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Por favor, crea una rama nueva y envía tus cambios mediante un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver el archivo de licencia para más detalles.

## Autor

Este proyecto fue creado por Luis Hernández Elias. Si tienes alguna pregunta o comentario, por favor envía un correo electrónico a luishdez72@yahoo.com.
