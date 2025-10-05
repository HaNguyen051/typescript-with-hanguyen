

import { deleteTodo } from "./deleteTodo.js";
import { getLocal } from "./getLocal.js";
import { getRandomInt } from "./support.js";

const btnElement = document.getElementById("btn") ; 
const inputElement = document.getElementById("todoName") as HTMLInputElement ;

type myTodo = {
    id  : number ; 
    name : string ; 
}
btnElement?.addEventListener("click" , ()=> {
    
    if(inputElement)
    {
        const name = inputElement.value ; 
        const newTodo  : myTodo= {
            id : getRandomInt(1, 1000) ,
            name
        }
        //save to do to local storage
        handleTodo(newTodo) ; 
        //close modal
        //@ts-ignore
        const myModal = bootstrap.Modal.getOrCreateInstance('#creatTodo', {keyboard: false })  
        myModal.hide() ; 

        //clear todo 
        inputElement.value = "" ; 
    }
  
    
}) 
const handleTodo = (toDo : myTodo) => {
    const todoStr = localStorage.getItem("todoList") ; 
    if(todoStr)
    {
        //update 
        const todoArr = JSON.parse(todoStr) as myTodo[] ; 
        todoArr.push(toDo) ; 

        localStorage.setItem("todoList" , JSON.stringify(todoArr))
    }
    else{
        //create
        localStorage.setItem("todoList" , JSON.stringify([toDo])) ; 
    }
    window.location.reload() ; 
}

getLocal() ; 
deleteTodo() ; 