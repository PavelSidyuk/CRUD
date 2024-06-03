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
Object.defineProperty(exports, "__esModule", { value: true });
const sql3_data_1 = require("../../sql3-data");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');
        if (name && age) {
            const user = { name, age: parseInt(age) };
            const createUser = yield (0, sql3_data_1.addUser)(user);
            res.writeHead(201);
            res.end(JSON.stringify(createUser));
        }
        else {
            res.writeHead(404);
            res.end(JSON.stringify('Name and/or age are required'));
        }
    }));
});
exports.default = createUser;
