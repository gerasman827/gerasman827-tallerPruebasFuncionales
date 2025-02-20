const Tienda = require('../../TechWorld/src/models/Tienda.js');
const Producto = require('../../TechWorld/src/models/Producto.js');

describe('Modificar el carrito de compras', () => {

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

        tienda.adicionarProductoCarrito(1, 2)
        tienda.adicionarProductoCarrito(2, 2)
    })

    test('No debe permitir modificar la cantidad de un producto por una cantidad inválida', () => {    
        const cantidadAumetar = -1;
        const resp = tienda.sumarCantidadProductoEnCarrito(1,cantidadAumetar);           
        expect(resp).toEqual(null);        
    })

    test('Debe permitir vaciar el carrito', () => {        
        const cantProductos = JSON.parse(tienda.verCarrito());
        expect(cantProductos.length).toBe(2)
        const vaciarCarrito = tienda.vaciarCarrito();
       expect(vaciarCarrito).toEqual(undefined);        
    })
})