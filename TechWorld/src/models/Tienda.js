// Tienda.js
const Cart = require("./Cart.js");

class Tienda {
    constructor(name) {
        this.name = name;
        this.productosObject = [];
        this.carritoCompras = new Cart();
    }

    adicionarProductosTienda(productoObject) {
        this.productosObject.push(productoObject);
    }

    verProductosTienda() {
        return this.productosObject.map((p) => p.getInfo());
    }

    buscarProductoEnTiendaPorId(id) {
        return this.productosObject.find((p) => p.getId() === id) || null;
    }

    adicionarProductoCarrito(id, cantidad) {
        const producto = this.buscarProductoEnTiendaPorId(id);
        if (!producto || cantidad <= 0 || cantidad > producto.getStock()) {
            return false;
        }

        return this.carritoCompras.agregarProducto(producto, cantidad);
    }

    verCarrito() {
        return this.carritoCompras.verCarrito();
    }

    eliminarProductoCarrito(id, cantidad) {
        return this.carritoCompras.eliminarProducto(id, cantidad);
    }

    vaciarCarrito() {
        this.carritoCompras.vaciarCarrito();
    }
}

module.exports = Tienda;
