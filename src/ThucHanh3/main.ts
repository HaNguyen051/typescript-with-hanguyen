

import { deleteTodo , removeTodo } from "./deleteTodo.js";
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

        handleAddNewWithJS(newTodo) ; 
        //close modal
        //@ts-ignore
        const myModal = bootstrap.Modal.getOrCreateInstance('#creatTodo', {keyboard: false })  
        myModal.hide() ; 

        //clear todo 
        inputElement.value = "" ; 
        //@ts-ignore

        const toast = new bootstrap.Toast('#liveToast')
        toast.show()
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
}

const handleAddNewWithJS = (todo : myTodo) => {
  
const tableBody = document.querySelector('#tableTodo tbody') ; 
let index = 0 ; 

const listStr = localStorage.getItem("todoList"); 
if(listStr)
{
        index = JSON.parse(listStr).length - 1; 
}
  // Tạo phần tử dòng mới
 const newRow = document.createElement('tr');
  // Gán HTML cho dòng
 newRow.innerHTML = `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td><button
             class = "btn btn-danger delete-btn"
             data-id=${todo.id} ; 
             >
             Xoá</button></td>
           </tr>
        `
        // Thêm dòng vào cuối bảng
        tableBody?.appendChild(newRow);
        //gan su kien onclick cho row vua tao 
        const btn =document.querySelector(`[data-id= "${todo.id}"]` ) ;
        btn?.addEventListener('click' , ()=>{
            const id = btn.getAttribute("data-id") ;       
            //delete todo
            if(id){
                removeTodo(+id) ; 
                //delete rơ with js 
                const row = btn.closest("tr") ; 
                if(row) row.remove() ; 
                //@ts-ignore
                const toast = new bootstrap.Toast('#liveToastDelete')
                toast.show()
            } 
        }) 
}

getLocal() ; 
deleteTodo() ; 

