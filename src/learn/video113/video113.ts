export{} ; 

console.log("video 113") ; 


class Person { 
    name : string ; 
    age : number ; 

    //overload 
    constructor() ; 
    constructor(name:string , age : number) ; 

    constructor(name?:string , age? :number) 
    {
        this.name = name ?? "unknown"; 
        this.age = age ?? 0; 
    }
}
const haNguyen = new Person("ha" , 20) ;

console.log("my name is : ",haNguyen.name ,"and age : ",haNguyen.age)
