const Tienda = require('../../TechWorld/src/models/Tienda.js');
const Producto = require('../../TechWorld/src/models/Producto.js');

describe('Carrito de compras', () => {

    let tienda;
    beforeAll(() => {
        tienda = new Tienda("TechWorld");
        const p1 = new Producto(1, "Laptop HP", "Computadoras", 1200, 10);
        const p2 = new Producto(2, "iPhone 13", "Celulares", 900, 5);
        const p3 = new Producto(3, "Macbook", "Computadores", 9900, 8);
        const p4 = new Producto(4, "Audífonos bluetooth", "Accesorios", 250, 24);

        tienda.adicionarProductosTienda(p1);
        tienda.adicionarProductosTienda(p2);
        tienda.adicionarProductosTienda(p3);
        tienda.adicionarProductosTienda(p4);
    })

    test('Debe poder agregar un producto al carrito de compras', () => {
        const resp = tienda.adicionarProductoCarrito(1, 2)
        expect(resp).toBe(true)
    })

    test('El carrito de compras debe quedar actualizado con el producto y cantidad adicionado', () => {
        const resp = tienda.verCarrito();
        expect(resp.length).toBeGreaterThan(0);
    })

})