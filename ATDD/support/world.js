const { setWorldConstructor } = require("@cucumber/cucumber");

class CustomWorld {
    constructor() {
        this.items = [];
        this.total = 0;
        this.errorMessage = null;
    }
}

setWorldConstructor(CustomWorld);