
export {} ; 
console.log("lab 06") ; 

//type aliases 

type TStudent = {
    id : number ; 
    name : string ; 
    email : string ; 
    isPremium : boolean ; 
    contact  : string | number ; 
}
type TCourse = { 
    courseId  : number ; 
    title : string ; 
    price : number ; 
    students : TStudent[] ; 
}
const student1: TStudent = { 
    id : 1 ,
    name : "Ha",
    email : "NguyenVan@gmail.com" ,
    isPremium : true ,
    contact  : "091883131221" ,
}
const student2: TStudent = { 
    id : 2 ,
    name : "Huy",
    email : "NguyenHuy@gmail.com" ,
    isPremium : false ,
    contact  :2312323123 ,
}
const course1 : TCourse = { 
    courseId : 1 ,
    title : "math" , 
    price : 10000 ,
    students : [] ,
}
const course2 : TCourse = { 
    courseId : 2 ,
    title : "poem",
    price : 10000 ,
    students : [] ,
}
const course3 : TCourse = { 
    courseId : 3,
    title : "physic",
    price : 200000000 ,
    students : [] ,
}


const registerStudentToCourse = (student : TStudent , course : TCourse) => {
    course.students.push(student) ; 
}

const  printCourseInfo = (course : TCourse) => {
   
    if(course.students.length)
    {
        console.log("Name Course :" , course.courseId, "Number Student :",course.students.length) ;
        console.log(course.students)
    }
     
    else console.log("Name Course :" , course.courseId,"Chưa có học viên nào") ; 
} 

registerStudentToCourse(student1 , course1) ; 
registerStudentToCourse(student2 , course1) ; 
registerStudentToCourse(student2 , course2) ;  

printCourseInfo(course1) ; 
printCourseInfo(course2) ; 
printCourseInfo(course3) ; 
