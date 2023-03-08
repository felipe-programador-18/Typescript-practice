// this called typage implicita!!
let adding  = 10

//this called typace implicita!!
var cities = 'porto alegre'


//tipe tipagem explicita!!
function soma(E:number,F: number){
    return E+F
}
const receive = soma(10,20)

// function explict!!
function Append(G:number ,H: number){
    return G*H
}
const caughtadd =  Append(40,50)



const readFile = async() =>{
    return 10
}


const NameSubmit = (names:string, nickname:string) => {
    return names + nickname
}

const ReadName = NameSubmit("felipe", 'programmer')


let NumberArry= [123,323,4,545,123,4535,234]

const TestingMore =  NumberArry.map((more) => {
    return more *2
})