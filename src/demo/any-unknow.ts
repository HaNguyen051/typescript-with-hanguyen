export{} ; 

let value: any;
value = 10;         // số
value = "hello";    // chuỗi
value = true;       // boolean
value = [1, 2, 3];  // mảng
value = { name: "hoidanit" }; // object

//unknown và any 

let name : unknown = "hanguyen" ; //nhe hon so voi any
if(typeof(name) === "string") {
    name.toLocaleUpperCase() ;
}