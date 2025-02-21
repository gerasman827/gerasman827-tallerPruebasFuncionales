const Tienda = require('../../TechWorld/src/models/Tienda.js');
const Producto = require('../../TechWorld/src/models/Producto.js');
describe('Ver el carrito de compras', () => {

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


    test('Debe poder ver el listado de los elementos agregados al carrito', () => {
        const productos = JSON.parse(tienda.verCarrito());
        expect(productos.length).toBeGreaterThan(0);
        
        productos.forEach((producto) => {
            expect(producto).toHaveProperty('producto');
            expect(producto).toHaveProperty('categoria');
            expect(producto).toHaveProperty('precio');
            expect(producto).toHaveProperty('stock');
            expect(producto).toHaveProperty('cantidad');
        });
    })

    test('Debe mostrar el total de la compra para los elementos que están en el carrito', () => {
        const TOTAL_PRODUCTOS_AGREGADOS = 4201;
        const totalCompra = tienda.calcularTotalCarrito();
        
        expect(totalCompra).toBe(TOTAL_PRODUCTOS_AGREGADOS);
    });

    test('Debe persistir los productos agregados al carrito aún cuando navegue hacia el home de productos', () => {
        const productos = JSON.parse(tienda.verCarrito());
        const navegacioHomeProductos = tienda.verProductosTienda();
        const verNuevamenteCarrito = JSON.parse(tienda.verCarrito());
        expect(verNuevamenteCarrito).toEqual(productos);
    })
    
})