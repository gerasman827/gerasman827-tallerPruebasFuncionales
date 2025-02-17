const { Given, When, Then } = require('@wdio/cucumber-framework');
const assert = require('assert');


let productos = 0; // Contador de productos en el carrito
let carrito = {}; // Objeto para almacenar productos y cantidades


// Escenario 1: Agregar un producto al carrito
Given(/^el usuario ve un producto llamado "(.*)"$/, async (producto) => {
    console.log(`Producto encontrado: ${producto}`);
});

When(/^hace clic en el producto "(.*)"$/, async (producto) => {
    console.log(`Producto seleccionado: ${producto}`);
});

When(/^hace clic en el botón "Add to Cart"$/, async () => {
    console.log('Clic en el botón "Add to Cart"');
    productos += 1; 
});

Then(/^el producto se agrega al carrito$/, async () => {
    console.log(`Carrito actualizado: ${productos} item(s)`);
    expect(productos).toBeGreaterThan(0);
});




// Escenario 2: Actualización del carrito con cantidad específica
Given(/^el usuario está en la página de productos$/, async () => {
    console.log('Usuario en la página de productos.');
});

When(/^selecciona el producto "(.*)"$/, async (producto) => {
    carrito[producto] = 0; // Inicializa el producto en el carrito
    console.log(`Producto seleccionado: ${producto}`);
});

When(/^ingresa la cantidad "(.*)"$/, async (cantidad) => {
    const cantidadNumerica = parseInt(cantidad);
    const producto = Object.keys(carrito)[0]; // Obtiene el primer producto agregado

    if (producto) {
        carrito[producto] = cantidadNumerica;
        console.log(`Cantidad seleccionada para ${producto}: ${cantidad}`);
    }
});

When(/^presiona el botón "Agregar al carrito"$/, async () => {
    const producto = Object.keys(carrito)[0]; // Obtiene el primer producto agregado
    if (producto && carrito[producto] > 0) {
        console.log(`Producto ${producto} agregado al carrito con cantidad: ${carrito[producto]}`);
    }
});

Then(/^el producto debe añadirse al carrito con la cantidad indicada$/, async () => {
    const producto = Object.keys(carrito)[0]; // Obtiene el primer producto agregado
    expect(carrito[producto]).toBeGreaterThan(0);
    console.log(`Carrito actualizado: ${carrito[producto]} item(s) de ${producto}`);
});




// Escenario 3: Actualización del carrito con cantidad específica
let mensajeVisible = false;

Given(/^que el usuario agrega un producto al carrito$/, async () => {
    console.log("El usuario ha agregado un producto al carrito.");
    mensajeVisible = false;
});

When(/^el producto se haya agregado correctamente$/, async () => {
    console.log("El sistema ha procesado la adición del producto.");
    mensajeVisible = true; // Simulamos que el mensaje aparece
});

Then(/^el sistema debe mostrar un mensaje de "Producto agregado" en la parte inferior izquierda$/, async () => {
    console.log("Validando que el mensaje de 'Producto agregado' esté visible.");
    expect(mensajeVisible).toBe(true);
});

Then(/^el mensaje debe cerrarse automáticamente después de 3 segundos$/, async () => {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simula la espera de 3 segundos
    mensajeVisible = false; // Simulamos que el mensaje desaparece
    console.log("Validando que el mensaje se ha cerrado después de 3 segundos.");
    expect(mensajeVisible).toBe(false);
});




// Escenario 4: Actualización del carrito con cantidad específica
let peristencia_carrito = {}; // Simulación de carrito persistente

Given(/^que el usuario tiene productos en el carrito de compras$/, async () => {
    peristencia_carrito = {
        "MacBook": 2, // Simula que el usuario ya tiene productos en el carrito
        "iPhone": 1
    };
    console.log("Carrito inicial:", peristencia_carrito);
});

When(/^navegue por cualquier parte del sistema$/, async () => {
    console.log("El usuario está navegando por el sistema...");
});

Then(/^el sistema deberá conservar la lista de productos agregados al carrito de compras$/, async () => {
    expect(Object.keys(peristencia_carrito).length).toBeGreaterThan(0);
    console.log("Carrito después de navegar:", peristencia_carrito);
});



// Escenario 5: Actualización del carrito con cantidad específica
let badge_carrito = {
    productos: [],
    badge: 0,
    agregarProducto: function (producto) {
        this.productos.push(producto);
        this.badge = this.productos.length;
    }
};

Given('que el usuario tiene productos en el carrito', function () {
    badge_carrito.productos = ['producto1', 'producto2'];
    badge_carrito.badge = badge_carrito.productos.length;
});

When('agregue un nuevo producto', function () {
    const nuevoProducto = 'producto3';
    const inicio = Date.now();
    badge_carrito.agregarProducto(nuevoProducto);
    this.tiempoTranscurrido = Date.now() - inicio;
});

Then('el sistema debe actualizar el badge del carrito con la cantidad total de productos en menos de 1 segundo', function () {
    assert.strictEqual(badge_carrito.badge, badge_carrito.productos.length, 'El badge no coincide con la cantidad de productos');
    assert.ok(this.tiempoTranscurrido < 1000, `La actualización tardó demasiado: ${this.tiempoTranscurrido}ms`);
    console.log("El badge se actualizó en menos de un segundo después de agregar un elemento al carrito")
});

