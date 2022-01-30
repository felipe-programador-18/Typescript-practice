// need create interface to together this class
// need create interface to together this clas
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
var Libraries = /** @class */ (function () {
    function Libraries(nomebook, ibm, quantidade, sumbook) {
        this.nomebook = nomebook,
            this.ibm = ibm,
            this.quantidade = quantidade,
            this.sumbook = sumbook;
    }
    return Libraries;
}());
var Organizesale = /** @class */ (function () {
    function Organizesale(pesquisa, update) {
        this.pesquisa = pesquisa,
            this.update = update;
    }
    return Organizesale;
}());
var Salefinal = /** @class */ (function () {
    function Salefinal() {
        return this;
    }
    return Salefinal;
}());
var caught;
caught = new Libraries('introducao a python', 32321312, 2, 10);
var survey;
survey = new Organizesale('introducao a python', 'introducao a python');
