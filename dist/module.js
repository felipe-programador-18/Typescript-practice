"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//very interesting express it works inside typescript!!
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//always request first later response
app.get('/', (req, res) => {
    res.send('hi there i am Felipe programmer18');
});
app.listen(8080, () => {
    console.log('running new versions');
});
