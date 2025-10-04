export{} ; 

// include : public(mac dinh) ; private ; protected 

class Animal {
    public name : string ; 
    private id : number ; 
    constructor(name : string , id :number) 
    {
        this.name = name ; 
        this.id = id ; 
    }
    makeSound(){
        console.log("blalaaa with :" , this.id) ; 
    }
}

const lion = new Animal("Lion" , 5) ; 
console.log("name : " , lion.name , "id:" ) ; 
lion.makeSound() ; 