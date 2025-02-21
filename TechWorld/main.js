const Tienda = require("./src//models/Tienda.js");
const Producto = require("./src/models/Producto.js");



const tienda = new Tienda("TechWorld");

const p1 = new Producto(1, "Laptop HP", "Computadoras", 1200, 10);
const p2 = new Producto(2, "iPhone 13", "Celulares", 900, 5);
const p3 = new Producto(2, "Macbook", "Computadores", 9900, 8);
const p4 = new Producto(2, "Audífonos bluetooth", "Accesorios", 250,24);

tienda.adicionarProductosTienda(p1);
tienda.adicionarProductosTienda(p2);
tienda.adicionarProductosTienda(p3);
tienda.adicionarProductosTienda(p4);

console.log("Productos en la tienda:");
console.log(tienda.verProductosTienda());

console.log("\nAñadiendo productos al carrito...");
tienda.adicionarProductoCarrito(1, 2);
tienda.adicionarProductoCarrito(2, 1);

console.log("\nCarrito de compras:");
console.log(tienda.verCarrito());


console.log("\nDisminuir cantidad producto del carrito...");
tienda.eliminarProductoCarrito(1, 2);

console.log("\nCarrito actualizado:");
console.log(tienda.verCarrito());


console.log("Productos en la tienda:");
console.log(tienda.verProductosTienda());
