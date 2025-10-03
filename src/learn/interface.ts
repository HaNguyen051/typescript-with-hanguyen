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
//user.language = "en" ; 
