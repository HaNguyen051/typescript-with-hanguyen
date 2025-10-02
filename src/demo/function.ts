export{} ; 

console.log("video 92 ") ; 

const sayHi  = (name: string) =>  {
    console.log("hehe" , name) ; 
}

//ko can dinh nghia ma ham tu infer ko can thiet
const sum = (a:number, b:number)=> {
    return a + b ; 
}
sayHi("ha Nguyen") ; 
const mySum = sum(6, 9 ) ; 
console.log("my sum = " , mySum) ; 