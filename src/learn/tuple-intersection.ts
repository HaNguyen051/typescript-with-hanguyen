export{} ; 

//tuple = mang co cau trc co dinh 

let example :[string : 10 ] ;
//gioi han so phan tu cho mang biet mang lu tru cai j 
type TTuple = [string? ,  number?, boolean?] ; 

const test : TTuple = [ , 2  , true] ; 

console.log(test) ; 

//intersection type : & 

type TUsername = string | number ;  //union 
let username :TUsername = "hanguye" ; 
username = 123 ; 

//intersection 

type TStudent = {
    id : number ; 
    name : string ; 
}
type TCoder = { 
   address : string; 
   phone : string | number ; 
   language : string ; 
}

type TProgrammer = TCoder & TStudent ; 

const hanguyen : TProgrammer =  { 
    id : 1 ,
    name :  "ha" , 
    address :  "bac ninh" , 
    phone :  132112 , 
    language  :  "javascript" ,
}
