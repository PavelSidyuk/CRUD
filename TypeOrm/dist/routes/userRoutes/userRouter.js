"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listUsers_1 = __importDefault(require("./listUsers"));
const createUser_1 = __importDefault(require("./createUser"));
const updateUser_1 = __importDefault(require("./updateUser"));
const getUser_1 = __importDefault(require("./getUser"));
const deleteUser_1 = __importDefault(require("./deleteUser"));
const url_1 = __importDefault(require("url"));
const userRouter = (req, res) => {
    const parseUrl = url_1.default.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;
    res.setHeader('Content-Type', 'application/json');
    if (path === '/users' && method === 'GET') {
        (0, listUsers_1.default)(req, res);
    }
    else if (path === '/users' && method === 'POST') {
        (0, createUser_1.default)(req, res);
    }
    else if (path.startsWith('/users/') && method === 'PUT') {
        (0, updateUser_1.default)(res, req);
    }
    else if (path.startsWith('/users/') && method === 'GET') {
        (0, getUser_1.default)(req, res);
    }
    else if (path.startsWith('/users/') && method === 'DELETE') {
        (0, deleteUser_1.default)(res, req);
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ onmessage: 'Route not found' }));
    }
};
module.exports = userRouter;
