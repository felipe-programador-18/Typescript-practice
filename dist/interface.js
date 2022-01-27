var PontoA = { x: 1, y: 0 };
// practice more about this!!
//explicito
var felipe = {
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
