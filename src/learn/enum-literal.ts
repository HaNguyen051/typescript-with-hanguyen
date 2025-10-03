export{} ; 
console.log("video 100") ; 

//literal type  : Gan san gia tri de chon 
type TSuperRole = "USER" | "SUPERADMIN" | "ADMIN" ; 

const ortherUser : TSuperRole = "SUPERADMIN" ; 

//enums : Enum dạng số (Numeric enums) mac dinh
 //thay doi giong tren
enum roleEnum {
    USER = "USER",//0
    SUPERADMIN = "SUPERADMIN", //1 
    ADMIN = "ADMIN"//gan chuoi 
}

const myRole : roleEnum = roleEnum.ADMIN ; 
const myRole1 : roleEnum = roleEnum.USER ; 

console.log(">>> enum myRole = " , myRole1) ; 
console.log(">>> enum myRole = " , myRole) ; 
