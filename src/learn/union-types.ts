

export{} ; 
console.log("video 93") ; 

//union
let username : number | string = "hoidanit" ; 

username = 12 ; 

username = "2ehrwdjqw9uc9ws" ; 

//ko thoa man khi gan method ring
const printfUsername = (username:string | number) => {
    //narrow type 
    if(typeof username === "string")
    console.log("my username = " , username.toLowerCase()) ;
}
printfUsername("GaCK") ; 
