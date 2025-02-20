// Cart.js
class Cart {
    #productos;

    constructor() {
        this.#productos = new Map(); // Mapeo de productoId -> { producto, cantidad }
    }

    agregarProducto(producto, cantidad) {
        if (cantidad <= 0 || cantidad > producto.getStock()) return false;

        const productoId = producto.getId();
        if (this.#productos.has(productoId)) {
            this.#productos.get(productoId).cantidad += cantidad;
        } else {
            this.#productos.set(productoId, { producto, cantidad });
        }

        producto.disminuirStockProducto(cantidad);
        return true;
    }

    eliminarProducto(productoId, cantidad) {
        if (!this.#productos.has(productoId)) return false;

        const item = this.#productos.get(productoId);
        if (cantidad >= item.cantidad) {
            this.#productos.delete(productoId);
        } else {
            item.cantidad -= cantidad;
        }

        item.producto.aumentarStockProducto(cantidad);
        return true;
    }

    verCarrito() {
        return JSON.stringify(
            Array.from(this.#productos.values()).map(({ producto, cantidad }) => {
                let info = producto.getInfo(); 
                return {
                    ...info,
                    cantidad: cantidad
                };
            }),
            null,
            2
        );
    }

    calcularTotalCarrito() {
        return Array.from(this.#productos.values()).reduce((total, { producto, cantidad }) => {
            return total + producto.getPrecio() * cantidad;
        }, 0);
    }
    
    
    
    

    vaciarCarrito() {
        this.#productos.clear();
    }
}

module.exports = Cart;
