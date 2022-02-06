var assey = 10


//create interface and remmeber about interface

interface Point {
    x:number,
    y:number
}

interface PointA {
    z: string
}

const Union: Point = {x:10, y:30,z:10}

class Structure {    
    constructor(size: number){
     this.size = size
   }
   size: number
}

let Tooth : Structure = new Structure(1203)


interface Boss {
    him: string,
    age:number,
    gender?:'m' | 'f',
    email:string
}

const data: Boss = { him:'Felipe programmer',age:40, gender:'m', email:'machadofelipe2016@outlook.com'}

class Companies implements Boss{
    him: string
    age:number
    gender?:'m' | 'f'

    constructor( him: string, age:number , gender?:'m'| 'f'){
      this.him = him;
      this.age = age ;
      this.gender = gender;
    
    }
}

let Togemore : Companies = new Companies ('martins',32,'m')