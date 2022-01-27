// if me having more same interface therical he going adding in the same interface together
interface Point {
    x: number;
    y: number;
}

interface Point {
    z: number;
}

const PontoA : Point = {x:1, y:0}

interface Pessoa {
    name: string,
    [key:string]: string | number ,
    sexo?: 'm' | 'f'
}
// practice more about this!!
const felipe : Pessoa ={
    name: 'felipe',
    idade:'20'
}

function ola(pessoa: Pessoa){
    console.log('ola', pessoa.name)
}
ola({name:'ola programmer', sexo:'f'})