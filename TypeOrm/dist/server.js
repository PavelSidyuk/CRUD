"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const routeHandler = require('./routes/router');
let port;
port = 3000;
const server = http_1.default.createServer(routeHandler);
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
