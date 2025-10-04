export{} ; 


//tu tao 1 class student 


//class :định nghĩa tổng quát , miêu tả chung chung
class Student {
    //miêu tả đặc điểm 
    id : number  | undefined; 
    name : string | undefined; 

    study() {
        console.log(this.name , "đang học")
    }
}

const student1 = new Student()  ; 
student1.id = 1 ; 
student1.name = "hane" ; 
student1.study() ; 

console.log(">>>>=========") ; 

const student2 = new Student()  ; 
student2.id = 2 ; 
student2.name = "thao van" ; 
student2.study() ;

