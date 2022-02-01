// need create interface to together this class

interface Book {
    nomebook: string;
    ibm: number;
    quantidade: number;
    sumbook: number;
    }
    
    interface SALE {
      pesquisa: string;
      update: string;
    }
    
    interface Finnalysale {
    value:number ;
    print: string;
    }



    interface VIRTUALYBOOK{
        nomebook:string;
        pdfonline: object;
        valueversion: number;  
      }
// need create interface to together this clas
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

class Libraries implements Book {  
    nomebook: string;
    ibm: number;
    quantidade: number;
    sumbook: number ;
    constructor(nomebook:string, ibm: number, quantidade: number, sumbook: number){
       this.nomebook = nomebook ,
       this.ibm = ibm,
       this.quantidade = quantidade,
       this.sumbook = sumbook
    }
}

class Organizesale implements SALE {
    pesquisa: string ;
    update: string ;

    constructor(pesquisa: string, update: string){
         this.pesquisa = pesquisa ,
         this.update = update
    }
}

class Salefinal implements Finnalysale {
    value:number ;
    print: string;
    
    constructor(value: number, print: string){
         this.value = this.value,
         this.print = print
    }
}



let caught: Libraries 
caught = new Libraries('introducao a python',32321312 ,2,10);

let survey: Organizesale
survey = new Organizesale('introducao a python','introducao a python');

let together : Salefinal
together = new Salefinal(100, 'show invoice')




class Employees{
    constructor(nome:string){
      this.nome = nome
    }
    nome:string
}

let func1: Employees = new Employees('FELIPE MARTINS')