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
//generic constraints

    
function printValue<T>(value: T) {
  console.log(value);
}
    //with basic
function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
} ; 
logLength("avs") ; 

logLength([1 , 2  , 2]) ; 

    //with interface 
function testInterface<T extends IUser>(value : T){
    console.log(value) ; 
}

testInterface({id : 13 , name : "hanguyen" , email : " abc@gmail.com" , phone : 2811214211}) ; 
// testInterface({id : 13 , name : "hanguyen" ,}) ; 


//raang buoc voi class 
    class Animal{
        move() {
            console.log("moving");  
        }
    }
    class Dog extends Animal{
        bark()
        {
            console.log("woof!");
            
        }
     }

    function testClass<T extends Animal> (value : T) {
        console.log(value) ;
        //neu dung method cua con  trong animal : 
        if(value instanceof Dog) {
            value.bark() ; 
        }
    }
    const a2 = new Dog() ; 
    const b2 = new  Animal() ; 
    testClass(a2) ; 
    testClass(b2) ; 


    //rang buoc keyof

    function getProperty<T , K extends keyof T>(obj : T , key : K)
    {
        return obj[key] ; 
    }
    const user = {name : "hoidanit" , age : 25} ; 
    getProperty(user, "name") ; 
    getProperty(user, "age") ; 
    getProperty(user, "email") ; 
    