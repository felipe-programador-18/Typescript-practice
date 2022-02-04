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
// this called typage implicita!!
let a = 10;
a = 'string';
//this called typace implicita!!
var city = 'porto alegre';
city = 19;
//tipe tipagem explicita!!
function soma(E, F) {
    return E + F;
}
const receive = soma(10, 20);
// function explict!!
function Append(G, H) {
    return G * H;
}
const caught = Append(40, 50);
const readFile = () => __awaiter(void 0, void 0, void 0, function* () {
    return 10;
});
