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
const url = require("url");
module.exports = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.url.split('/')[2]);
    let success = yield (0, sql3_data_1.deleteUser)(id);
    if (success) {
        res.writeHead(204);
        res.end();
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ onmessage: 'user not found' }));
    }
});
