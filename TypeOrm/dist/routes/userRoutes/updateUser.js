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
module.exports = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    let body = '';
    const id = parseInt(req.url.split('/')[2]);
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const parsedBody = new URLSearchParams(body);
        const updatedData = {};
        parsedBody.forEach((value, key) => {
            updatedData[key] = key === 'age' ? parseInt(value) : value;
        });
        let user = yield (0, sql3_data_1.updateUser)(id, updatedData);
        if (user) {
            res.writeHead(200);
            res.end(JSON.stringify(user));
        }
        else {
            res.writeHead(404);
            res.end(JSON.stringify({ onmessage: 'user not found' }));
        }
    }));
});
