// this mode explicito!!
var PontoA = { x: 1, y: 0 };
// practice more about this!!
//explicito
var contratado = {
    name: 'felipe',
    idade: '20'
};
function ola(pessoa) {
    console.log('ola', pessoa.name);
}
//this called documentation
ola({ name: 'ola programmer', sexo: 'f' });
var professor = {
    name: 'Joaquim',
    idade: '50'
};
function saudacao(pessoa) {
    console.log('hi teach', pessoa.name);
}
saudacao({ name: 'francisco', sexo: 'm' });
// this called way implicita!! 
//because is referred number been string!!
var kinda = 'more issues for me';
kinda = 10;
// this way called explicito 
//i have show of one way better to built production
var Other = 'Felipe';
Other = 19;
var empregado = {
    adress: 'avenida circular',
    city: 'porto alegre',
    zipcode: 921,
    complementer: 'apartamento'
};
function Greets(humano) {
    console.log('teste interface here', humano.adress);
}
Greets({ adress: 'manoel bandeira' });
//remember way inplicite
//theorical he called and seeing error
var employ = 'felipe';
employ = 'another employing';
//this is mode explicito when write and wrote code i have use better ways explicito
var a = 'martins';
a = 10;
//create and work with class
// i getting implement interface insede out class, but i have called all required
var Funcionario = /** @class */ (function () {
    function Funcionario(nome) {
        this.nome = nome;
    }
    return Funcionario;
}());
//remerber is called explicitament
var func1;
func1 = new Funcionario('Martins programmer');
var func2 = new Funcionario('Felipe Martins');
