export{} ; 


console.log("video 97" ) ;
interface IUsers {
    id : number ;   
    name  : string ; 
    email : string ; 
}
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users")
    const data  = (await res.json() ) as IUsers[]; 
    console.log(">>>> check data" , data[0].email) ; 
}
fetchUsers() ; 
