export{} ; 

console.log("video106") ; 


const btnElement = document.getElementById("btn") ;

const inputElement = document.getElementById("input_btn") as HTMLInputElement; 

btnElement?.addEventListener("click" , () => {
    console.log(inputElement.value)
    alert("click me")
})

