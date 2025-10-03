export {} ; 

console.log("video 103") ; 


interface IPerson {
    name : string ; 
    age : number ; 
    address ?: string ;//optional
    readonly language :string ;  //read only
    sayHi : () => void ; 
}

const user : IPerson = {
    age : 25 , 
    name : "eric" , 
    language : "VN" ,
    sayHi : () =>console.log("im user") ,  
}
user.sayHi() ; 

//extend interface  ; 
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

//user.language = "en" ; 
