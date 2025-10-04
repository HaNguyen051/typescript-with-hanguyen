export{} ; 



interface IAnimal {
    makeSound() : void ; 
}
interface IFlyable {
    doFly() : void ; 
}

class Bird implements IAnimal , IFlyable {
    name : string |undefined ; 
    makeSound(){
        console.log("chip chip")
    }
    doFly(){
        console.log("chim bay") ; 
    }
}



class Person{
    gender : string | undefined ; 
}
class NhanVien {
    id : number ; 
    name : string ; 

    constructor(id : number , name : string)
    {
        this.id = id ; 
        this.name = name ; 
    }
}

class LapTrinhVien extends NhanVien implements IAnimal{
    
    skill : string ; 
    makeSound() {
        console.log("oowowowowo")
    }
    constructor(skill : string , name:string , id: number)
    {   super(id , name) ; 
        this.skill = skill ; 
    }
}

const myBird = new Bird() ; 

myBird.makeSound() ; 