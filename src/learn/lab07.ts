 //console.log(`[GET-INOF] NAME = ${this.name} , EMAIL = ${this.email} , ROLE = ${this.role}`)
 export{} ; 

 type TRole = "student" | "teacher" ; 
 class User {
    public name : string  ; 
    private _email: string; 
    protected role : TRole ; 

    constructor(name : string , email : string , role ?:TRole)
    {
        this.name = name ; 
        this._email = email ; 
        this.role = role ?? "student";
    }
    public get email(): string {
         return this._email;
     }
     public set email(value: string) {
         this._email = value;
     }
     printUserInfo(){
        console.log(`[GET-INFO] NAME = ${this.name} , EMAIL = ${this._email} , ROLE = ${this.role}`)
     }
 }
 class Teacher extends User {
    courses : string[] = [] ; 
    constructor(name : string , email : string , role :TRole){
         super(name ,email,role) ; 
    }
    addCourse(courseName: string) {
        this.courses.push(courseName) ; 
    }
    printUserInfo(){
        console.log(`[${this.role}] ${this.name} - Courses Taught: ${this.courses.join(",")}
`) ;
    }

 }
 class Student extends User {
    enrolledCourses : string[] = [] ; 
    constructor( name : string , email : string ){
         super(name ,email) ; 
    }
    enroll(courseName: string) {
        this.enrolledCourses.push(courseName) ; 
    }
    printUserInfo(){
        console.log(`[${this.role}] ${this.name} - Enrolled courses: ${this.enrolledCourses.join(",")}
`) ;
    }

 }
function printUserInfo(user: User): void {
    user.printUserInfo(); // Tính đa hình: phương thức này sẽ được gọi tùy theo loại đối tượng
}
const hoidanit = new Student("Hoidanit", "hoidanit@email.com");
hoidanit.enroll("TypeScript Pro");
hoidanit.enroll("JavaScript Pro");
const eric = new Teacher("Eric", "eric@email.com", "teacher");
eric.addCourse("React");
eric.addCourse("Nodejs");

console.log("=== SỬ DỤNG TÍNH ĐA HÌNH ===");
printUserInfo(hoidanit);    // Gọi printUserInfo của Student
printUserInfo(eric);        // Gọi printUserInfo của Teach

console.log("\n=== GỌI TRỰC TIẾP ===");
hoidanit.printUserInfo();
eric.printUserInfo();
