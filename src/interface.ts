// if me having more same interface therical he going adding in the same interface together
interface Point {
    x: number;
    y: number;
}

interface Point {
    z: number;
}

// this mode explicito!!
const PontoA : Point = {x:1, y:0}
// create new interface
interface Pessoa {
    name: string,
    [key:string]: string | number ,
    sexo?: 'm' | 'f'
}
// practice more about this!!
//explicito
const contratado : Pessoa ={
    name: 'felipe',
    idade:'20'
}
function ola(pessoa: Pessoa){
    console.log('ola', pessoa.name)
}
//this called documentation
ola({name:'ola programmer', sexo:'f'})

const professor: Pessoa = {
    name: 'Joaquim',
    idade:'50',
}
function saudacao(pessoa: Pessoa){
    console.log('hi teach', pessoa.name)
}
saudacao({name:'francisco', sexo: 'm'})


// this called way implicita!! 
//because is referred number been string!!
let kinda = 'more issues for me'
kinda = 10


// this way called explicito 
//i have show of one way better to built production
let Other: string = 'Felipe'
Other =19
//contains language  explict but have erros!!


//make more about interface

interface Cidadao {
    adress: string,
    city: string,
    zipcode: number,
    complementer?: 'casa' |'apartamento' 
}

const empregado : Cidadao = {
    adress: 'avenida circular',
    city: 'porto alegre',
    zipcode:921,
    complementer:'apartamento' ,
}

function Greets (humano: Cidadao){
    console.log('teste interface here', humano.adress)
}

Greets({adress:'manoel bandeira'})


//remember way inplicite
//theorical he called and seeing error
var employ = 'felipe'
employ = 'another employing'

//this is mode explicito when write and wrote code i have use better ways explicito
let a : string = 'martins' 
a = 10





//create and work with class
// i getting implement interface insede out class, but i have called all required

//guidance object
class Funcionario implements Pessoa {
    //object constructor read about this to remember
    name: string ;
    [key:string]: string | number ;
    sexo?: 'm' | 'f' ;
    constructor(name:string ){
        this.name = name
     }
    
}
//remerber is called explicitament
let func1: Funcionario 
func1= new Funcionario('Martins programmer')
let func2: Funcionario = new Funcionario('Felipe Martins')