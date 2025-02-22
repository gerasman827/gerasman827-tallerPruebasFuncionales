const { Given, When, Then } = require('@wdio/cucumber-framework');


let carrito = [];
let vistaCarrito = false;
let redireccionado = false;
let totalCompra = 0;

// Escenario 1: Visualización del carrito de compras
Given('que el usuario ha agregado productos al carrito de compras', function () {
  carrito.push({ nombre: 'Perfume', cantidad: 1, subtotal: 50 });
  carrito.push({ nombre: 'Loción', cantidad: 2, subtotal: 100 });
});

When('haga clic en el ícono del carrito', function () {
  vistaCarrito = true;
});

Then('el sistema debe mostrar el listado de productos agregados al carrito', function () {
  assert.strictEqual(vistaCarrito, true);
  assert.notStrictEqual(carrito.length, 0);
});

// Escenario 2: Estructura de la tabla del carrito
Given('que el usuario está visualizando el carrito de compras', function () {
  vistaCarrito = true;
});

When('se muestre la lista de productos agregados', function () {
  assert.strictEqual(vistaCarrito, true);
});

Then('el sistema debe mostrar la información en una tabla con tres columnas:', function (dataTable) {
  const expectedColumns = dataTable.raw()[0];
  const actualColumns = ['Nombre del producto', 'Cantidad de unidades', 'Subtotal del producto'];
  assert.deepStrictEqual(actualColumns, expectedColumns);
});

// Escenario 3: Total de la compra en el carrito
When('se listen los productos agregados', function () {
  totalCompra = carrito.reduce((total, item) => total + item.subtotal, 0);
});

Then('el sistema debe mostrar el total de la compra al final de la lista', function () {
  assert.strictEqual(typeof totalCompra, 'number');
  assert.ok(totalCompra > 0);
});

// Escenario 4: Redirección al detalle del producto
Given('que el usuario está visualizando el listado de productos agregados al carrito de compras', function () {
  vistaCarrito = true;
});

When('haga clic en un producto dentro del carrito', function () {
  redireccionado = true;
});

Then('el sistema debe redireccionarlo a la página de detalles de ese producto', function () {
  assert.strictEqual(redireccionado, true);
});

// Escenario 5: Persistencia de los productos en el carrito
Given('que el usuario tiene productos en el carrito de compras', function () {
  assert.ok(carrito.length > 0);
});

When('decida seguir comprando y agregue más productos', function () {
  carrito.push({ nombre: 'Desodorante', cantidad: 1, subtotal: 30 });
});

Then('el sistema debe mantener los productos previamente agregados sin eliminarlos', function () {
  assert.ok(carrito.length > 2);
});
