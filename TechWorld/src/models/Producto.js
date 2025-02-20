// Producto.js
class Producto {
    #id;
    #name;
    #categoria;
    #precio;
    #stock;

    constructor(id, name, categoria, precio, stock) {
        this.#id = id;
        this.#name = name;
        this.#categoria = categoria;
        this.#precio = precio;
        this.#stock = stock;
    }

    getInfo() {
        return {
            producto: this.#name,
            categoria: this.#categoria,
            precio: this.#precio,
            stock: this.#stock
        };
    }
    
    
    

    getId() {
        return this.#id;
    }

    getPrecio() {
        return this.#precio;
    }

    getStock() {
        return this.#stock;
    }

    disminuirStockProducto(cantidad) {
        if (cantidad > 0 && cantidad <= this.#stock) {
            this.#stock -= cantidad;
        }
    }

    aumentarStockProducto(cantidad) {
        if (cantidad > 0) {
            this.#stock += cantidad;
        }
    }
}

module.exports = Producto;
