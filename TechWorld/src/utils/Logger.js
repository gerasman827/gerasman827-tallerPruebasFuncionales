class Logger {
    static log(message) {
        console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
    }
}

module.exports = Logger;
