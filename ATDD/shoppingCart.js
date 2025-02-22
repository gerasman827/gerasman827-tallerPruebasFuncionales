class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addProduct(name, price, quantity = 1) {
        if (quantity <= 0) {
            throw new Error("La cantidad no puede ser negativa o cero");
        }
        this.items.push({ name, price, quantity });
        this.calculateTotal();
    }

    calculateTotal() {
        this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    getItems() {
        return this.items;
    }

    getTotal() {
        return this.total;
    }

    updateQuantity(productName, newQuantity) {
        if (newQuantity < 0) {
            throw new Error("La cantidad no puede ser negativa");
        }
        const item = this.items.find((item) => item.name === productName);
        if (item) {
            item.quantity = newQuantity;
            this.calculateTotal();
        }
    }
}

module.exports = ShoppingCart;