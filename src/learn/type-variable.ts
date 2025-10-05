export{} ; 
//T : type 
//U , V , X 
//khia bao function  generic
function merge<T, U> (a : T , b : U ){
    return [a , b] ;
}

const a = merge<string , number>("ha nguyen" , 20) ; 

//khoi tao 

type MyArrString = string[] ; 

type MyArrNumber = number[] ; 

type MyArr<T> = T[] ; 

type MyData<T> = T ; 

const b :MyArr<number> = [2 , 21, 321, 32, 2] ; 

