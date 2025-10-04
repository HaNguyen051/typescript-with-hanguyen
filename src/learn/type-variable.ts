export{} ; 
//T : type 
//U , V , X 

function merge<T, U> (a : T , b : U ){
    return [a , b] ;
}

const a = merge<string , number>("ha nguyen" , 20) ; 