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
var contratado = {
    adress: 'avenida circular',
    city: 'porto alegre',
    zipcode: 921,
    complementer: 'apartamento'
};
