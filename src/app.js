//Importamos:

const ProductManager = require("./product-manager");
const express = require("express");
const PUERTO = 8080;

//Instancia de la clase ProducManager

const manager = new ProductManager("./src/prodcutos.json");

//Creamos el server:

const app = express();

app.get("/products", async (req, res) => {
    try {
        //Cargamos el array de productos:
        const arrayProductos = await manager.leerArchivo();

        //Guardo el query :

        let limit = parseInt(req.query.limit);

        if (limit) {
            const arrayConLimite = arrayProductos.slice(0, limit);
            return res.send(arrayConLimite);
        } else {
            return res.send(arrayProductos);
        }

    } catch (error) {
        console.log(error);
        return res.send("Eror al procesar la solicitud");

    }
})

//Listen:

app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto 8080")
})