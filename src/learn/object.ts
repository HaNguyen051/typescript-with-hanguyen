
export{} ; 
console.log("video 94") ; 






const person :  {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
    }
     = {
    name  : "Ha" , 
    age : 20 , 
    address : "Ha Noi" ,  
    isHandsome : true 
    }

console.log("Person 1 : " , person) ; 

const printInfo = (people:  {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
    }) =>{
        console.log("Your name is : " , people.name )
}
printInfo(person) ; 

//optional 

const student1: {
    name: string;
    address: string;
    phone?: string;
} = {
    name : "Eric" , 
    address : "Bac Ninh" , 
    phone :  "918312312"  , 
}

const student2: {
    name: string;
    address: string;
    phones?: string;
} = {
    name : "Eric" , 
    address : "Bac Ninh" , 
}