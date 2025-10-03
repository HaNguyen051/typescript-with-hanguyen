
export {} ; 

console.log("video 99") ; 

type TAge = number | null ; 

let name: null | string = null ; 

const printname = (myName : string | null) => {
    // if(myName)
    // myName.toUpperCase() ; 

    //postfix!
    (myName!).toLowerCase() ; 
    console.log("name :" , myName)
} 

const age  = undefined  ; 

printname("") ; 