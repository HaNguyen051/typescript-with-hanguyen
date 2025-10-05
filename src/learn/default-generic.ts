export{} ; 
//default generic 
const printValue = <T  = string | number>(value : T) =>{
    return value ; 
}

const b = printValue("hoidanit") ; 
const c = printValue(123) ; 
const d = <boolean>printValue(false) ; 

interface ITest <T = string>{
    data : T
}

const e : ITest = {
    data : "1235"
}
const f :ITest<boolean>={
    data : true , 
}