export{} ; 


class Person {
    name : string  | undefined; 
    id : string  | undefined;
    
    goSleep() {
        console.log("go sleep with person!") ; 
    }

}
class Student extends Person{
    experience : string |undefined ; 
    goSleep() {
        //super
        super.goSleep() ; 
        console.log("go sleep with student!") ; 
    }
}
const hane = new Student() ; 

hane.goSleep() ; 
