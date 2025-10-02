
export{} ; 
console.log("video : 95") ; 

// type aliases

type TStudent = {
    id : string; 
    name: string;
    address: string;
    age ?: number ; 
    
}
const student1:TStudent
  = {
    id : "sv1" ,
    name : "Eric" , 
    address : "Bac Ninh" , 
    age : 20 , 
}
const student2:TStudent
  = {
    id : "sv1" ,
    name : "Eric" , 
    address : "Bac Ninh" , 
}

const printInfor = (person : TStudent) => { 
    console.log("Student name : " , person.name) ; 
}
printInfor(student1) ; 
printInfor(student2) ; 