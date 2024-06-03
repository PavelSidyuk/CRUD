"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
const userRouter_1 = __importDefault(require("./userRoutes/userRouter"));
const node_path_1 = __importDefault(require("node:path"));
const routeHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parseUrl = url_1.default.parse(req.url, true);
    const path = parseUrl.pathname;
    res.setHeader('Content-Type', 'application/json');
    if (path === '/users' || path.startsWith('/users/')) {
        yield (0, userRouter_1.default)(req, res);
    }
    else {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(404);
        res.end(JSON.stringify({ onmessage: 'Route not found' }));
    }
});
module.exports = routeHandler;
