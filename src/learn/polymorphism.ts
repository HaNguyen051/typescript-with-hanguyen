export{} ;

interface IAnimal{
    makeSound() : void ; 
}
class Dog implements IAnimal {
    makeSound(): void {
        console.log("con cho keu go go >>>>") ; 
    }
}
class Cat implements  IAnimal{
    makeSound(): void {
        console.log("con meo keu meo meo >>>>") ; 
    }
}
class Pig implements IAnimal {
    makeSound(): void {
        console.log("con lon keu un un in in >>>>") ; 
    }
}

const myCat = new Cat() ; 
const myDog = new Dog() ; 
const myPig = new Pig() ; 



const myZoo :IAnimal[] = [myCat , myDog , myPig] ; 

myZoo.forEach((animal , index) => {
    animal.makeSound() ; 
})