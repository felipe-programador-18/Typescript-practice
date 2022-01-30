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
    search:string ;
    print: string;
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

class Salefinal {
    constructor(){
        return this
    }
}



let caught: Libraries 
caught = new Libraries('introducao a python',32321312 ,2,10);

let survey: Organizesale
survey = new Organizesale('introducao a python','introducao a python');