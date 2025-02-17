class ProductoService {
    static actualizarStockProducto(Producto, cantidad) {
        if(cantidad < 0) {
            console.log('La cantidad no puede ser negativa');
            return;
        } else {
            Producto.stock += cantidad;
            console.log(`🔄 Stock actualizado: ${Producto.name} ahora tiene ${Producto.stock} unidades.`);
        }
    }
}

module.exports = ProductoService;