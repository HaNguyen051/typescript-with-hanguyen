export{} ; 

abstract class Animal {
    name : string  ;
    id : number ; 
    constructor(name: string , id : number ) {
        this.name = name ; 
        this.id = id ;
    }
  
    abstract makeSound() : void ; 
    test() 
    {
        console.log("do a test  : ", this.name) ; 
    }
}
class Dog extends Animal {
    makeSound(){
        console.log("hahahah") ; 
    }
    color : string ; 
    constructor(color : string  , name : string , id : number )
    {   
        super(name , id) ; 
        this.color = color ; 
    }
    
    
} 
const myDog = new Dog("yellow" , "Duy", 123) ; 
myDog.test() ; 
myDog.makeSound() ; 