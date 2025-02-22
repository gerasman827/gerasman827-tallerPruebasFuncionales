const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const ShoppingCart = require("../../shoppingCart");

let shoppingCart;
let errorMessage;

Given("que el usuario ha agregado 2 productos al carrito de compras", function () {
    shoppingCart = new ShoppingCart();
    shoppingCart.addProduct("Producto 1", 10, 1);
    shoppingCart.addProduct("Producto 2", 15, 1);
});

When("hace clic en el ícono del carrito", function () {
    this.items = shoppingCart.getItems();
});

Then("el sistema debe mostrar el listado de los 2 productos agregados al carrito", function () {
    expect(this.items.length).to.equal(2);
    expect(this.items[0].name).to.equal("Producto 1");
    expect(this.items[1].name).to.equal("Producto 2");
});

Given("que el usuario está visualizando el carrito de compras", function () {
    shoppingCart = new ShoppingCart();
    shoppingCart.addProduct("Producto 1", 10, 1);
    shoppingCart.addProduct("Producto 2", 15, 1);
});

When("se listan los productos agregados", function () {
    this.total = shoppingCart.getTotal();
});

Then("el sistema debe mostrar el total de la compra de ${float} al final de la lista", function (expectedTotal) {
    expect(this.total).to.equal(expectedTotal);
});

Given("que el usuario intenta modificar la cantidad de {string} en el carrito", function (productName) {
    shoppingCart = new ShoppingCart();
    shoppingCart.addProduct(productName, 10, 1);
});





Then("el sistema debe mostrar un mensaje de error {string}", function (expectedErrorMessage) {
    expect(errorMessage).to.equal(expectedErrorMessage);
});

Then("no permitir la modificación", function () {
    const item = shoppingCart.getItems().find((item) => item.name === "Producto 1");
    expect(item.quantity).to.equal(1); // La cantidad no cambia
});