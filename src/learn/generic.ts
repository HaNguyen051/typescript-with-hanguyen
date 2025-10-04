export{} ; 

function testNumber(value : number){
    return value ;
}

function testString(value : string){
    return value ;
}

const a = testNumber(123) ; 
const b = testString("hane") ; 

function testGeneric<T> ( value : T)
{
    return value ; 
}
const a1 = testGeneric<number>(123) ; 
const b1 = testGeneric<string>('Hello World') ; 

//ko nen dung any
function getFirstElement(arr :any[]){
     return arr[0] ; 
}
// traditional function
function getFirstElementByGeneric<T>(arr : T[]){
    return arr[0] ; 
}
// arrow function 

const getFirst = <T>(arr : T[]) => {
 return arr[0] ; 
}