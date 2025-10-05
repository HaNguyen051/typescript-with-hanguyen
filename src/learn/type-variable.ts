export{} ; 
//T : type 
//U , V , X 


//khai bao function  generic
function merge<T, U> (a : T , b : U ){
    return [a , b] ;
}

const a = merge<string , number>("ha nguyen" , 20) ; 

//khai bao generic ket hop kieu type

type MyArrString = string[] ; 

type MyArrNumber = number[] ; 

type MyArr<T> = T[] ; 

type MyData<T> = {
    data : T 
} ; 

const b :MyArr<number> = [2 , 21, 321, 32, 2] ; 


//generic voi classes 
class MagicBox<T>{
    content : T ; 

    constructor(content : T)
    {
        this.content = content ; 
    }
}

const numberRic  = new MagicBox<number>(123) ; 
const c = new MagicBox<string>("dadadadadadaadaadaad") ; 


//generic with interface 
interface IData<T>{
    data : T ; 
}

const a1 : IData<string> = {
    data : "ha gnuyeb"  ,  
}

interface IUser{
    id : number ; 
    name : string;
    email :string ;  
}
interface IAPIRespone<T>{
    status : number ; 
    data : T ; 
}

const fetchUser = async () => { 
    const res = await fetch("http://localhost:8000/users")
    const dataAPI = await res.json()  as IUser[]; 

    const  result : IAPIRespone<IUser[]> = {
        status : 200, 
        data : dataAPI , 
    }
    result.data.map(item => item.name) ; 
}
