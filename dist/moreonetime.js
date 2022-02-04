"use strict";
//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPLE)
class Libraries {
    constructor(nomebook) {
        this.nomebook = nomebook;
    }
}
class Pricebook {
    constructor(pricebook) {
        this.pricebook = pricebook;
    }
}
class Finnaly {
    constructor(bookone) {
        this.bookone = bookone;
    }
}
let fun1 = new Libraries('Learning Mysql');
let prec = new Pricebook(99.90);
let finasale = new Finnaly(99.90);
